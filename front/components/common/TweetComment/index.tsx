import Comment from "@/typings/comment";
import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React, { FC } from "react";

interface Props {
  comment: Comment;
}

const TweetComment: FC<Props> = ({ comment }) => {
  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>{comment.User.nickname && comment.User.nickname[0]}</Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={comment.User.nickname}
          secondary={comment.content}
        />
      </ListItem>
    </List>
  );
};

export default TweetComment;
