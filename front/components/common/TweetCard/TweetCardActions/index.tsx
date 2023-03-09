import { CardActions, IconButton } from "@mui/material";
import RepeatIcon from "@mui/icons-material/Repeat";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteIcon from "@mui/icons-material/Favorite";
import React, { Dispatch, FC, SetStateAction, useCallback } from "react";
import {
  InfiniteData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { loadMyInfoAPI } from "@/apis/auth";
import User from "@/typings/user";
import { likePostAPI, retweetAPI, unlikePostAPI } from "@/apis/tweet";
import Tweet from "@/typings/tweet";

interface Props {
  setIsCommentOpen: Dispatch<SetStateAction<boolean>>;
  postId: number;
  likers: Partial<User>[];
}

const TweetCardActions: FC<Props> = ({ setIsCommentOpen, postId, likers }) => {
  const { data: me } = useQuery<User>(["user"], loadMyInfoAPI);
  const isLiked = likers.find((v) => me?.id && v.id === me.id);
  const queryClient = useQueryClient();

  const { mutate: reTweetMutation } = useMutation(retweetAPI);

  const toggleComment = () => {
    setIsCommentOpen((pre) => !pre);
  };

  const handleReTweet = useCallback(() => {
    reTweetMutation(postId);
  }, []);
  const { mutate: likeMutate } = useMutation(["post", postId], likePostAPI, {
    onSuccess: () => {
      if (me) {
        queryClient.setQueryData<InfiniteData<Tweet[]>>(["tweets"], (res) => {
          const found = res?.pages.flat().find((v) => v.id === postId);
          if (found) {
            found.Likers.push({ id: me.id });
          }
          return {
            pageParams: res?.pageParams || [],
            pages: res?.pages || [],
          };
        });
      }
    },
    onSettled() {
      queryClient.refetchQueries(["tweets"]);
    },
  });

  const { mutate: unlikeMutate } = useMutation(
    ["post", postId],
    unlikePostAPI,
    {
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
    }
  );

  return (
    <CardActions disableSpacing>
      <IconButton onClick={handleReTweet}>
        <RepeatIcon />
      </IconButton>
      <IconButton
        onClick={
          isLiked ? () => unlikeMutate(postId) : () => likeMutate(postId)
        }
      >
        <FavoriteIcon color={isLiked ? "error" : "inherit"} />
      </IconButton>
      <IconButton onClick={toggleComment}>
        <ChatIcon />
      </IconButton>
    </CardActions>
  );
};

export default TweetCardActions;
