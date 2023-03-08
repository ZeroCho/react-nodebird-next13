"use client";

import {
  Avatar,
  BottomNavigation,
  BottomNavigationAction,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import React, { useCallback } from "react";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Box } from "@mui/system";
import { useMutation } from "@tanstack/react-query";
import { logOutAPI } from "@/apis/auth";
import { useDispatch, useSelector } from "react-redux";
import { setUserInfo } from "@/reducers/slice";
import { RootState } from "@/store/store";

const UserProfile = () => {
  const dispatch = useDispatch();
  const me = useSelector((state: RootState) => state.global.userInfo);
  const { mutate } = useMutation(logOutAPI, {
    onError: (error: any) => {
      alert(error.response?.data);
    },
  });

  const handleLogOut = useCallback(() => {
    mutate();
    dispatch(setUserInfo(undefined));
  }, [dispatch, mutate]);

  return (
    <Card>
      <CardActionArea>
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
      <BottomNavigation>
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
        <BottomNavigationAction
          label="logout"
          icon={<Button onClick={handleLogOut}>logOut</Button>}
        />
      </BottomNavigation>
    </Card>
  );
};

export default UserProfile;
