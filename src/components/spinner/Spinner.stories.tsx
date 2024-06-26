import type { Meta, StoryObj } from "@storybook/react";

import Spinner from "./Spinner";

const meta = {
  component: Spinner,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
    argTypes: {
      backgroundColor: { control: "color" },
    },
  },
} satisfies Meta<typeof Spinner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
