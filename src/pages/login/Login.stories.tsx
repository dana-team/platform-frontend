import type { Meta, StoryObj } from "@storybook/react";

import Login from "./Login";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const meta = {
  component: Login,
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
} satisfies Meta<typeof Login>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
