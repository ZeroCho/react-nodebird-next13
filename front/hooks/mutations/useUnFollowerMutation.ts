import { followAPI, removeFollowerAPI } from "@/apis/user";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useUnFollowerMutation = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation(removeFollowerAPI, {
    onSuccess: () => {
      queryClient.refetchQueries(["user"]);
      queryClient.refetchQueries(["followers"]);
    },
    onError: () => {
      alert("팔로우 삭제에 실패하였습니다");
    },
  });

  return mutation;
};

export default useUnFollowerMutation;
