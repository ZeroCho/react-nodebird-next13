import { Card } from "@mui/material";
import React, { FC, PropsWithChildren } from "react";

const TweetCardLayout: FC<PropsWithChildren> = ({ children }) => {
  return <Card sx={{ margin: "1.5rem 0.5rem" }}>{children}</Card>;
};

export default TweetCardLayout;
