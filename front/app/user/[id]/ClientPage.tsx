"use client";

import { loadUserAPI, loadUserPostsAPI } from "@/apis/user";
import TweetCardList from "@/components/Tweets/TweetCardList";
import UserProfile from "@/components/Users/UserProfile";
import Tweet from "@/typings/tweet";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
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
  const { data: userInfo } = useQuery(["user", id], () =>
    loadUserAPI(Number(id))
  );
  if (!data || !userInfo) return <></>;
  return (
    <>
      <UserProfile userInfo={userInfo} />
      <TweetCardList data={data} />
    </>
  );
};

export default ClientPage;
