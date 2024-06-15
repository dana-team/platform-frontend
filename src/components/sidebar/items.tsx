/// <reference types="vite-plugin-svgr/client" />

import AppsOverview from "@assets/apps_overview.svg?react";
import Members from "@assets/members.svg?react";
import Settings from "@assets/settings.svg?react";
import Secrets from "@assets/secrets.svg?react";

import { ReactNode } from "react";

export type Item = {
  icon: ReactNode;
  label: string;
  path: string;
};

const basePath: string = "/projects/$projectName";

export const sidebarItems: Item[] = [
  {
    icon: <AppsOverview />,
    label: "Applications",
    path: `${basePath}/applications`,
  },
  {
    icon: <Members />,
    label: "Members",
    path: `${basePath}/members`,
  },
  {
    icon: <Secrets />,
    label: "Secrets",
    path: `${basePath}/secrets`,
  },
  {
    icon: <Settings />,
    label: "Settings",
    path: `${basePath}/settings`,
  },
];
