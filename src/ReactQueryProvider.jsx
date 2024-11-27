import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
// eslint-disable-next-line react/prop-types
export const ReactQueryProvider = ({ children }) => {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
