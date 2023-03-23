"use client";
import React, { FC, useState } from "react";

import Tweet from "@/typings/tweet";
import TweetCommentList from "../TweetCommentList";
import TweetCardContent from "./TweetCardContent";
import TweetCardHeader from "./TweetCardHeader";
import TweetCardActions from "./TweetCardActions";
import TweetCardLayout from "./TweetCardLayout";
import ReTweetCardLayout from "./ReTweetCardLayout";
import { Avatar, CardHeader } from "@mui/material";
import { useRouter } from "next/navigation";
import UserAvatar from "./UserAvatar";
import HeaderAction from "./HeaderAction";
import ReTweetCardHeader from "./ReTweetCardHeader";

interface TweetProps {
  data: Tweet;
}

export const TweetCard: FC<TweetProps> = ({ data }) => {
  const [isCommentOpen, setIsCommentOpen] = useState(false);

  return (
    <TweetCardLayout>
      <TweetCardHeader
        user={data.User}
        postId={data.id}
        createdAt={data.createdAt}
      />
      <TweetCardContent content={data.content} images={data.Images} />
      <TweetCardActions
        setIsCommentOpen={setIsCommentOpen}
        likers={data.Likers}
        postId={data.id}
      />
      <TweetCommentList open={isCommentOpen} data={data} />
    </TweetCardLayout>
  );
};

interface ReTweetProps extends TweetProps {
  retweet: Tweet;
}

export const ReTweetCard: FC<ReTweetProps> = ({ data, retweet }) => {
  const [isCommentOpen, setIsCommentOpen] = useState(false);
  return (
    <TweetCardLayout>
      <ReTweetCardHeader data={data} />
      <ReTweetCardLayout>
        <TweetCardHeader
          user={retweet.User}
          postId={data.id}
          createdAt={retweet.createdAt}
          disableAction
        />
        <TweetCardContent content={retweet.content} images={retweet.Images} />
      </ReTweetCardLayout>
      <TweetCardActions
        setIsCommentOpen={setIsCommentOpen}
        likers={data.Likers}
        postId={data.id}
      />
      <TweetCommentList open={isCommentOpen} data={data} />
    </TweetCardLayout>
  );
};
