/// <reference types="vite-plugin-svgr/client" />

import AppsOverview from "../../assets/apps_overview.svg?react";
import Members from "../../assets/members.svg?react";
import Settings from "../../assets/settings.svg?react";
import Secrets from "../../assets/secrets.svg?react";

import { ReactNode } from "react";

export type Item = {
  icon: ReactNode;
  label: string;
  rotate?: number;
};

export const sidebarItems: Item[] = [
  {
    icon: <AppsOverview />,
    label: "Applications",
  },
  {
    icon: <Members />,
    label: "Members",
  },
  {
    icon: <Secrets />,
    label: "Secrets",
    rotate: 45,
  },
  {
    icon: <Settings />,
    label: "Settings",
  },
];
