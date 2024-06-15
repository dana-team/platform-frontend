import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import "../index.css";
import { RouterContext } from "@App";

export const Route = createRootRouteWithContext<RouterContext>()({
  component: () => {
    return <Outlet />;
  },
});
