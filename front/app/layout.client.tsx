"use client";

import NavigationBox from "@/components/Layouts/NavigationBox";
import SearchInput from "@/components/Layouts/SearchInput";
import SignInForm from "@/components/Auth/SignInForm";
import MyProfile from "@/components/Users/MyProfile";
import { colors, Container, Grid, Link, useTheme } from "@mui/material";
import useMyInfoQuery from "@/hooks/queries/useMyInfoQuery";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: me } = useMyInfoQuery();
  return (
    <Container maxWidth="xl">
      <Grid container>
        <Grid item xs={3}>
          <NavigationBox />
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          justifyContent="center"
          sx={{ padding: "0.8rem" }}
          display={{ md: "none" }}
        >
          {me ? <MyProfile /> : <SignInForm />}
          <Link href="https://www.zerocho.com/" color={colors.blue[700]}>
            Made by ZeroCho
          </Link>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
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
          xs={12}
          md={3}
          justifyContent="center"
          sx={{ padding: "0.8rem" }}
          display={{ xs: "none", md: "block" }}
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
