import { backUrl } from "@/constants/api";
import axios from "axios";

export const api = axios.create({
  baseURL: backUrl,
  withCredentials: true,
});
