import { Card, CardContent, Typography } from "@mui/material";
import React, { FC } from "react";
import TweetComment from "../TweetComment";

interface Props {
  open: boolean;
}

const TweetCommentList: FC<Props> = ({ open }) => {
  return (
    <Card sx={{ display: open ? "block" : "none" }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          댓글
        </Typography>
        <TweetComment />
      </CardContent>
    </Card>
  );
};

export default TweetCommentList;
