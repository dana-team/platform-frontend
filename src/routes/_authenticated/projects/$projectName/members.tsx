import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/_authenticated/projects/$projectName/members",
)({
  component: () => (
    <div>Hello /_authenticated/projects/$projectName/members!</div>
  ),
});
