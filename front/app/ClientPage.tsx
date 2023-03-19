"use client";

import { loadPostsAPI } from "@/apis/tweet";
import TweetCardForm from "@/components/Tweets/TweetCardForm";
import TweetCardList from "@/components/Tweets/TweetCardList";
import Tweet from "@/typings/tweet";
import { useInfiniteQuery } from "@tanstack/react-query";
import React from "react";

const ClientPage = () => {
  const {
    data,
    isLoading: loadPostsLoading,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery<Tweet[]>(
    ["tweets"],
    ({ pageParam = "" }) => loadPostsAPI(pageParam),
    {
      getNextPageParam: (lastPage) => {
        return lastPage?.[lastPage.length - 1]?.id;
      },
    }
  );
  if (!data) return <></>;
  return (
    <>
      <TweetCardForm />
      <TweetCardList
        data={data}
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
      />
    </>
  );
};

export default ClientPage;
