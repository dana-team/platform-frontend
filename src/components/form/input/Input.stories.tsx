import type { Meta, StoryObj } from "@storybook/react";

import Input from "./Input";

const meta = {
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    type: "type",
    placeholder: "placheholder",
  },
};

export const Password: Story = {
  args: {
    type: "password",
    placeholder: "placheholder",
  },
};
