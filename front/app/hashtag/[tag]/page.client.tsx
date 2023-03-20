"use client";

import { loadHashtagPostsAPI } from "@/apis/tweet";
import TweetCardList from "@/components/Tweets/TweetCardList";
import Tweet from "@/typings/tweet";
import { useInfiniteQuery } from "@tanstack/react-query";
import React, { FC } from "react";

interface Props {
  params: { tag: string };
}

const ClientPage: FC<Props> = ({ params }) => {
  const tag = params.tag;
  const {
    data,
    isFetching: loadPostsLoading,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery<Tweet[]>(
    ["hashtag", tag],
    ({ pageParam = "" }) => loadHashtagPostsAPI(tag, pageParam),
    {
      getNextPageParam: (lastPage) => {
        return lastPage?.[lastPage.length - 1]?.id;
      },
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
