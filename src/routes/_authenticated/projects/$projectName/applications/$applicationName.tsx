import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/_authenticated/projects/$projectName/applications/$applicationName",
)({
  component: () => (
    <div>
      Hello /_authenticated/projects/$projectName/applications/applicationName!
    </div>
  ),
});
