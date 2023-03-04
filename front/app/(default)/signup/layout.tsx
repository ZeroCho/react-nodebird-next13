"use client";

import { Box, Typography } from "@mui/material";
import React from "react";

const SignUpLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box component="div" sx={{ mt: "1rem" }}>
      <Typography variant="h5" sx={{ textAlign: "center", mb: "1rem" }}>
        회원가입
      </Typography>
      {children}
    </Box>
  );
};

export default SignUpLayout;
