import ApplicationsOverview from "@pages/applications/applicationsOverview/ApplicationsOverview";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/_authenticated/projects/$projectName/applications/"
)({
  component: ApplicationsOverviewComponent,
});

function ApplicationsOverviewComponent() {
  const { projectName } = Route.useParams();
  return <ApplicationsOverview projectName={projectName} />;
}
