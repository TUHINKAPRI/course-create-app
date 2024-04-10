import axios from 'axios';

const baseUrl='http://localhost:4000/api/v1';

export const axiosInstance=axios.create({
  baseURL: baseUrl
})



axiosInstance.interceptors.request.use((config)=>{
  const token=localStorage.getItem('token');
  if(token){
    config.headers['x-access-token']=JSON.parse(token);
    return config
  }
  return config
},(error)=>{return Promise.reject(error)})