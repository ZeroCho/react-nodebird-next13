import {
  Avatar,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { FC, useState } from "react";
import User from "@/typings/user";
import { InfiniteData } from "@tanstack/react-query";
import useFollowMutation from "@/hooks/mutations/useFollowMutation";
import useUnFollowMutation from "@/hooks/mutations/useUnFollowMutation";

interface Prop {
  data: InfiniteData<User[]>;
  fetchNextPage: () => void;
  hasNextPage: boolean | undefined;
}

const FollowList: FC<Prop> = ({ data, fetchNextPage, hasNextPage }) => {
  const { mutate: unFollowMutate } = useUnFollowMutation();
  return (
    <>
      {data.pages.map((page) =>
        page.map((user) => (
          <List key={user.id}>
            <ListItem
              secondaryAction={
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => unFollowMutate(user.id)}
                >
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemAvatar>
                <Avatar>{user.nickname[0]}</Avatar>
              </ListItemAvatar>
              <ListItemText primary={user.nickname} />
            </ListItem>
          </List>
        ))
      )}
      {hasNextPage && (
        <Button variant="contained" onClick={fetchNextPage}>
          더보기
        </Button>
      )}
    </>
  );
};

export default FollowList;
