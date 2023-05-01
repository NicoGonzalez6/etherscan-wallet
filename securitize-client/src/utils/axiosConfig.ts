import axios from "axios";
import { VITE_API_URL } from "../global/constants/urls";

const timeOut = 1000 * 5;

const axiosInstance = axios.create({
  baseURL: VITE_API_URL,
  timeout: timeOut,
});

export { axiosInstance };
