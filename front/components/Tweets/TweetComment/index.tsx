import Comment from "@/typings/comment";
import {
  Avatar,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import React, { FC, useState } from "react";

interface Props {
  comment: Comment;
}

const TweetComment: FC<Props> = ({ comment }) => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const toggleDropDown = () => {
    setIsDropDownOpen((pre) => !pre);
  };
  return (
    <CardHeader
      avatar={
        <Avatar>{comment.User.nickname && comment.User.nickname[0]}</Avatar>
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
              <ListItemButton>
                <DeleteIcon />
              </ListItemButton>
            </List>
          </Paper>
        </>
      }
      title={comment.User.nickname}
      subheader={comment.content}
    />
  );
};

export default TweetComment;
