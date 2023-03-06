"use client";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import React, { FC } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import RepeatIcon from "@mui/icons-material/Repeat";
import ChatIcon from "@mui/icons-material/Chat";
import Tweet from "@/typings/tweet";

interface Prop {
  data: Tweet;
}

const TweetCard: FC<Prop> = ({ data }) => {
  console.log(data);
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            {data.User.nickname ? data.User.nickname[0] : ""}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={data.User.nickname}
        subheader={data.createdAt}
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
        <IconButton>
          <ChatIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default TweetCard;
