"use client";

import { InfiniteData, useInfiniteQuery } from "@tanstack/react-query";
import Tweet from "@/typings/tweet";
import React, { FC } from "react";
import { loadPostsAPI } from "@/apis/tweet";
import { ReTweetCard, TweetCard } from "@/components/common/TweetCard";

interface Prop {
  data: InfiniteData<Tweet[]>;
}

const TweetCardList: FC<Prop> = ({ data }) => {
  return data ? (
    <>
      {data.pages.map((page) =>
        page.map((tweet) =>
          tweet.Retweet && tweet.RetweetId ? (
            <>
              <ReTweetCard
                retweet={tweet.Retweet}
                data={tweet}
                key={tweet.id}
              />
            </>
          ) : (
            <TweetCard data={tweet} key={tweet.id} />
          )
        )
      )}
    </>
  ) : (
    <></>
  );
};

export default TweetCardList;
