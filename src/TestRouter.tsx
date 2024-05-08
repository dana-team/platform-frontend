import {
  AnyRouter,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { PropsWithChildren, ReactNode } from "react";

const createMockRouter = (component: ReactNode): AnyRouter => {
  const rootRoute = createRootRoute({
    component: () => component,
  });

  return createRouter({
    routeTree: rootRoute.addChildren([
      createRoute({
        path: "/",
        component: () => component,
        getParentRoute: () => rootRoute,
      }),
    ]),
  });
};

export const TestRouter = (props: PropsWithChildren) => {
  const router = createMockRouter(props.children);

  return <RouterProvider router={router} />;
};
