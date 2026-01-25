import axios from "axios";
import { API_BASE_URL } from "../Constants/Constants";

const apiService = axios.create({
  baseURL: API_BASE_URL,
  timeout: 8000,
});

export default apiService;