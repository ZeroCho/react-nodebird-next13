import { Divider, IconButton, InputBase, Paper } from "@mui/material";
import React, { FormEvent } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import { useRouter } from "next/navigation";
import useInput from "@/hooks/useInput";

const SearchInput = () => {
  const router = useRouter();
  const [search, handleSearch] = useInput("");
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`hashtag/${search}`);
  };
  return (
    <Paper
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center" }}
      onSubmit={handleSubmit}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="해시태그를 입력하세요"
        value={search}
        onChange={handleSearch}
      />
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchInput;
