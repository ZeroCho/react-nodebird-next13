"use client";

import NavigationBox from "@/components/common/NavigationBox";
import SignInForm from "@/components/common/SignInForm";
import { colors, Container, Grid, Link } from "@mui/material";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid item md={3} sm={12} xs={12}>
          <NavigationBox />
        </Grid>
        <Grid
          item
          md={6}
          sm={12}
          xs={12}
          sx={{
            borderRight: "solid",
            borderLeft: "solid",
            borderWidth: "0.1rem",
            borderColor: colors.grey[100],
          }}
        >
          {children}
        </Grid>
        <Grid item md={3} sm={12} xs={12}>
          <SignInForm />
          <Link href="https://www.zerocho.com/" color={colors.blue[700]}>
            Made by ZeroCho
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
}
