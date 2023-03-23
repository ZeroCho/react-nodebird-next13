"use client";

import { loadUserAPI, loadUserPostsAPI } from "@/apis/user";
import TweetCardList from "@/components/Tweets/TweetCardList";
import UserProfile from "@/components/Users/UserProfile";
import Tweet from "@/typings/tweet";
import {
  useInfiniteQuery,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { usePathname, useRouter } from "next/navigation";
import React, { FC } from "react";

interface ClientPageProps {
  params: { id: string };
  initialUserInfo: any;
}

const ClientPage: FC<ClientPageProps> = ({ params, initialUserInfo }) => {
  const id = params.id;
  const {
    data,
    isFetching: loadPostsLoading,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery<Tweet[]>(
    ["tweets", "user", id],
    ({ pageParam = "" }) => loadUserPostsAPI(Number(id), pageParam),
    {
      getNextPageParam: (lastPage) => {
        return lastPage?.[lastPage.length - 1]?.id;
      },
    }
  );
  const { data: userInfo } = useQuery(
    ["user", id],
    () => loadUserAPI(Number(id)),
    {
      initialData: initialUserInfo,
      enabled: false,
    }
  );
  if (!data || !userInfo) return <></>;
  return (
    <>
      <UserProfile userInfo={userInfo} />
      <TweetCardList
        data={data}
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
        isLoading={loadPostsLoading}
      />
    </>
  );
};

export default ClientPage;
