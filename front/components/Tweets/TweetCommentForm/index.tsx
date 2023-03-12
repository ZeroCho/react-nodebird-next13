import { addCommentAPI } from "@/apis/tweet";
import useInput from "@/hooks/useInput";
import { RootState } from "@/store/store";
import { Textarea } from "@mui/joy";
import { Button, FormControl, List, ListItem } from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { FC, FormEvent, useCallback } from "react";
import { useSelector } from "react-redux";

interface Props {
  postId: number;
}

const TweetCommentForm: FC<Props> = ({ postId }) => {
  const queryClient = useQueryClient();
  const me = useSelector((state: RootState) => state.global.userInfo);
  const [comment, handleComment, setComment] = useInput("");

  const { mutate } = useMutation(addCommentAPI, {
    onSuccess: () => {
      setComment("");
      queryClient.refetchQueries(["tweets"]);
    },
  });

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!comment.trim()) {
        return alert("댓글을 작성하세요.");
      }
      console.log(comment);
      me && mutate({ userId: me.id, content: comment, postId: postId });
    },
    [comment, me, mutate, postId]
  );

  return (
    <FormControl
      component="form"
      sx={{ width: "100%" }}
      onSubmit={handleSubmit}
    >
      <List>
        <ListItem>
          <Textarea
            value={comment}
            onChange={handleComment}
            sx={{ width: "100%" }}
            slotProps={{
              textarea: {
                id: "unique-id",
              },
            }}
            minRows={2}
            maxRows={2}
          />
        </ListItem>
        <ListItem>
          <Button variant="contained" type="submit">
            댓글 작성
          </Button>
        </ListItem>
      </List>
    </FormControl>
  );
};

export default TweetCommentForm;
