import { backUrl } from "@/constants/api";
import { api } from "./axios";

export function signUpAPI(data: {
  email: string;
  nickname: string;
  password: string;
}) {
  return api.post("/user", data).then((response) => response.data);
}
