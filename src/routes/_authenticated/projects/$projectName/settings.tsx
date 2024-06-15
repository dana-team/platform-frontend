import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/_authenticated/projects/$projectName/settings",
)({
  component: () => (
    <div>Hello /_authenticated/projects/$projectName/settings!</div>
  ),
});
