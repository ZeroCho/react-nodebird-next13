import { loadMyInfoAPI } from "@/apis/auth";
import SignUpForm from "@/components/Auth/SignUpForm";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

const SignUpPage = async () => {
  const header = headers();
  const cookie = header.get("Cookie");
  const data = await loadMyInfoAPI({
    headers: cookie ? { cookie } : undefined,
  });
  if (data) {
    redirect("/");
  }
  return <SignUpForm />;
};

export default SignUpPage;
