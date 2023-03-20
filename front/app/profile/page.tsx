import { loadMyInfoAPI } from "@/apis/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";
import ProfilePage from "./page.client";

const Page = async () => {
  const header = headers();
  const cookie = header.get("Cookie");
  const data = await loadMyInfoAPI({
    headers: cookie ? { cookie } : undefined,
  });
  if (!data) {
    redirect("/");
  }
  return <ProfilePage />;
};

export default Page;
