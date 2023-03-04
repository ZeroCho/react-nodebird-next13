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
import React from "react";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Box } from "@mui/system";

const UserProfile = () => {
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
          icon={<Button sx={{ float: "right" }}>logOut</Button>}
        />
      </BottomNavigation>
    </Card>
  );
};

export default UserProfile;
