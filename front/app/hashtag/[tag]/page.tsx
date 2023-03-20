import { TweetCard } from "@/components/Tweets/TweetCard";
import React from "react";
import ClientPage from "./page.client";

const HashTagPage = ({ params }: { params: { tag: string } }) => {
  return <ClientPage params={params} />;
};

export default HashTagPage;
