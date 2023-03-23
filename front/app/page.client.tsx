"use client";

import { loadPostsAPI } from "@/apis/tweet";
import TweetCardForm from "@/components/Tweets/TweetCardForm";
import TweetCardList from "@/components/Tweets/TweetCardList";
import Tweet from "@/typings/tweet";
import { IconButton, Snackbar } from "@mui/material";
import { useInfiniteQuery, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { closeSnackBar } from "@/reducers/slice";

const ClientPage = () => {
  const dispatch = useDispatch();
  const {
    data,
    isFetching: loadPostsLoading,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery<Tweet[]>(
    ["tweets"],
    ({ pageParam = "" }) => loadPostsAPI(pageParam),
    {
      getNextPageParam: (lastPage) => {
        return lastPage?.[lastPage.length - 1]?.id;
      },
    }
  );
  const { isOpen, message } = useSelector(
    (state: RootState) => state.global.snackBar
  );

  const action = (
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={() => dispatch(closeSnackBar())}
    >
      <CloseIcon fontSize="small" />
    </IconButton>
  );
  if (!data) return <></>;
  return (
    <>
      <Snackbar
        open={isOpen}
        autoHideDuration={3000}
        onClose={() => dispatch(closeSnackBar())}
        message={message}
        action={action}
      />
      <TweetCardForm />
      <TweetCardList
        data={data}
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
        isLoading={loadPostsLoading}
      />
    </>
  );
};

export default ClientPage;
