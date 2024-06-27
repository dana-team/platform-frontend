import CreateApplication from "@pages/applications/CreateApplication/CreateApplication";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/_authenticated/projects/$projectName/create-application"
)({
  component: CreateApplicationComponent,
});

function CreateApplicationComponent() {
  const { projectName } = Route.useParams();
  return <CreateApplication projectName={projectName} />;
}
