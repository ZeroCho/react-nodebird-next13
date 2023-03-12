"use client";

import { loadUserPostsAPI } from "@/apis/user";
import TweetCardList from "@/components/Tweets/TweetCardList";
import Tweet from "@/typings/tweet";
import { useInfiniteQuery } from "@tanstack/react-query";
import { usePathname, useRouter } from "next/navigation";
import React, { FC } from "react";

interface ClientPageProps {
  params: { id: string };
}

const ClientPage: FC<ClientPageProps> = ({ params }) => {
  const id = params.id;
  const {
    data,
    isLoading: loadPostsLoading,
    fetchNextPage,
  } = useInfiniteQuery<Tweet[]>(
    ["user", id, "posts"],
    ({ pageParam = "" }) => loadUserPostsAPI(Number(id), pageParam),
    {
      getNextPageParam: (lastPage) => {
        return lastPage?.[lastPage.length - 1]?.id;
      },
    }
  );
  if (!data) return <></>;
  return <TweetCardList data={data} />;
};

export default ClientPage;
