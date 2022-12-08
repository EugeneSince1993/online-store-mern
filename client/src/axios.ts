import axios from 'axios';

const instance = axios.create({
  baseURL: '/api',
});

instance.interceptors.request.use((config: any) => {
  config.headers.Authorization = window.localStorage.getItem('token');
  return config;
});

export default instance;
