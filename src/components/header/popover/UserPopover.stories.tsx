import type { Meta, StoryObj } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import UserPopover from "./UserPopover";

const meta = {
  component: UserPopover,
  decorators: [
    (Story) => {
      const queryClient = new QueryClient();

      return (
        <QueryClientProvider client={queryClient}>
          <div className="flex w-full justify-center">
            <div className="h-20 ">
              <Story />
            </div>
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
} satisfies Meta<typeof UserPopover>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    user: "user",
  },
};
