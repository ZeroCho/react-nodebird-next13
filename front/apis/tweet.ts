import { api } from "./axios";

export function addPostAPI(data: FormData) {
  return api.post("/post", data).then((response) => response.data);
}

export function loadPostsAPI(lastId?: number) {
  return api
    .get(`/posts?lastId=${lastId || 0}`)
    .then((response) => response.data);
}
