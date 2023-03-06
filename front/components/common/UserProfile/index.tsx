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
import { useDispatch } from "react-redux";
import { setUserInfo } from "@/reducers/slice";

const UserProfile = () => {
  const dispatch = useDispatch();
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
            <Avatar>R</Avatar>
            <Typography
              variant="h6"
              component="h6"
              sx={{ padding: "0.3rem", marginLeft: "0.5rem" }}
            >
              Ray
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
