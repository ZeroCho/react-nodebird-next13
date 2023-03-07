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
      <Box
        component="div"
        sx={{ mt: "1rem", backgroundColor: colors.grey[50], padding: "1rem" }}
      >
        <Typography variant="h6" sx={{ textAlign: "center", mb: "1rem" }}>
          팔로잉
        </Typography>
        <List>
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemAvatar>
              <Avatar>
                <FolderIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Single-line item" />
          </ListItem>
        </List>
      </Box>
      <Box
        component="div"
        sx={{ mt: "1rem", backgroundColor: colors.grey[50], padding: "1rem" }}
      >
        <Typography variant="h6" sx={{ textAlign: "center", mb: "1rem" }}>
          팔로우
        </Typography>
        <List>
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemAvatar>
              <Avatar>
                <FolderIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Single-line item" />
          </ListItem>
        </List>
      </Box>
    </>
  );
};

export default ProfilePage;
