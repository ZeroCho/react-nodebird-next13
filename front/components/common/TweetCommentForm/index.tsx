import useInput from "@/hooks/useInput";
import { Textarea } from "@mui/joy";
import { Button, FormControl, List, ListItem } from "@mui/material";
import React from "react";

const TweetCommentForm = () => {
  const [comment, handleComment] = useInput("");
  return (
    <FormControl component="form" sx={{ width: "100%" }}>
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
            minRows={4}
            maxRows={4}
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
