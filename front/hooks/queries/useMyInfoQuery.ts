import { loadMyInfoAPI } from "@/apis/auth";
import User from "@/typings/user";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const useMyInfoQuery = () => {
  return useQuery<User>(["user"], loadMyInfoAPI, {
    staleTime: Infinity,
    cacheTime: Infinity,
  });
};

export default useMyInfoQuery;
