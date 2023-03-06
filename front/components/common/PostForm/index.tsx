import { addPostAPI } from "@/apis/tweet";
import useInput from "@/hooks/useInput";
import { Textarea } from "@mui/joy";
import FormControl from "@mui/joy/FormControl";
import { Button } from "@mui/material";
import List from "@mui/material/List/List";
import ListItem from "@mui/material/ListItem/ListItem";
import { useMutation } from "@tanstack/react-query";
import React, { FormEvent, useCallback } from "react";

const PostForm = () => {
  const [text, handleText, setText] = useInput("");
  const { mutate } = useMutation(addPostAPI, {});

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!text.trim()) {
        return alert("게시글을 작성하세요.");
      }
      const formData = new FormData();
      formData.append("content", text);
      mutate(formData);
    },
    [mutate, text]
  );

  return (
    <FormControl component="form" onSubmit={handleSubmit}>
      <List>
        <ListItem>
          <label htmlFor="unique-id">오늘 기분이 어떠신가요?</label>
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
        </ListItem>
      </List>
    </FormControl>
  );
};

export default PostForm;
