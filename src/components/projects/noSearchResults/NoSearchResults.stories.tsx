import type { Meta, StoryObj } from "@storybook/react";

import NoSearchResults from "./NoSearchResults";

const meta = {
  component: NoSearchResults,
} satisfies Meta<typeof NoSearchResults>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className: "className",
    search: "search",
  },
};
