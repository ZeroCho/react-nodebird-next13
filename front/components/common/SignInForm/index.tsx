"use client";

import { Box, Button, colors, Grid, TextField } from "@mui/material";
import React from "react";

function SignInForm() {
  return (
    <Box
      component="form"
      sx={{
        mt: 3,
        padding: "2rem",
        borderRadius: "1rem",
        backgroundColor: colors.grey[50],
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField fullWidth required id="outlined-required" label="이메일" />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="outlined-required"
            type="password"
            label="비밀번호"
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained">로그인</Button>
          <Button variant="outlined">회원가입</Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default SignInForm;
