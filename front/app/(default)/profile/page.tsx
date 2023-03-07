"use client";

import {
  Avatar,
  Box,
  Button,
  colors,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import EditUserInfo from "@/components/profile/EditUserInfo";
import FollowList from "@/components/profile/FollowList";

const ProfilePage = () => {
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
            <FollowList />
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
            <FollowList />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default ProfilePage;
