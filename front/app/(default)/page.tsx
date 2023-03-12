import { loadPostsAPI } from "@/apis/tweet";
import TweetCardForm from "@/components/Tweets/TweetCardForm";
import TweetCardList from "@/components/Tweets/TweetCardList";
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
      <TweetCardForm></TweetCardForm>
    </>
  );
};

export default Page;
