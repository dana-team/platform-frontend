import type { Meta, StoryObj } from "@storybook/react";

import ErrorOccured from "./ErrorOccured";
import Modal from "@components/modal/Modal";

const meta = {
  component: ErrorOccured,
  decorators: [
    (Story) => (
      <Modal darkenBackground={true}>
        <Story />
      </Modal>
    ),
  ],
} satisfies Meta<typeof ErrorOccured>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    error: "unknown error",
    setShowModal: () => {
      console.log("Modal closed");
    },
  },
};
