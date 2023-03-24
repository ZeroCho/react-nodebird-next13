"use client";

import useMyInfoQuery from "@/hooks/queries/useMyInfoQuery";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const SignUpLayout = ({ children }: { children: React.ReactNode }) => {
  const { data: me } = useMyInfoQuery();
  const router = useRouter();
  useEffect(() => {
    if (me) router.push("/");
  }, [me, router]);
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
