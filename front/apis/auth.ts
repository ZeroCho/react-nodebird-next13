import { api } from "./axios";

export function loadMyInfoAPI() {
  return api.get("/user").then((response) => response.data);
}
