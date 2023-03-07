import { api } from "./axios";

export function changeNicknameAPI(data: string) {
  return api
    .patch("/user/nickname", { nickname: data })
    .then((response) => response.data);
}
