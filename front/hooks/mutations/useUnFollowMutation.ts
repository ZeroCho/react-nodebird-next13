import { unfollowAPI } from "@/apis/user";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useSnackBar from "../useSnackBar";

const useUnFollowMutation = () => {
  const queryClient = useQueryClient();
  const openSnackBar = useSnackBar("언팔로우에 성공하였습니다");

  const mutation = useMutation(unfollowAPI, {
    onSuccess: () => {
      queryClient.refetchQueries(["user"]);
      queryClient.refetchQueries(["followings"]);
      openSnackBar();
    },
    onError: () => {
      alert("언팔로우에 실패하였습니다");
    },
  });

  return mutation;
};

export default useUnFollowMutation;
