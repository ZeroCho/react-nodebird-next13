"use client";

import { loadMyInfoAPI } from "@/apis/auth";
import NavigationBox from "@/components/Layouts/NavigationBox";
import SearchInput from "@/components/Layouts/SearchInput";
import SignInForm from "@/components/Auth/SignInForm";
import MyProfile from "@/components/Users/MyProfile";
import { RootState } from "@/store/store";
import User from "@/typings/user";
import { colors, Container, Grid, Link } from "@mui/material";
import { useSelector } from "react-redux";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const me = useSelector((state: RootState) => state.global.userInfo);
  return (
    <Container maxWidth="xl">
      <Grid container>
        <Grid item md={3} sm={12} xs={12}>
          <NavigationBox />
        </Grid>
        <Grid
          item
          md={6}
          sm={12}
          xs={12}
          justifyContent="center"
          sx={{
            borderRight: "solid",
            borderLeft: "solid",
            borderWidth: "0.1rem",
            borderColor: colors.grey[100],
            padding: "0.8rem",
          }}
        >
          <SearchInput />
          {children}
        </Grid>
        <Grid
          item
          md={3}
          sm={12}
          xs={12}
          justifyContent="center"
          sx={{ padding: "0.8rem" }}
        >
          {me ? <MyProfile /> : <SignInForm />}

          <Link href="https://www.zerocho.com/" color={colors.blue[700]}>
            Made by ZeroCho
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
}
