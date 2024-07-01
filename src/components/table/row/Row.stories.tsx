import type { Meta, StoryObj } from "@storybook/react";

import Row from "./Row";
import { TestRouter } from "cypress/TestRouter";
import CappMenuItems from "@components/applications/application/CappMenuItems";

const projectName = "Storybook"
const cappName = "example"

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
    menuChildren: (
      <CappMenuItems projectName={projectName} applicationName={cappName} />
    ),
  },
};
