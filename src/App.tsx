import "./index.css";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { useAuth } from "./hooks/useAuth.ts";
import NotFound from "./pages/notFound/NotFound.tsx";

export type RouterContext = {
  isAuthenticated: (() => boolean) | undefined;
};

const router = createRouter({
  routeTree,
  context: { isAuthenticated: undefined },
  defaultPreload: "intent",
  defaultPreloadStaleTime: 0,
  defaultErrorComponent: ({ error }) => <div>{`${error}`}</div>,
  defaultNotFoundComponent: () => <NotFound />,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function App() {
  const [queryClient] = useState(() => new QueryClient());
  const { isAuthenticated } = useAuth();

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} context={{ isAuthenticated }} />
    </QueryClientProvider>
  );
}

export default App;
