import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated")({
  beforeLoad: async ({ context }) => {
    if (context.isAuthenticated ? !context.isAuthenticated() : null) {
      throw redirect({ to: "/login" });
    }
  },
});
