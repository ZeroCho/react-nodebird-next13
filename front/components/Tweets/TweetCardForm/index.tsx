"use client";

import { addPostAPI, uploadImagesAPI } from "@/apis/tweet";
import useInput from "@/hooks/useInput";
import { Textarea } from "@mui/joy";
import FormControl from "@mui/joy/FormControl";
import { Button, Grid } from "@mui/material";
import List from "@mui/material/List/List";
import ListItem from "@mui/material/ListItem/ListItem";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import React, {
  ChangeEvent,
  ChangeEventHandler,
  FormEvent,
  useCallback,
  useState,
} from "react";

const TweetCardForm = () => {
  const queryClient = useQueryClient();
  const [text, handleText, setText] = useInput("");
  const [imagePaths, setImagePaths] = useState<string[]>([]);
  const { mutate } = useMutation(addPostAPI, {
    onSuccess: () => {
      queryClient.refetchQueries(["tweets"]);
    },
  });

  const onChangeImages = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    console.log("images", e.target.files);
    const imageFormData = new FormData();

    e.target.files &&
      Array.from(e.target.files).forEach((f) => {
        imageFormData.append("image", f);
      });
    uploadImagesAPI<string>(imageFormData).then((result) => {
      setImagePaths((prev) => prev.concat(result));
    });
  }, []);

  const onRemoveImage = useCallback(
    (index: number) => () => {
      setImagePaths((prev) => {
        return prev.filter((v, i) => i !== index);
      });
    },
    []
  );

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!text.trim()) {
        return alert("게시글을 작성하세요.");
      }
      const formData = new FormData();
      formData.append("content", text);
      imagePaths.forEach((p) => {
        formData.append("image", p);
      });
      mutate(formData);
    },
    [imagePaths, mutate, text]
  );

  return (
    <FormControl component="form" onSubmit={handleSubmit}>
      <List>
        <ListItem>
          <label htmlFor="unique-id">오늘 기분이 어떠신가요?</label>
        </ListItem>
        <ListItem>
          <Grid container spacing={2}>
            {imagePaths.map((v, i) => (
              <Grid item md={4} key={v}>
                <Image
                  src={`http://localhost:3065/${v}`}
                  alt="image"
                  width={200}
                  height={200}
                />
              </Grid>
            ))}
          </Grid>
        </ListItem>
        <ListItem>
          <Textarea
            value={text}
            onChange={handleText}
            sx={{ width: "100%" }}
            slotProps={{
              textarea: {
                id: "unique-id",
              },
            }}
            minRows={4}
            maxRows={4}
          />
        </ListItem>
        <ListItem>
          <Button variant="contained" type="submit">
            짹짹
          </Button>
          <input
            type="file"
            name="image"
            id="image"
            multiple
            hidden
            onChange={onChangeImages}
          />
          <Button component="label" htmlFor="image">
            이미지 업로드
          </Button>
        </ListItem>
      </List>
    </FormControl>
  );
};

export default TweetCardForm;
