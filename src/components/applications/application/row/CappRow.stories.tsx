import type { Meta, StoryObj } from "@storybook/react";

import CappRow from "./CappRow";
import { fn } from "@storybook/test";
import { TestRouter } from "cypress/TestRouter";

const meta = {
  component: CappRow,
  decorators: [
    (Story) => (
      <TestRouter>
        <Story />
      </TestRouter>
    ),
  ],
  parameters: {
    backgrounds: {
      default: "mono/basic-13",
    },
    args: { onClick: fn() },
  },
} satisfies Meta<typeof CappRow>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    projectName: "project",
    cappName: "capp-example-app",
    cappSource: "example/source:latest",
    deployment: "example-deployment",
  },
};
