import { api } from "./axios";

export function addPostAPI(data: FormData) {
  return api.post("/post", data).then((response) => response.data);
}
