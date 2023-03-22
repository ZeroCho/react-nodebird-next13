"use client";

import { Box, colors, Grid, Typography } from "@mui/material";
import React from "react";
import EditUserProfile from "@/components/Users/EditUserProfile";
import FollowList from "@/components/Users/FollowList";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import User from "@/typings/user";
import { loadMyInfoAPI } from "@/apis/auth";
import { loadFollowersAPI, loadFollowingsAPI } from "@/apis/user";
import { AxiosError } from "axios";
import useUnFollowMutation from "@/hooks/mutations/useUnFollowMutation";
import useUnFollowerMutation from "@/hooks/mutations/useUnFollowerMutation";

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

  const { mutate: unFollowMutate } = useUnFollowMutation();
  const { mutate: unFollowerMutate } = useUnFollowerMutation();

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
        <EditUserProfile />
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
                unFollowMutate={unFollowMutate}
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
                unFollowMutate={unFollowerMutate}
              />
            )}
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default ProfilePage;
