import { loadMyInfoAPI } from "@/apis/auth";
import { unlikePostAPI } from "@/apis/tweet";
import Tweet from "@/typings/tweet";
import User from "@/typings/user";
import {
  InfiniteData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import useMyInfoQuery from "../queries/useMyInfoQuery";

const useUnLikeTweetMutation = (postId: number) => {
  const queryClient = useQueryClient();
  const { data: me } = useMyInfoQuery();

  return useMutation(["post", postId], unlikePostAPI, {
    onMutate() {
      if (!me) return;
      queryClient.setQueryData<InfiniteData<Tweet[]>>(["tweets"], (res) => {
        const found = res?.pages.flat().find((v) => v.id === postId);
        if (found) {
          const index = found.Likers.findIndex((v) => v.id === me.id);
          found.Likers.splice(index, 1);
        }
        return {
          pageParams: res?.pageParams || [],
          pages: res?.pages || [],
        };
      });
    },
    onSettled() {
      queryClient.refetchQueries(["tweets"]);
    },
  });
};

export default useUnLikeTweetMutation;
