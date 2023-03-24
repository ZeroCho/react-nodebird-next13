import { followAPI } from "@/apis/user";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useSnackBar from "../useSnackBar";

const useFollowMutation = () => {
  const queryClient = useQueryClient();
  const openSnackBar = useSnackBar("팔로우에 성공하였습니다");
  const mutation = useMutation(followAPI, {
    onSuccess: () => {
      queryClient.refetchQueries(["user"]);
      queryClient.refetchQueries(["followings"]);
      openSnackBar();
    },
    onError: () => {
      alert("팔로우에 실패하였습니다");
    },
  });

  return mutation;
};

export default useFollowMutation;
