import axios from "axios";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL  ,   // "https://accessibility-insight.onrender.com/",      //  import.meta.env.VITE_BASE_URL   for local development
    timeout:10000, //10s  when not responding 10s meanst server time out
    withCredentials:true
})

export default axiosInstance;