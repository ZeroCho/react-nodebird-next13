import { HASHTAG_REGEX, HASHTAG_REGEX_FLAG_GLOBAL } from "@/constants/regex";
import { CardContent, Typography } from "@mui/material";
import Link from "next/link";
import React, { FC } from "react";

interface Props {
  content: string;
}

const TweetCardContent: FC<Props> = ({ content }) => {
  return (
    <CardContent>
      <Typography variant="body2" color="text.secondary">
        {content
          .split(HASHTAG_REGEX_FLAG_GLOBAL)
          .map((v: string, i: number) => {
            if (v.match(HASHTAG_REGEX)) {
              return (
                <Link href={`/hashtag/${v.slice(1)}`} prefetch={false} key={i}>
                  {v}
                </Link>
              );
            }
            return v;
          })}
      </Typography>
    </CardContent>
  );
};

export default TweetCardContent;
