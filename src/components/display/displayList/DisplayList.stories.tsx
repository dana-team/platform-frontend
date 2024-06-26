import type { Meta, StoryObj } from "@storybook/react";

import DisplayList from "./DisplayList";

const meta = {
  component: DisplayList,
} satisfies Meta<typeof DisplayList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <div className="text-mono/basic-3">List Item 1</div>
        <div className="text-mono/basic-3">List Item 2</div>
        <div className="text-mono/basic-3">List Item 3</div>
        <div className="text-mono/basic-3">List Item 4</div>
        <div className="text-mono/basic-3">List Item 5</div>
        <div className="text-mono/basic-3">List Item 6</div>
        <div className="text-mono/basic-3">List Item 7</div>
        <div className="text-mono/basic-3">List Item 8</div>
        <div className="text-mono/basic-3">List Item 9</div>
      </>
    ),
  },
};
