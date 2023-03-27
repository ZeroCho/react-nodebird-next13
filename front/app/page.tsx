import { loadPostsAPI } from "@/apis/tweet";
import React from "react";
import ClientPage from "./page.client";

const Page = async () => {
  const data = await loadPostsAPI(undefined);
  const initialData = {
    pages: [data],
    pageParams: [undefined],
  };
  return <ClientPage initialData={initialData} />;
};

export default Page;
