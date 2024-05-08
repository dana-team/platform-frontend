import { AnyRoute } from "@tanstack/react-router";
import { createFileRoute } from "@tanstack/react-router";
import Projects from "@pages/projects/Projects";

export const Route: AnyRoute = createFileRoute("/_authenticated/projects")({
  component: Projects,
});
