import { CardContent, Typography } from "@mui/material";
import React, { FC } from "react";

interface Props {
  content: string;
}

const TweetCardContent: FC<Props> = ({ content }) => {
  return (
    <CardContent>
      <Typography variant="body2" color="text.secondary">
        {content}
      </Typography>
    </CardContent>
  );
};

export default TweetCardContent;
