import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/_authenticated/projects/$projectName/secrets"
)({
  component: () => (
    <div>Hello /_authenticated/projects/$projectName/secrets!</div>
  ),
});
