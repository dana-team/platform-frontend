import type { Preview } from "@storybook/react";
import "../src/index.css";
import { initialize, mswLoader } from "msw-storybook-addon";

initialize();

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "mono/basic-16",
      values: [
        {
          name: "mono/basic-16",
          value: "#101214",
        },
        {
          name: "mono/basic-13",
          value: "#22262B",
        },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  loaders: [mswLoader],
};

export default preview;
