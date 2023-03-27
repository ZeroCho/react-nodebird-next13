import { api } from "./axios";

export function addPostAPI(data: FormData) {
  return api.post("/post", data).then((response) => response.data);
}

export function loadPostsAPI(lastId?: number) {
  return api
    .get(`/posts?lastId=${lastId || 0}`)
    .then((response) => response.data);
}

export function loadPostAPI(data: number) {
  return api.get(`/post/${data}`).then((response) => response.data);
}

export function loadHashtagPostsAPI<T>(data: string, lastId?: number) {
  return api
    .get<T>(`/hashtag/${encodeURIComponent(data)}?lastId=${lastId || 0}`)
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

export function retweetAPI(data: number) {
  return api.post(`/post/${data}/retweet`).then((response) => response.data);
}

export function likePostAPI(data: number) {
  return api.patch(`/post/${data}/like`).then((response) => response.data);
}

export function unlikePostAPI(data: number) {
  return api.delete(`/post/${data}/like`).then((response) => response.data);
}

export function uploadImagesAPI<T>(data: FormData) {
  return api.post<T>("/post/images", data).then((response) => response.data);
}
