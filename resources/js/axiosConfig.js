import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://127.0.0:8000/api/',
    headers: { 'Content-Type': 'application/json'}
});

instance.interceptors.request.use(function (config ) {
    const token = localStorage.getItem('token');
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
})

export default instance;
