import type { Meta, StoryObj } from "@storybook/react";

import Pagination from "./Pagination";

const meta = {
  component: Pagination,
  decorators: [
    (Story) => (
      <div className="w-20">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Pagination>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    siblingCount: 2,
    totalCount: 12,
    onPageChange: (page: number) => console.log(page),
    currentPage: 1,
    pageSize: 4,
    isPlaceholderData: true,
  },
};
