"use client";

import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";

function NavigationBox() {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  const toggleDrawer = () => {
    setIsOpenDrawer((pre) => !pre);
  };

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <ListItem>
        <ListItemButton sx={{ padding: "1rem" }}>
          <Typography
            variant="h5"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1, fontWeight: "bold" }}
            component="div"
          >
            노드버드
          </Typography>
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton>
          <ListItemAvatar>
            <Avatar>
              <PersonIcon />
            </Avatar>
          </ListItemAvatar>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
            component="div"
          >
            프로필
          </Typography>
        </ListItemButton>
      </ListItem>
    </List>
  );
}

export default NavigationBox;
