"use client";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  List,
  ListItemButton,
  Paper,
  Typography,
} from "@mui/material";
import React, { FC, useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import RepeatIcon from "@mui/icons-material/Repeat";
import ChatIcon from "@mui/icons-material/Chat";
import DeleteIcon from "@mui/icons-material/Delete";
import Tweet from "@/typings/tweet";
import dayjs from "dayjs";
import useInput from "@/hooks/useInput";
import { removePostAPI } from "@/apis/tweet";
import {
  InfiniteData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import TweetCommentList from "../TweetCommentList";
import { followAPI, unfollowAPI } from "@/apis/user";
import User from "@/typings/user";
import { loadMyInfoAPI } from "@/apis/auth";
import useFollowMutation from "@/hooks/mutations/useFollowMutation";
import useUnFollowMutation from "@/hooks/mutations/useUnFollowMutation";

interface Prop {
  data: Tweet;
}

const TweetCard: FC<Prop> = ({ data }) => {
  const queryClient = useQueryClient();
  const { data: me } = useQuery<User>(["user"], loadMyInfoAPI);
  const isFollowing = me?.Followings?.find((v) => v.id === data.User.id);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [isCommentOpen, setIsCommentOpen] = useState(false);
  const { mutate } = useMutation(() => removePostAPI(data.id), {
    onSuccess: () => {},
  });

  const { mutate: FollowMutate } = useFollowMutation();

  const { mutate: unFollowMutate } = useUnFollowMutation();

  const toggleDropDown = () => {
    setIsDropDownOpen((pre) => !pre);
  };

  const toggleComment = () => {
    setIsCommentOpen((pre) => !pre);
  };

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            {data.User.nickname ? data.User.nickname[0] : ""}
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
                <ListItemButton onClick={() => mutate()}>
                  <DeleteIcon />
                </ListItemButton>
              </List>
            </Paper>
          </>
        }
        title={
          <>
            {data.User.nickname}
            {me?.id !== data.User.id &&
              (isFollowing ? (
                <Button onClick={() => unFollowMutate(data.User.id)}>
                  언팔로우
                </Button>
              ) : (
                <Button onClick={() => FollowMutate(data.User.id)}>
                  팔로우
                </Button>
              ))}
          </>
        }
        subheader={dayjs(data.createdAt).format("YYYY.MM.DD")}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {data.content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton>
          <RepeatIcon />
        </IconButton>
        <IconButton>
          <FavoriteIcon />
        </IconButton>
        <IconButton onClick={toggleComment}>
          <ChatIcon />
        </IconButton>
      </CardActions>
      <TweetCommentList open={isCommentOpen} data={data} />
    </Card>
  );
};

export default TweetCard;
