import Comment from "@/typings/comment";
import Tweet from "@/typings/tweet";
import { Card, CardContent, Typography } from "@mui/material";
import React, { FC } from "react";
import TweetComment from "../TweetComment";
import TweetCommentForm from "../TweetCommentForm";

interface Props {
  open: boolean;
  data: Tweet;
}

const TweetCommentList: FC<Props> = ({ open, data }) => {
  return (
    <Card sx={{ display: open ? "block" : "none" }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          댓글
        </Typography>
        <TweetCommentForm postId={data.id} />
        <>
          {data.Comments?.map((comment) => (
            <TweetComment comment={comment} key={comment.id} />
          ))}
        </>
      </CardContent>
    </Card>
  );
};

export default TweetCommentList;
