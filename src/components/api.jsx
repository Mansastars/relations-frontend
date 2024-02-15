// contains the baseURL of the backend

import axios from "axios"

const baseURL =  `https://crm.mansastars.com`
const api = axios.create({
    baseURL
})

api.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

export default api;
