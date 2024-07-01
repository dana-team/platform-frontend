/// <reference types="vite-plugin-svgr/client" />
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
import { ReactNode } from "react";

export type Item = {
  index: number;
  icon: ReactNode;
};

export const thumbnails: Item[] = [
  {
    index: 1,
    icon: <Thumbnails1 />,
  },
  {
    index: 2,
    icon: <Thumbnails2 />,
  },
  {
    index: 3,
    icon: <Thumbnails3 />,
  },
  {
    index: 4,
    icon: <Thumbnails4 />,
  },
  {
    index: 5,
    icon: <Thumbnails5 />,
  },
  {
    index: 6,
    icon: <Thumbnails6 />,
  },
  {
    index: 7,
    icon: <Thumbnails7 />,
  },
  {
    index: 8,
    icon: <Thumbnails8 />,
  },
  {
    index: 9,
    icon: <Thumbnails9 />,
  },
  {
    index: 10,
    icon: <Thumbnails10 />,
  },
];
