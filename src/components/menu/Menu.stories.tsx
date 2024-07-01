import type { Meta, StoryObj } from "@storybook/react";

import Menu from "./Menu";
import { TestRouter } from "cypress/TestRouter";
import { ReactNode } from "react";
import MenuItem from "./MenuItem";
import Typography from "@components/typography/Typography";

const menuItems: ReactNode = (
  <>
    <MenuItem>
      <Typography as="p" variant="body-md" className="text-mono/basic-4 ">
        Storybook
      </Typography>
    </MenuItem>

    <MenuItem>
      <Typography as="p" variant="body-md" className="text-mono/basic-4 ">
        Capp
      </Typography>
    </MenuItem>
  </>
);

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
    children: menuItems,
    target: targetElement as HTMLDivElement | null,
  },
};
