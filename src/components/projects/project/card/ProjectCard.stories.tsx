import type { Meta, StoryObj } from "@storybook/react";

import ProjectCard from "./ProjectCard";
import { fn } from "@storybook/test";
import { TestRouter } from "cypress/TestRouter";

const meta = {
  component: ProjectCard,
  decorators: [
    (Story) => (
      <TestRouter>
        <Story />
      </TestRouter>
    ),
  ],
  parameters: {
    backgrounds: {
      default: "mono/basic-13",
    },
    args: { onClick: fn() },
  },
} satisfies Meta<typeof ProjectCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "name",
    hierarchy: "hierarchy",
  },
};
