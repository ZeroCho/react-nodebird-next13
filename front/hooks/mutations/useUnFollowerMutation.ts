import { followAPI, removeFollowerAPI } from "@/apis/user";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useSnackBar from "../useSnackBar";

const useUnFollowerMutation = () => {
  const queryClient = useQueryClient();
  const openSnackBar = useSnackBar("팔로우 삭제에 성공하였습니다");

  const mutation = useMutation(removeFollowerAPI, {
    onSuccess: () => {
      queryClient.refetchQueries(["user"]);
      queryClient.refetchQueries(["followers"]);
      openSnackBar();
    },
    onError: () => {
      alert("팔로우 삭제에 실패하였습니다");
    },
  });

  return mutation;
};

export default useUnFollowerMutation;
