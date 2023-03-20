import { loadUserAPI } from "@/apis/user";
import { notFound } from "next/navigation";
import React from "react";
import ClientPage from "./page.client";

const UserTweetPage = async ({ params }: { params: { id: string } }) => {
  try {
    const data = await loadUserAPI(Number(params.id));
    return <ClientPage params={params} initialUserInfo={data} />;
  } catch (e) {
    console.log(e);
    notFound();
  }
};

export default UserTweetPage;
