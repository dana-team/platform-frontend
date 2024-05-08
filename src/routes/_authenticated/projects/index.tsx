import ProjectsOverview from "@pages/projects/projectsOverview/ProjectsOverview";
import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/_authenticated/projects/")({
  component: ProjectsOverview,
});
