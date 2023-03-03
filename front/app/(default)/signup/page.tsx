"use client";

import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const SignUpPage = () => {
  return (
    <Box component="div" sx={{ mt: "1rem" }}>
      <Typography variant="h5" sx={{ textAlign: "center", mb: "1rem" }}>
        회원가입
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField fullWidth required id="outlined-required" label="이메일" />
        </Grid>
        <Grid item xs={12}>
          <TextField fullWidth required id="outlined-required" label="닉네임" />
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
          <TextField
            required
            fullWidth
            id="outlined-required"
            type="password"
            label="비밀번호 확인"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox></Checkbox>}
            label="제로초 말을 잘 들을 것을 동의합니다."
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained">회원가입</Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SignUpPage;
