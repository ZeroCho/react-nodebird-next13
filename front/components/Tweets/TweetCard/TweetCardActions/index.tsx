import { CardActions, IconButton } from "@mui/material";
import RepeatIcon from "@mui/icons-material/Repeat";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteIcon from "@mui/icons-material/Favorite";
import React, { Dispatch, FC, SetStateAction, useCallback } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { loadMyInfoAPI } from "@/apis/auth";
import User from "@/typings/user";
import { likePostAPI, retweetAPI, unlikePostAPI } from "@/apis/tweet";
import Tweet from "@/typings/tweet";
import useUnLikeTweetMutation from "@/hooks/mutations/useUnLikeTweetMutation";
import useLikeTweetMutation from "@/hooks/mutations/useLikeTweetMutation";

interface Props {
  setIsCommentOpen: Dispatch<SetStateAction<boolean>>;
  postId: number;
  likers?: Partial<User>[];
}

const TweetCardActions: FC<Props> = ({
  setIsCommentOpen,
  postId,
  likers = [],
}) => {
  const { data: me } = useQuery<User>(["user"], loadMyInfoAPI);
  const isLiked = likers.find((v) => me?.id && v.id === me.id);
  const queryClient = useQueryClient();

  const { mutate: reTweetMutation } = useMutation(retweetAPI, {
    onSettled: (data) => {
      queryClient.refetchQueries(["tweets"]);
    },
  });

  const toggleComment = () => {
    setIsCommentOpen((pre) => !pre);
  };

  const handleReTweet = useCallback(() => {
    reTweetMutation(postId);
  }, []);

  const { mutate: likeMutate } = useLikeTweetMutation(postId);

  const { mutate: unlikeMutate } = useUnLikeTweetMutation(postId);

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
