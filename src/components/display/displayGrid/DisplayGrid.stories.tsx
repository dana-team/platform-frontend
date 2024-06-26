import type { Meta, StoryObj } from "@storybook/react";

import DisplayGrid from "./DisplayGrid";

const meta = {
  component: DisplayGrid,
} satisfies Meta<typeof DisplayGrid>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <div className="text-mono/basic-3">Grid Item 1</div>
        <div className="text-mono/basic-3">Grid Item 2</div>
        <div className="text-mono/basic-3">Grid Item 3</div>
        <div className="text-mono/basic-3">Grid Item 4</div>
        <div className="text-mono/basic-3">Grid Item 5</div>
        <div className="text-mono/basic-3">Grid Item 6</div>
        <div className="text-mono/basic-3">Grid Item 7</div>
        <div className="text-mono/basic-3">Grid Item 8</div>
        <div className="text-mono/basic-3">Grid Item 9</div>
      </>
    ),
  },
};
