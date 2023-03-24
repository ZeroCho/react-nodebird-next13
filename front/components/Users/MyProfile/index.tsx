"use client";

import {
  Avatar,
  BottomNavigation,
  BottomNavigationAction,
  Button,
  Card,
  CardActionArea,
  CardContent,
  colors,
  Typography,
} from "@mui/material";
import React, { useCallback } from "react";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Box } from "@mui/system";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { loadMyInfoAPI, logOutAPI } from "@/apis/auth";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import User from "@/typings/user";
import useMyInfoQuery from "@/hooks/queries/useMyInfoQuery";

const MyProfile = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const router = useRouter();
  const { data: me } = useMyInfoQuery();
  const { mutate } = useMutation(logOutAPI, {
    onError: (error: any) => {
      alert(error.response?.data);
    },
    onSuccess: () => {
      queryClient.refetchQueries(["user"]);
    },
  });

  const handleLogOut = useCallback(() => {
    mutate();
  }, [mutate]);

  const handleProfile = useCallback(() => {
    router.push("/profile");
  }, []);

  const handleUserTweets = useCallback(() => {
    router.push(`/user/${me?.id}`);
  }, []);

  return (
    <Card sx={{ minWidth: "20rem" }}>
      <CardActionArea onClick={handleProfile}>
        <CardContent>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar>{me?.nickname[0]}</Avatar>
            <Typography
              variant="h6"
              component="h6"
              sx={{ padding: "0.3rem", marginLeft: "0.5rem" }}
            >
              {me?.nickname}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
      <BottomNavigation showLabels>
        <BottomNavigationAction
          label={me?.Followers.length}
          icon={"팔로우"}
          onClick={handleProfile}
        />
        <BottomNavigationAction
          label={me?.Followings.length}
          icon={"팔로워"}
          onClick={handleProfile}
        />
        <BottomNavigationAction
          label={me?.Posts.length}
          icon={"짹짹"}
          onClick={handleUserTweets}
        />
        <BottomNavigationAction
          label="로그아웃"
          onClick={handleLogOut}
          sx={{ color: colors.red[500] }}
        />
      </BottomNavigation>
    </Card>
  );
};

export default MyProfile;
