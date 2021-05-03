import axios from 'axios';

//serve para buscar dados

export const api = axios.create({
    baseURL: 'http://localhost:3000/api',

})