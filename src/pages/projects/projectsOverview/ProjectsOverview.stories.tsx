import type { Meta, StoryObj } from "@storybook/react";
import ProjectsOverview from "./ProjectsOverview";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { projectsHandlers } from "@mocks/handlers/projects";

const meta = {
  component: ProjectsOverview,
  parameters: {
    msw: {
      handlers: projectsHandlers,
    },
  },
  decorators: [
    (Story) => {
      const queryClient = new QueryClient();

      return (
        <QueryClientProvider client={queryClient}>
          <Story />
        </QueryClientProvider>
      );
    },
  ],
} satisfies Meta<typeof ProjectsOverview>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
