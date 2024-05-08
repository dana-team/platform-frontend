import { createFileRoute } from "@tanstack/react-router";
import Project from "@pages/projects/project/Project";

export const Route = createFileRoute("/_authenticated/projects/$projectName")({
  component: Project,
});
