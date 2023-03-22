import { unfollowAPI } from "@/apis/user";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useUnFollowMutation = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation(unfollowAPI, {
    onSuccess: () => {
      queryClient.refetchQueries(["user"]);
      queryClient.refetchQueries(["followers"]);
      queryClient.refetchQueries(["followings"]);
    },
    onError: () => {
      alert("언팔로우에 실패하였습니다");
    },
  });

  return mutation;
};

export default useUnFollowMutation;
