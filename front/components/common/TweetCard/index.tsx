"use client";
import { Card } from "@mui/material";
import React, { FC, useState } from "react";

import Tweet from "@/typings/tweet";
import TweetCommentList from "../TweetCommentList";
import TweetCardContent from "../TweetCardContent";
import TweetCardHeader from "../TweetCardHeader";
import TweetCardActions from "../TweetCardActions";
import TweetCardLayout from "./TweetCardLayout";

interface Prop {
  data: Tweet;
}

const TweetCard: FC<Prop> = ({ data }) => {
  const [isCommentOpen, setIsCommentOpen] = useState(false);

  return (
    <TweetCardLayout>
      <TweetCardHeader
        user={data.User}
        postId={data.id}
        createdAt={data.createdAt}
      />
      <TweetCardContent content={data.content} />
      <TweetCardActions
        setIsCommentOpen={setIsCommentOpen}
        likers={data.Likers}
        postId={data.id}
      />
      <TweetCommentList open={isCommentOpen} data={data} />
    </TweetCardLayout>
  );
};

export default TweetCard;
