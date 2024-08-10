// axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://flat-booking-api.onrender.com/api/',
});

export default axiosInstance;
