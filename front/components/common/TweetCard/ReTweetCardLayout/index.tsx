"use client";

import { Card } from "@mui/material";
import React, { FC, PropsWithChildren } from "react";

const ReTweetCardLayout: FC<PropsWithChildren> = ({ children }) => {
  return <Card sx={{ margin: "1rem" }}>{children}</Card>;
};

export default ReTweetCardLayout;
