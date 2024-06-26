import type { Meta, StoryObj } from "@storybook/react";

import DisplayBar from "./DisplayBar";

const meta = {
  component: DisplayBar,
} satisfies Meta<typeof DisplayBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    setSearch: () => console.log("search"),
    setDisplayGrid: () => console.log("changed display"),
    isDisplayGrid: true,
    success: true,
    button: "button",
  },
};
