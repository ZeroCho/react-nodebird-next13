"use client";

import { signInAPI } from "@/apis/auth";
import useInput from "@/hooks/useInput";
import { setUserInfo } from "@/reducers/slice";
import { Box, Button, colors, Grid, TextField } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";

function SignInForm() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [email, handleEmail] = useInput("");
  const [password, handlePassword] = useInput("");

  const { mutate } = useMutation(signInAPI, {
    onError: (error: any) => {
      alert(error.response?.data);
    },
    onSuccess: (data) => {
      dispatch(setUserInfo(data));
    },
  });

  const handleForm = useCallback(() => {
    mutate({ email, password });
  }, [email, mutate, password]);

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
          <TextField
            fullWidth
            required
            id="outlined-required"
            label="이메일"
            value={email}
            onChange={handleEmail}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="outlined-required"
            type="password"
            label="비밀번호"
            value={password}
            onChange={handlePassword}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" onClick={handleForm}>
            로그인
          </Button>
          <Button variant="outlined" onClick={() => router.push("/signup")}>
            회원가입
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default SignInForm;
