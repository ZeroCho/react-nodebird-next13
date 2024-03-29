"use client";

import { loadPostAPI } from "@/apis/tweet";
import { ReTweetCard, TweetCard } from "@/components/Tweets/TweetCard";
import Tweet from "@/typings/tweet";
import { useQuery } from "@tanstack/react-query";
import React, { FC } from "react";
interface ClientPageProps {
  params: { id: string };
  initialTweet: Tweet;
}

const ClientPage: FC<ClientPageProps> = ({ params, initialTweet }) => {
  const id = params.id;
  const { data: tweet } = useQuery<Tweet>(
    ["tweet", id],
    () => loadPostAPI(Number(id)),
    {
      initialData: initialTweet,
      enabled: false,
    }
  );

  if (!tweet) return <></>;

  return tweet.Retweet && tweet.RetweetId ? (
    <>
      <ReTweetCard retweet={tweet.Retweet} data={tweet} key={tweet.id} />
    </>
  ) : (
    <TweetCard data={tweet} key={tweet.id} />
  );
};

export default ClientPage;
