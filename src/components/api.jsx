// contains the baseURL of the backend

import axios from "axios"

const api = axios.create({
    // baseURL: `http://127.0.0.1:5000`
    baseURL: ``
})

export default api;
