import { HASHTAG_REGEX, HASHTAG_REGEX_FLAG_GLOBAL } from "@/constants/regex";
import { CardContent, Grid, Paper, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { FC, useCallback, useState } from "react";
import ImagesZoom from "../../ImagesZoom";

interface Props {
  content: string;
  images: Array<{ src: string }>;
}

const TweetCardContent: FC<Props> = ({ content, images }) => {
  const [showImagesZoom, setShowImagesZoom] = useState(false);

  const onClose = useCallback(() => {
    setShowImagesZoom(false);
  }, []);

  const onZoom = useCallback(() => {
    setShowImagesZoom(true);
  }, []);
  return (
    <>
      <ImagesZoom images={images} onClose={onClose} open={showImagesZoom} />
      <CardContent>
        <Grid container justifyContent="center" spacing={2}>
          {images.length >= 1 && (
            <Grid item>
              <Image
                src={`http://localhost:3065/${images[0].src}`}
                width="300"
                height="300"
                alt="post image"
                key={images[0].src}
                style={{ cursor: "pointer" }}
                onClick={onZoom}
              />
            </Grid>
          )}
          {images.length === 2 && (
            <Grid item>
              <Image
                src={`http://localhost:3065/${images[1].src}`}
                width="300"
                height="300"
                alt="post image"
                key={images[1].src}
                style={{ cursor: "pointer" }}
                onClick={onZoom}
              />
            </Grid>
          )}
          {images.length >= 3 && (
            <Grid item>
              <Paper
                variant="outlined"
                elevation={0}
                sx={{
                  width: "300px",
                  height: "300px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                }}
                onClick={onZoom}
              >
                + {images.length - 1} 더보기
              </Paper>
            </Grid>
          )}
        </Grid>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ marginTop: "0.8rem" }}
        >
          {content
            .split(HASHTAG_REGEX_FLAG_GLOBAL)
            .map((v: string, i: number) => {
              if (v.match(HASHTAG_REGEX)) {
                return (
                  <Link
                    href={`/hashtag/${v.slice(1)}`}
                    prefetch={false}
                    key={i}
                  >
                    {v}
                  </Link>
                );
              }
              return v;
            })}
        </Typography>
      </CardContent>
    </>
  );
};

export default TweetCardContent;
