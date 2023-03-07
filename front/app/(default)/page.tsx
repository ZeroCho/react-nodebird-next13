import { loadPostsAPI } from "@/apis/tweet";
import PostForm from "@/components/common/PostForm";
import TweetCardList from "@/components/common/TweetCardList";
import React from "react";

async function getTweets() {
  const res = await fetch("http://localhost:3065/posts?lastId=0");
  return res.json();
}

const Page = async () => {
  const tweets = await getTweets();
  console.log(tweets);
  return (
    <>
      <TweetCardList initialTweets={tweets}></TweetCardList>
      <PostForm></PostForm>
    </>
  );
};

export default Page;
