import type { Meta, StoryObj } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import ColorModal from "./ColorModal";
const meta = {
  component: ColorModal,
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
} satisfies Meta<typeof ColorModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    setShowModal: () => console.log("change"),
  },
};
