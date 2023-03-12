"use client";

import { store } from "@/store/store";
import User from "@/typings/user";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { ReactNode } from "react";
import { Provider } from "react-redux";

const Providers = ({ me, children }: { me: User; children: ReactNode }) => {
  const queryClient = new QueryClient();
  return (
    <Provider store={store(me)}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </Provider>
  );
};

export default Providers;
