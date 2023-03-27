"use client";

import { loadHashtagPostsAPI } from "@/apis/tweet";
import TweetCardList from "@/components/Tweets/TweetCardList";
import Tweet from "@/typings/tweet";
import { InfiniteData, useInfiniteQuery } from "@tanstack/react-query";
import React, { FC } from "react";

interface Props {
  params: { tag: string };
  initialData: InfiniteData<Tweet[]> | undefined;
}

const ClientPage: FC<Props> = ({ params, initialData }) => {
  const tag = params.tag;
  const {
    data,
    isFetching: loadPostsLoading,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    ["tweets", "hashtag", tag],
    ({ pageParam = "" }) => loadHashtagPostsAPI(tag, pageParam),
    {
      getNextPageParam: (lastPage) => {
        return lastPage?.[lastPage.length - 1]?.id;
      },
      initialData: initialData,
      enabled: false,
    }
  );
  if (!data) return <></>;
  return (
    <TweetCardList
      data={data}
      fetchNextPage={fetchNextPage}
      hasNextPage={hasNextPage}
      isLoading={loadPostsLoading}
    />
  );
};

export default ClientPage;
