import type { Meta, StoryObj } from "@storybook/react";
import ApplicationsOverview from "./ApplicationsOverview";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { applicationHandlers } from "@mocks/handlers/applications";
import { TestRouter } from "cypress/TestRouter";

const meta = {
  component: ApplicationsOverview,
  parameters: {
    msw: {
      handlers: applicationHandlers,
    },
  },
  decorators: [
    (Story) => {
      const queryClient = new QueryClient();

      return (
        <TestRouter>
          <QueryClientProvider client={queryClient}>
            <Story />
          </QueryClientProvider>
        </TestRouter>
      );
    },
  ],
} satisfies Meta<typeof ApplicationsOverview>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    projectName: "project",
  },
};
