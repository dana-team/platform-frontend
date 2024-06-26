/// <reference types="vite-plugin-svgr/client" />
import Plus from "@/assets/plus.svg?react";
import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";
import { fn } from "@storybook/test";

const meta = {
  component: Button,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "mono/basic-13",
    },
    args: { onClick: fn() },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: <div>Add a new project</div>,
    icon: <Plus />,
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: <div>close</div>,
    icon: <Plus />,
  },
};

export const Link: Story = {
  args: {
    variant: "link",
    children: <div>deployment link</div>,
    icon: <Plus />,
  },
};
