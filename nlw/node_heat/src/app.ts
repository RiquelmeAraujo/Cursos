import "dotenv/config";
import express, { request, response } from "express";
import {router} from "./router";
import { Server } from "../node_modules/socket.io/dist";
import http from "http";
import cors from "cors";

const app = express();
app.use(cors())

const serverHttp = http.createServer(app);

const io = new Server(serverHttp,{
    cors: {
        origin: "*"
    }
});

io.on("connection", socket =>{
    console.log(`Usuário conectado no socket ${socket.id}`);
});

app.use(router);
app.use(express.json());

app.get("/github", (request, response) => {
   response.redirect(
       `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`);
});

app.get("/signin/callback", (request, response) => {
    const{ code } = request.query;
    
    return response.json(code);
});

export { serverHttp, io};