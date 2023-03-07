"use client";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grow,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Paper,
  Popper,
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
import { useMutation, useQueryClient } from "@tanstack/react-query";
import TweetCommentList from "../TweetCommentList";

interface Prop {
  data: Tweet;
}

const TweetCard: FC<Prop> = ({ data }) => {
  const queryClient = useQueryClient();
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [isCommentOpen, setIsCommentOpen] = useState(false);
  const { mutate } = useMutation(() => removePostAPI(data.id), {
    onSuccess: () => {
      queryClient.refetchQueries(["tweets"]);
    },
  });

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
        title={data.User.nickname}
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
