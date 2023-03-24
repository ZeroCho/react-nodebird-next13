import useFollowMutation from "@/hooks/mutations/useFollowMutation";
import useUnFollowMutation from "@/hooks/mutations/useUnFollowMutation";
import useMyInfoQuery from "@/hooks/queries/useMyInfoQuery";
import User from "@/typings/user";
import { Button, CircularProgress } from "@mui/material";
import React, { FC } from "react";

interface Props {
  user: Partial<User> & { id: number };
}

const FollowButton: FC<Props> = ({ user }) => {
  const { data: me } = useMyInfoQuery();
  const { mutate: followMutate, isLoading: followLoading } =
    useFollowMutation();
  const { mutate: unFollowMutate, isLoading: unfollowLoading } =
    useUnFollowMutation();

  const isFollowing = me?.Followings?.find((v) => v.id === user.id);
  return isFollowing ? (
    <Button onClick={() => unFollowMutate(user.id)}>
      언팔로우
      {unfollowLoading && <CircularProgress size={12} />}
    </Button>
  ) : (
    <Button onClick={() => followMutate(user.id)}>
      팔로우{followLoading && <CircularProgress size={12} />}
    </Button>
  );
};

export default FollowButton;
