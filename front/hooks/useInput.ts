import { useState, useCallback, SetStateAction, Dispatch } from "react";

type ReturnType<T> = [T, (e: any) => void, Dispatch<SetStateAction<T>>];

const useInput = <T extends string>(initialValue: T): ReturnType<T> => {
  const [value, setValue] = useState<T>(initialValue);
  const handler = useCallback((e: any) => {
    setValue(e.target.value);
  }, []);
  return [value, handler, setValue];
};

export default useInput;
