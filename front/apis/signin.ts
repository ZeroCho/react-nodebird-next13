import { backUrl } from "@/constants/api";
import { api } from "./axios";

export function signInAPI(data: { email: string; password: string }) {
  return api.post("/user/login", data).then((response) => response.data);
}
