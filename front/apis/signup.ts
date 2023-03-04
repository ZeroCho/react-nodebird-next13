import { backUrl } from "@/constants/api";
import axios from "axios";

axios.defaults.baseURL = backUrl;
axios.defaults.withCredentials = true;

export function signUpAPI(data: {
  email: string;
  nickname: string;
  password: string;
}) {
  return axios.post("/user", data).then((response) => response.data);
}
