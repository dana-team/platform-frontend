import { MenuItem } from "@components/menu/items";

export const menuItems: (name: string, cappName: string) => MenuItem[] = (
  projectName,
  applicationName
) => [
  { label: "Overview", path: `${projectName}/applications/${applicationName}` },
  {
    label: "Deployments",
    path: `${projectName}/applications/${applicationName}/applications/${applicationName}/deployments`,
  },
  {
    label: "Logs",
    path: `${projectName}/applications/${applicationName}/applications/${applicationName}/logs`,
  },
  {
    label: "Storage",
    path: `${projectName}/applications/${applicationName}/applications/${applicationName}/logs`,
  },
  {
    label: "Terminal",
    path: `${projectName}/applications/${applicationName}/applications/${applicationName}/terminal`,
  },
  {
    label: "Integration",
    path: `${projectName}/applications/${applicationName}/applications/${applicationName}/integrations`,
  },
  { label: "divider", path: "" },
  {
    label: "Settings",
    path: `${projectName}/settings/applications/${applicationName}/settings`,
  },
];
