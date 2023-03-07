import { api } from "./axios";

export function addPostAPI(data: FormData) {
  return api.post("/post", data).then((response) => response.data);
}

export function loadPostsAPI(lastId?: number) {
  return api
    .get(`/posts?lastId=${lastId || 0}`)
    .then((response) => response.data);
}

export function removePostAPI(data: number) {
  return api.delete(`/post/${data}`).then((response) => response.data);
}

export function addCommentAPI(data: {
  postId: number;
  content: string;
  userId: number;
}) {
  return api
    .post(`/post/${data.postId}/comment`, data)
    .then((response) => response.data); // POST /post/1/comment
}
