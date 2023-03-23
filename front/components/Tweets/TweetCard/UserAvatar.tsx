import React, { FC } from "react";
import { Avatar } from "@mui/material";
import { useRouter } from "next/navigation";
import User from "@/typings/user";

interface Props {
  user: Partial<User> & { id: number };
}

const UserAvatar: FC<Props> = ({ user }) => {
  const router = useRouter();
  return (
    <Avatar
      sx={{ bgcolor: "red", cursor: "pointer" }}
      aria-label="recipe"
      onClick={() => router.push(`user/${user.id}`)}
    >
      {user.nickname && user.nickname[0]}
    </Avatar>
  );
};

export default UserAvatar;
