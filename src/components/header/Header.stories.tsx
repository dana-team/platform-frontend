import type { Meta, StoryObj } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Header from "./Header";

const meta = {
  component: Header,
  decorators: [
    (Story) => {
      const queryClient = new QueryClient();

      return (
        <QueryClientProvider client={queryClient}>
          <div className="h-20">
            <Story />
          </div>
        </QueryClientProvider>
      );
    },
  ],
  parameters: {
    backgrounds: {
      default: "mono/basic-16",
    },
  },
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    breadcrumbs: [{ text: "Projects Overview" }],
    user: "user",
  },
};

export const Applications: Story = {
  args: {
    breadcrumbs: [
      { text: "Project", isDropdown: true },
      { text: "application", shouldAddDivider: true },
    ],
    user: "user",
  },
};
