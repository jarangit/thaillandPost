import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_DOMAIN_API,
  headers:{
    "Access-Control-Allow-Origin": "*",
    'Access-Control-Allow-Headers':
      'Origin, X-Requested-With, Content-Type, Accept'
  }
});