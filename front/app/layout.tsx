import Providers from "./providers.client";
import ClientLayout from "./layout.client";
import { loadMyInfoAPI } from "@/apis/auth";
import { QueryClient, dehydrate } from "@tanstack/query-core";
import Hydrate from "./Hydrate.client";
import { cookies, headers } from "next/headers";
import { cache } from "react";
export const metadata = {
  title: "NodeBird",
  description: "NodeBird with NextJs 13 beta",
};

const getQueryClient = cache(() => new QueryClient());

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = getQueryClient();
  const header = headers();
  const cookie = header.get("Cookie");
  await queryClient.prefetchQuery(["user"], () =>
    loadMyInfoAPI({ headers: cookie ? { cookie } : undefined })
  );
  const dehydratedState = dehydrate(queryClient);

  return (
    <html lang="en">
      <body>
        <Providers>
          <Hydrate state={dehydratedState}>
            <ClientLayout>{children}</ClientLayout>
          </Hydrate>
        </Providers>
      </body>
    </html>
  );
}
