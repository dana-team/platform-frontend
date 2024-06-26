import type { Meta, StoryObj } from "@storybook/react";

import Row from "./Row";
import { TestRouter } from "cypress/TestRouter";

const meta = {
  component: Row,
  decorators: [
    (Story) => (
      <TestRouter>
        <Story />
      </TestRouter>
    ),
  ],
} satisfies Meta<typeof Row>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div className="relative flex justify-center items-center w-full grow " />
    ),
    menuItems: [
      { label: "view applications", path: "" },
      { label: "members", path: `$projectName/members` },
      { label: "secrets", path: `$projectName/secrets` },
      { label: "divider", path: "" },
      { label: "settings", path: `$projectName/settings` },
    ],
  },
};
