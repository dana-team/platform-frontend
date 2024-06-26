import type { Meta, StoryObj } from "@storybook/react";

import ProjectRow from "./ProjectRow";
import { TestRouter } from "cypress/TestRouter";

const meta = {
  component: ProjectRow,
  decorators: [
    (Story) => (
      <TestRouter>
        <Story />
      </TestRouter>
    ),
  ],
} satisfies Meta<typeof ProjectRow>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "name",
    hierarchy: "hierarchy",
  },
};
