import type { Meta, StoryObj } from "@storybook/react";

import Menu from "./Menu";
import { TestRouter } from "cypress/TestRouter";

const meta = {
  component: Menu,
  decorators: [
    (Story) => (
      <TestRouter>
        <Story />
      </TestRouter>
    ),
  ],
} satisfies Meta<typeof Menu>;

export default meta;

type Story = StoryObj<typeof meta>;

const targetElement = document.getElementById("modal-root");

if (targetElement && !(targetElement instanceof HTMLDivElement)) {
  throw new Error("The target element must be an HTMLDivElement");
}

export const Default: Story = {
  args: {
    isOpen: true,
    items: [{ label: "Item 1" }, { label: "Item 2" }, { label: "Item 3" }],
    target: targetElement as HTMLDivElement | null,
  },
};
