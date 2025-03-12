'use client';

import {queryClient} from "@/react-query/index";
import {QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

export default function QueryClientProviderWrapper({children}: { children: React.ReactNode }) {

  return (
    <>
      <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools/>
      </QueryClientProvider>
    </>
  );
}