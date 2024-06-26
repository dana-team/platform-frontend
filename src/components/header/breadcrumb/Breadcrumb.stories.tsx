import type { Meta, StoryObj } from "@storybook/react";

import Breadcrumb from "./Breadcrumb";

const meta = {
  component: Breadcrumb,
} satisfies Meta<typeof Breadcrumb>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ProjectsOverview: Story = {
  args: {
    text: "Projects Overview",
  },
};

export const Dropdown: Story = {
  args: {
    text: "current project",
    isDropdown: true,
    shouldAddDivider: true,
  },
};
