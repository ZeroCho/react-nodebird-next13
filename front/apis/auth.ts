import { api } from "./axios";

export function loadMyInfoAPI() {
  return api.get("/user").then((response) => response.data);
}

export function logOutAPI() {
  return api.post("/user/logout").then((response) => response.data);
}
