import { loadUserAPI, loadUserPostsAPI } from "@/apis/user";
import { notFound } from "next/navigation";
import React from "react";
import ClientPage from "./page.client";

const UserTweetPage = async ({ params }: { params: { id: string } }) => {
  try {
    const data = await loadUserAPI(Number(params.id));
    const postData = await loadUserPostsAPI(Number(params.id), undefined);
    const initialPostData = {
      pages: [postData],
      pageParams: [undefined],
    };
    return (
      <ClientPage
        params={params}
        initialUserInfo={data}
        initialPostData={initialPostData}
      />
    );
  } catch (e) {
    console.log(e);
    notFound();
  }
};

export default UserTweetPage;
