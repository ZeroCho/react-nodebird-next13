"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import Tweet from "@/typings/tweet";
import React, { FC } from "react";
import { loadPostsAPI } from "@/apis/tweet";
import TweetCard from "@/components/common/TweetCard";

interface Prop {
  initialTweets: Tweet[];
}

const TweetCardList: FC<Prop> = ({ initialTweets }) => {
  const {
    data,
    isLoading: loadPostsLoading,
    fetchNextPage,
  } = useInfiniteQuery<Tweet[]>(
    ["tweets"],
    ({ pageParam = "" }) => loadPostsAPI(pageParam),
    {
      getNextPageParam: (lastPage) => {
        return lastPage?.[lastPage.length - 1]?.id;
      },
      initialData: () => {
        return {
          pageParams: [undefined],
          pages: [initialTweets],
        };
      },
    }
  );
  console.log(data);
  return data ? (
    <>
      {data.pages.map((page) =>
        page.map((tweet) => <TweetCard data={tweet} key={tweet.id} />)
      )}
    </>
  ) : (
    <></>
  );
};

export default TweetCardList;
