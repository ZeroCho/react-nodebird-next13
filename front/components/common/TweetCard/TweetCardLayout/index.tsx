import { Card } from "@mui/material";
import React, { FC, PropsWithChildren } from "react";

const TweetCardLayout: FC<PropsWithChildren> = ({ children }) => {
  return <Card>{children}</Card>;
};

export default TweetCardLayout;
