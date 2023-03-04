"use client";

import { signUpAPI } from "@/apis/signup";
import useInput from "@/hooks/useInput";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  TextField,
} from "@mui/material";
import { useMutation } from "@tanstack/react-query/build/lib/useMutation";
import React, { useEffect, useState, useCallback, ChangeEvent } from "react";

const SignUpForm = () => {
  const { mutate } = useMutation(signUpAPI);

  const [email, handleEmail] = useInput("");
  const [nickname, handleNickname] = useInput("");
  const [password, handlePassword] = useInput("");
  const [passwordCheck, handlePasswordCheck] = useInput("");

  const [term, setTerm] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [termError, setTermError] = useState(false);

  const handleTerm = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.checked);
    setTermError(false);
  }, []);

  const handleSubmit = useCallback(() => {
    if (passwordError && !term) {
      return setTermError(true);
    }

    mutate({ email, nickname, password });
  }, []);

  useEffect(() => {
    setPasswordError(password !== passwordCheck);
  }, [password, passwordCheck, setPasswordError]);

  return (
    <FormControl
      error={passwordError && termError}
      component="fieldset"
      onSubmit={handleSubmit}
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
            fullWidth
            required
            id="outlined-required"
            label="닉네임"
            value={nickname}
            onChange={handleNickname}
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
            error={passwordError}
            helperText={passwordError && "비밀번호가 일치하지 않습니다."}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="outlined-required"
            type="password"
            label="비밀번호 확인"
            value={passwordCheck}
            onChange={handlePasswordCheck}
            error={passwordError}
            helperText={passwordError && "비밀번호가 일치하지 않습니다."}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox checked={term} onChange={handleTerm}></Checkbox>}
            label="제로초 말을 잘 들을 것을 동의합니다."
          />
          {termError && (
            <FormHelperText>약관에 동의하셔야 합니다.</FormHelperText>
          )}
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained">
            회원가입
          </Button>
        </Grid>
      </Grid>
    </FormControl>
  );
};

export default SignUpForm;
