import type { Meta, StoryObj } from "@storybook/react";
import Thumbnails1 from "@assets/account-thumbnails/color-1.svg?react";
import Thumbnails2 from "@assets/account-thumbnails/color-2.svg?react";
import Thumbnails3 from "@assets/account-thumbnails/color-3.svg?react";
import Thumbnails4 from "@assets/account-thumbnails/color-4.svg?react";
import Thumbnails5 from "@assets/account-thumbnails/color-5.svg?react";
import Thumbnails6 from "@assets/account-thumbnails/color-6.svg?react";
import Thumbnails7 from "@assets/account-thumbnails/color-7.svg?react";
import Thumbnails8 from "@assets/account-thumbnails/color-8.svg?react";
import Thumbnails9 from "@assets/account-thumbnails/color-9.svg?react";
import Thumbnails10 from "@assets/account-thumbnails/color-10.svg?react";

type ThumbnailProps = { user: string };

const meta: Meta<ThumbnailProps> = {
  decorators: [
    (Story) => {
      return (
        <div className="h-20">
          <Story />
        </div>
      );
    },
  ],
  parameters: {
    backgrounds: {
      default: "mono/basic-16",
    },
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    user: "Storybook",
  },
  render: (args) => (
    <div className="relative flex justify-center items-center">
      <Thumbnails1 />
      <div className="text-white absolute inset-0 flex justify-center items-center">
        {args.user[0].toUpperCase()}
      </div>
    </div>
  ),
};

export const Thumbnail2: Story = {
  args: {
    user: "Storybook",
  },
  render: (args) => (
    <div className="relative flex justify-center items-center">
      <Thumbnails2 />
      <div className="text-white absolute inset-0 flex justify-center items-center">
        {args.user[0].toUpperCase()}
      </div>
    </div>
  ),
};
export const Thumbnail3: Story = {
  args: {
    user: "Storybook",
  },
  render: (args) => (
    <div className="relative flex justify-center items-center">
      <Thumbnails3 />
      <div className="text-white absolute inset-0 flex justify-center items-center">
        {args.user[0].toUpperCase()}
      </div>
    </div>
  ),
};
export const Thumbnail4: Story = {
  args: {
    user: "Storybook",
  },
  render: (args) => (
    <div className="relative flex justify-center items-center">
      <Thumbnails4 />
      <div className="text-white absolute inset-0 flex justify-center items-center">
        {args.user[0].toUpperCase()}
      </div>
    </div>
  ),
};
export const Thumbnail5: Story = {
  args: {
    user: "Storybook",
  },
  render: (args) => (
    <div className="relative flex justify-center items-center">
      <Thumbnails5 />
      <div className="text-white absolute inset-0 flex justify-center items-center">
        {args.user[0].toUpperCase()}
      </div>
    </div>
  ),
};
export const Thumbnail6: Story = {
  args: {
    user: "Storybook",
  },
  render: (args) => (
    <div className="relative flex justify-center items-center">
      <Thumbnails6 />
      <div className="text-white absolute inset-0 flex justify-center items-center">
        {args.user[0].toUpperCase()}
      </div>
    </div>
  ),
};
export const Thumbnail7: Story = {
  args: {
    user: "Storybook",
  },
  render: (args) => (
    <div className="relative flex justify-center items-center">
      <Thumbnails7 />
      <div className="text-white absolute inset-0 flex justify-center items-center">
        {args.user[0].toUpperCase()}
      </div>
    </div>
  ),
};
export const Thumbnail8: Story = {
  args: {
    user: "Storybook",
  },
  render: (args) => (
    <div className="relative flex justify-center items-center">
      <Thumbnails8 />
      <div className="text-white absolute inset-0 flex justify-center items-center">
        {args.user[0].toUpperCase()}
      </div>
    </div>
  ),
};
export const Thumbnail9: Story = {
  args: {
    user: "Storybook",
  },
  render: (args) => (
    <div className="relative flex justify-center items-center">
      <Thumbnails9 />
      <div className="text-white absolute inset-0 flex justify-center items-center">
        {args.user[0].toUpperCase()}
      </div>
    </div>
  ),
};
export const Thumbnail10: Story = {
  args: {
    user: "Storybook",
  },
  render: (args) => (
    <div className="relative flex justify-center items-center">
      <Thumbnails10 />
      <div className="text-white absolute inset-0 flex justify-center items-center">
        {args.user[0].toUpperCase()}
      </div>
    </div>
  ),
};
