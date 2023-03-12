import { use } from "react";
import { cookies, headers } from "next/headers";
import Providers from "./providers";
import ClientLayout from "./ClientLayout";
import { setUserInfo } from "@/reducers/slice";
import { useDispatch } from "react-redux";

export const metadata = {
  title: "NodeBird",
  description: "NodeBird with NextJs 13 beta",
};

async function getUserInfo() {
  const header = headers();
  const Cookie = header.get("Cookie");
  const res = await fetch("http://localhost:3065/user", {
    headers: Cookie ? { Cookie } : undefined,
  });
  return res.json();
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const me = await getUserInfo();
  return (
    <html lang="en">
      <body>
        <Providers me={me}>
          <ClientLayout>{children}</ClientLayout>
        </Providers>
      </body>
    </html>
  );
}
