import type { Meta, StoryObj } from "@storybook/react";

import Sidebar from "./Sidebar";
import { TestRouter } from "cypress/TestRouter";

const meta = {
  component: Sidebar,
  parameters: {
    backgrounds: {
      default: "mono/basic-13",
    },
  },
  decorators: [
    (Story) => (
      <TestRouter>
        <div className="h-full">
          <Story />
        </div>
      </TestRouter>
    ),
  ],
} satisfies Meta<typeof Sidebar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    currentPath: "currentPath",
  },
};
