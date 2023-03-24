import {
  CircularProgress,
  IconButton,
  List,
  ListItemButton,
  Paper,
} from "@mui/material";
import React, { FC, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import ReportIcon from "@mui/icons-material/Report";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { removePostAPI } from "@/apis/tweet";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useMyInfoQuery from "@/hooks/queries/useMyInfoQuery";
import User from "@/typings/user";

interface Props {
  user: Partial<User> & { id: number };
  postId: number;
  toggleReportModal: () => void;
}

const HeaderAction: FC<Props> = ({ postId, user, toggleReportModal }) => {
  const queryClient = useQueryClient();

  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const { data: me } = useMyInfoQuery();
  const { mutate: removePostMutate, isLoading: removePostIsLoading } =
    useMutation(() => removePostAPI(postId), {
      onSuccess: () => {
        queryClient.refetchQueries(["tweets"]);
      },
    });

  const toggleDropDown = () => {
    setIsDropDownOpen((pre) => !pre);
  };

  return (
    <>
      <IconButton aria-label="settings" onClick={toggleDropDown}>
        <MoreVertIcon />
      </IconButton>
      <Paper
        sx={{
          display: isDropDownOpen ? "block" : "none",
          position: "absolute",
        }}
      >
        <List disablePadding>
          {me?.id === user.id ? (
            <ListItemButton onClick={() => removePostMutate()}>
              {removePostIsLoading ? (
                <CircularProgress size="1.5rem" />
              ) : (
                <DeleteIcon />
              )}
            </ListItemButton>
          ) : (
            <ListItemButton onClick={toggleReportModal}>
              <ReportIcon />
            </ListItemButton>
          )}
        </List>
      </Paper>
    </>
  );
};

export default HeaderAction;
