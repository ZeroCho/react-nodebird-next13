import useFollowMutation from "@/hooks/mutations/useFollowMutation";
import useUnFollowMutation from "@/hooks/mutations/useUnFollowMutation";
import useMyInfoQuery from "@/hooks/queries/useMyInfoQuery";
import User from "@/typings/user";
import { Button } from "@mui/material";
import React, { FC } from "react";

interface Props {
  user: Partial<User> & { id: number };
}

const FollowButton: FC<Props> = ({ user }) => {
  const { data: me } = useMyInfoQuery();
  const { mutate: followMutate } = useFollowMutation();
  const { mutate: unFollowMutate } = useUnFollowMutation();

  const isFollowing = me?.Followings?.find((v) => v.id === user.id);
  return isFollowing ? (
    <Button onClick={() => unFollowMutate(user.id)}>언팔로우</Button>
  ) : (
    <Button onClick={() => followMutate(user.id)}>팔로우</Button>
  );
};

export default FollowButton;
