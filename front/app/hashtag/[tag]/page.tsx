import { loadHashtagPostsAPI } from "@/apis/tweet";
import { TweetCard } from "@/components/Tweets/TweetCard";
import Tweet from "@/typings/tweet";
import React from "react";
import ClientPage from "./page.client";

const HashTagPage = async ({ params }: { params: { tag: string } }) => {
  const data = await loadHashtagPostsAPI<Tweet[]>(params.tag, undefined);
  const initialData = {
    pages: [data],
    pageParams: [undefined],
  };
  return <ClientPage params={params} initialData={initialData} />;
};

export default HashTagPage;
