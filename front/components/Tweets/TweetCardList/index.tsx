"use client";

import { InfiniteData, useInfiniteQuery } from "@tanstack/react-query";
import Tweet from "@/typings/tweet";
import React, { FC, useEffect } from "react";
import { loadPostsAPI } from "@/apis/tweet";
import { ReTweetCard, TweetCard } from "@/components/Tweets/TweetCard";
import { useInView } from "react-intersection-observer";

interface Prop {
  data: InfiniteData<Tweet[]>;
  fetchNextPage: () => void;
  hasNextPage: boolean | undefined;
}

const TweetCardList: FC<Prop> = ({ data, fetchNextPage, hasNextPage }) => {
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

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
      <div ref={hasNextPage ? ref : undefined} style={{ height: 50 }}></div>
    </>
  ) : (
    <></>
  );
};

export default TweetCardList;
