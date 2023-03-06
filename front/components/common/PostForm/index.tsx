import { Textarea } from "@mui/joy";
import { Button } from "@mui/material";
import Box from "@mui/material/Box/Box";
import List from "@mui/material/List/List";
import ListItem from "@mui/material/ListItem/ListItem";
import React from "react";

const PostForm = () => {
  return (
    <List>
      <ListItem>
        <label htmlFor="unique-id">오늘 기분이 어떠신가요?</label>
      </ListItem>
      <ListItem>
        <Textarea
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
        <Button variant="contained">짹짹</Button>
      </ListItem>
    </List>
  );
};

export default PostForm;
