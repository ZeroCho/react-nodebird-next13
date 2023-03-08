"use client";

import { changeNicknameAPI } from "@/apis/user";
import useInput from "@/hooks/useInput";
import { RootState } from "@/store/store";
import {
  Button,
  FormControl,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import React, { FormEvent, useEffect } from "react";
import { useSelector } from "react-redux";

const EditUserInfo = () => {
  const me = useSelector((state: RootState) => state.global.userInfo);
  const [editNickname, handleEditNickname, setEditNickname] =
    useInput<string>("");

  const { mutate } = useMutation(changeNicknameAPI);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!editNickname.trim()) {
      alert("변경할 이름을 입력해 주세요");
    }

    mutate(editNickname);
    alert("변경이 완료되었습니다");
  };

  useEffect(() => {
    me?.nickname && setEditNickname(me.nickname);
  }, [me, setEditNickname]);

  return (
    <FormControl
      component="form"
      onSubmit={handleSubmit}
      sx={{ width: "100%" }}
    >
      <Typography variant="h6" sx={{ textAlign: "center", mb: "1rem" }}>
        회원정보 수정
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            required
            id="outlined-required"
            label="닉네임 변경"
            value={editNickname}
            onChange={handleEditNickname}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" type="submit">
            정보 수정
          </Button>
        </Grid>
      </Grid>
    </FormControl>
  );
};

export default EditUserInfo;
