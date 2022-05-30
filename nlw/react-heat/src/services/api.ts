import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://locaslhost/4000',
})