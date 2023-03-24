import { loadMyInfoAPI } from "@/apis/auth";
import { addCommentAPI } from "@/apis/tweet";
import useMyInfoQuery from "@/hooks/queries/useMyInfoQuery";
import useInput from "@/hooks/useInput";
import useSnackBar from "@/hooks/useSnackBar";
import { RootState } from "@/store/store";
import User from "@/typings/user";
import { Textarea } from "@mui/joy";
import {
  Button,
  CircularProgress,
  FormControl,
  List,
  ListItem,
} from "@mui/material";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { FC, FormEvent, useCallback } from "react";

interface Props {
  postId: number;
}

const TweetCommentForm: FC<Props> = ({ postId }) => {
  const queryClient = useQueryClient();
  const { data: me } = useMyInfoQuery();
  const [comment, handleComment, setComment] = useInput("");
  const openSnackBar = useSnackBar("댓글 작성이 완료되었습니다.");

  const { mutate, isLoading } = useMutation(addCommentAPI, {
    onSuccess: () => {
      setComment("");
      queryClient.refetchQueries(["tweets"]);
      openSnackBar();
    },
  });

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!comment.trim()) {
        return alert("댓글을 작성하세요.");
      }
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
            {isLoading ? <CircularProgress size="1.5rem" /> : "댓글 작성"}
          </Button>
        </ListItem>
      </List>
    </FormControl>
  );
};

export default TweetCommentForm;
