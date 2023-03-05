"use client";

import { loadMyInfoAPI } from "@/apis/auth";
import NavigationBox from "@/components/common/NavigationBox";
import SearchInput from "@/components/common/SearchInput";
import SignInForm from "@/components/common/SignInForm";
import UserProfile from "@/components/common/UserProfile";
import User from "@/typings/user";
import { colors, Container, Grid, Link } from "@mui/material";

export default function ClientLayout({
  children,
  me,
}: {
  children: React.ReactNode;
  me: User;
}) {
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
          {me ? <UserProfile /> : <SignInForm />}

          <Link href="https://www.zerocho.com/" color={colors.blue[700]}>
            Made by ZeroCho
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
}
