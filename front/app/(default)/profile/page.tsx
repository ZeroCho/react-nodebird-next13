"use client";

import { Box, colors, Grid, Typography } from "@mui/material";
import React from "react";
import EditUserInfo from "@/components/profile/EditUserInfo";
import FollowList from "@/components/profile/FollowList";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import User from "@/typings/user";
import { loadMyInfoAPI } from "@/apis/auth";
import { loadFollowersAPI, loadFollowingsAPI } from "@/apis/user";
import { AxiosError } from "axios";

const ProfilePage = () => {
  const {
    data: followings,
    isLoading: followingsLoading,
    error: followingsError,
    fetchNextPage: fetchNextFollowings,
    hasNextPage: hasNextFollowings,
  } = useInfiniteQuery<User[], AxiosError>(
    ["followings"],
    ({ pageParam = 5 }) => loadFollowingsAPI(pageParam),
    {
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.length < 3) return;
        return pages.length;
      },
    }
  );

  const {
    data: followers,
    isLoading: followersLoading,
    error: followersError,
    fetchNextPage: fetchNextFollowers,
    hasNextPage: hasNextFollowers,
  } = useInfiniteQuery<User[], AxiosError>(
    ["followers"],
    ({ pageParam = 5 }) => loadFollowersAPI(pageParam),
    {
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.length < 3) return;
        return pages.length;
      },
    }
  );
  return (
    <>
      <Box
        component="div"
        sx={{
          mt: "1rem",
          backgroundColor: colors.grey[50],
          padding: "1rem",
        }}
      >
        <EditUserInfo />
      </Box>
      <Grid container spacing={2}>
        <Grid item md={6}>
          <Box
            component="div"
            sx={{
              mt: "1rem",
              backgroundColor: colors.grey[50],
              padding: "1rem",
            }}
          >
            <Typography variant="h6" sx={{ textAlign: "center", mb: "1rem" }}>
              팔로잉
            </Typography>
            {followings && (
              <FollowList
                data={followings}
                fetchNextPage={fetchNextFollowings}
                hasNextPage={hasNextFollowings}
              />
            )}
          </Box>
        </Grid>
        <Grid item md={6}>
          <Box
            component="div"
            sx={{
              mt: "1rem",
              backgroundColor: colors.grey[50],
              padding: "1rem",
            }}
          >
            <Typography variant="h6" sx={{ textAlign: "center", mb: "1rem" }}>
              팔로우
            </Typography>
            {followers && (
              <FollowList
                data={followers}
                fetchNextPage={fetchNextFollowers}
                hasNextPage={hasNextFollowers}
              />
            )}
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default ProfilePage;
