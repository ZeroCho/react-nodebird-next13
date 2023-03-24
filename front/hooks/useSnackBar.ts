import { openSnackBar, setSnackBarMessage } from "@/reducers/slice";
import React from "react";
import { useDispatch } from "react-redux";

const useSnackBar = (message: string) => {
  const dispatch = useDispatch();
  const open = () => {
    dispatch(setSnackBarMessage(message));
    dispatch(openSnackBar());
  };

  return open;
};

export default useSnackBar;
