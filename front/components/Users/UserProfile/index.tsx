import { Avatar, Box, Typography, Grid, Divider } from "@mui/material";
import { textAlign, width } from "@mui/system";
import React from "react";

const UserProfile = () => {
  return (
    <Grid container justifyContent="center" sx={{ my: 10 }}>
      <Grid container justifyContent="center" sx={{ my: 1 }}>
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          sx={{ width: 140, height: 140, fontSize: 70 }}
        >
          A
        </Avatar>
      </Grid>
      <Grid container justifyContent="center" sx={{ mt: 1 }}>
        <Typography variant="h5" component="h5">
          대충이름
        </Typography>
      </Grid>
      <Grid container justifyContent="center" sx={{ mt: 1 }} spacing={3}>
        <Grid item>
          <Typography variant="subtitle1" component="span">
            팔로우 100
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1" component="span">
            팔로워 100
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1" component="span">
            짹짹 100
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default UserProfile;
