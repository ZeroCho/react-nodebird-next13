import { AxiosRequestConfig } from "axios";
import { api } from "./axios";

export function loadMyInfoAPI(options?: AxiosRequestConfig) {
  return api.get("/user", options).then((response) => response.data);
}

export function logOutAPI() {
  return api.post("/user/logout").then((response) => response.data);
}

export function signUpAPI(data: {
  email: string;
  nickname: string;
  password: string;
}) {
  return api.post("/user", data).then((response) => response.data);
}

export function signInAPI(data: { email: string; password: string }) {
  return api.post("/user/login", data).then((response) => response.data);
}
