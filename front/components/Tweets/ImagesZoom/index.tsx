import { Box, Button, Card, Modal } from "@mui/material";
import Image from "next/image";
import React, { FC } from "react";
import Carousel from "react-material-ui-carousel";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ClearIcon from "@mui/icons-material/Clear";

const style = {
  position: "fixed",
  top: "6rem",
  left: "0%",
  width: "100%",
  bgcolor: "black",
  height: "calc(100% - 6rem)",
  pt: 10,
};

interface Props {
  open: boolean;
  images: Array<{ src: string }>;
  onClose: () => void;
}

const ImagesZoom: FC<Props> = ({ images, onClose, open }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <>
        <Box
          component="header"
          sx={{
            backgroundColor: "white",
            width: "100%",
            height: "6rem",
            textAlign: "center",
            padding: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2>상세 이미지</h2>
          <Button
            variant="text"
            size="large"
            onClick={onClose}
            style={{ position: "absolute", right: 0 }}
          >
            <ClearIcon fontSize="medium" />
          </Button>
        </Box>
        <Box sx={style}>
          <Carousel
            NextIcon={<ArrowRightIcon />}
            PrevIcon={<ArrowLeftIcon />}
            sx={{ width: "900px", margin: "auto" }}
            navButtonsAlwaysVisible
          >
            {images.map((image) => (
              <div
                key={image.src}
                style={{ padding: "32px", textAlign: "center" }}
              >
                <Image
                  src={`http://localhost:3065/${image.src}`}
                  width="800"
                  height="800"
                  alt={image.src}
                  style={{ margin: "0 auto" }}
                />
              </div>
            ))}
          </Carousel>
        </Box>
      </>
    </Modal>
  );
};

export default ImagesZoom;
