import {
  Avatar,
  Button,
  CardHeader,
  IconButton,
  List,
  ListItemButton,
  Paper,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";
import ReportIcon from "@mui/icons-material/Report";
import React, { FC, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import useFollowMutation from "@/hooks/mutations/useFollowMutation";
import useUnFollowMutation from "@/hooks/mutations/useUnFollowMutation";
import { removePostAPI } from "@/apis/tweet";
import User from "@/typings/user";
import { loadMyInfoAPI } from "@/apis/auth";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import ReportModal from "../../ReportModal";

interface Props {
  user: Partial<User> & { id: number };
  postId: number;
  createdAt: string;
}

const TweetCardHeader: FC<Props> = ({ user, postId, createdAt }) => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);

  const { data: me } = useQuery<User>(["user"], loadMyInfoAPI);
  const isFollowing = me?.Followings?.find((v) => v.id === user.id);

  const { mutate: removePostMutate } = useMutation(
    () => removePostAPI(postId),
    {
      onSuccess: () => {
        queryClient.refetchQueries(["tweets"]);
      },
    }
  );
  const { mutate: followMutate } = useFollowMutation();
  const { mutate: unFollowMutate } = useUnFollowMutation();

  const toggleDropDown = () => {
    setIsDropDownOpen((pre) => !pre);
  };

  const toggleReportModal = () => {
    setShowReportModal((pre) => !pre);
  };

  return (
    <>
      <ReportModal open={showReportModal} handleClose={toggleReportModal} />
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: "red", cursor: "pointer" }}
            aria-label="recipe"
            onClick={() => router.push(`user/${user.id}`)}
          >
            {user.nickname && user.nickname[0]}
          </Avatar>
        }
        action={
          <>
            <IconButton aria-label="settings" onClick={toggleDropDown}>
              <MoreVertIcon />
            </IconButton>
            <Paper
              sx={{
                display: isDropDownOpen ? "block" : "none",
                position: "absolute",
              }}
            >
              <List disablePadding>
                {me?.id === user.id ? (
                  <ListItemButton onClick={() => removePostMutate()}>
                    <DeleteIcon />
                  </ListItemButton>
                ) : (
                  <ListItemButton onClick={toggleReportModal}>
                    <ReportIcon />
                  </ListItemButton>
                )}
              </List>
            </Paper>
          </>
        }
        title={
          <>
            {user.nickname}
            {me?.id !== user.id &&
              (isFollowing ? (
                <Button onClick={() => unFollowMutate(user.id)}>
                  언팔로우
                </Button>
              ) : (
                <Button onClick={() => followMutate(user.id)}>팔로우</Button>
              ))}
          </>
        }
        subheader={dayjs(createdAt).format("YYYY.MM.DD")}
      />
    </>
  );
};

export default TweetCardHeader;
