import axios from "axios";
import { response } from "express";
import { prisma } from ".prisma/client";
import {sign} from "jsonwebtoken"
import prismaClient from "../prisma";

/**
 * Receber code(string)
 * Recuperar o access_token no github
 * Recuperar infos do usuario
 * Verificar se o usuario existe no DB
 * --- SIm = gera um token 
 * --- nao = cria no db, gera um token
 *REtornar o token com as infos do user logado
 */

 interface IAccessTokeResponse{
    access_token: string
}

interface IUserResponse{
    avatar_url: string,
    login: string,
    id: number,
    name:string
}

class AuthenticateUserService{
    async execute(code:string){
        const url = "https://github.com/login/oauth/access_token";
        const {data: accessTokenResponse} = await axios.post<IAccessTokeResponse>(url,null,{
            params: {
                client_id: process.env.HITHUB_CLIENT_ID,
                client_secret: process.env.HITHUB_CLIENT_SECRET,
                code,   
            },
            headers:{
                    "Accept": "application/json"
                },
        });
        const response = await axios.get<IUserResponse>("https://api.github.com.user",{
            headers:{
                authorization: `Bearer ${accessTokenResponse.access_token}` 
            },
        });
        
        const {login, id, avatar_url, name} = response.data;

        let user = await prismaClient.user.findFirst({
            where:{
                github_id: id
            }
        })

if(!user){
    user = await prismaClient.user.create({
        data:{
            github_id: id,
            login,
            avatar_url,
            name
        }
    })
}
     const token = sign(
         {
            user:{
                name: user.name,
                avatar_url: user.avatar_url,
                id: user.id
            }
        },
        process.env.JWT_SECRET,
        {
            subject: user.id,
            expiresIn: "1d"
        }
        );

     return {token, user};
    }
}



export{AuthenticateUserService};
