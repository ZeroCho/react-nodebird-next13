import { loadPostAPI } from "@/apis/tweet";
import { notFound } from "next/navigation";
import React from "react";
import ClientPage from "./page.client";

const PostPage = async ({ params }: { params: { id: string } }) => {
  try {
    const data = await loadPostAPI(Number(params.id));
    return <ClientPage params={params} initialTweet={data} />;
  } catch (e) {
    console.log(e);
    notFound();
  }
};

export default PostPage;
