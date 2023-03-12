import { TweetCard } from "@/components/Tweets/TweetCard";
import React from "react";
import ClientPage from "./ClientPage";

const HashTagPage = ({ params }: { params: { tag: string } }) => {
  return <ClientPage params={params} />;
};

export default HashTagPage;
