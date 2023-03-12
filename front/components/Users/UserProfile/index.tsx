import User from "@/typings/user";
import { Avatar, Box, Typography, Grid, Divider } from "@mui/material";
import { textAlign, width } from "@mui/system";
import React, { FC } from "react";

interface Props {
  userInfo: User;
}

const UserProfile: FC<Props> = ({ userInfo }) => {
  return (
    <Grid container justifyContent="center" sx={{ my: 10 }}>
      <Grid container justifyContent="center" sx={{ my: 1 }}>
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          sx={{ width: 140, height: 140, fontSize: 70 }}
        >
          {userInfo.nickname[0]}
        </Avatar>
      </Grid>
      <Grid container justifyContent="center" sx={{ mt: 1 }}>
        <Typography variant="h5" component="h5">
          {userInfo.nickname}
        </Typography>
      </Grid>
      <Grid container justifyContent="center" sx={{ mt: 1 }} spacing={3}>
        <Grid item>
          <Typography variant="subtitle1" component="span">
            {`팔로잉 ${userInfo.Followings}`}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1" component="span">
            {`팔로워 ${userInfo.Followers}`}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1" component="span">
            {`짹짹 ${userInfo.Posts}`}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default UserProfile;
