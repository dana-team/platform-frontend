import Divider from "@components/menu/Divider";
import LinkMenuItem from "@components/menu/LinkMenuItem";
import React, { useMemo } from "react";

type CappMenuItemsProps = {
  projectName: string;
  applicationName: string;
};

const menuItems = (projectName: string, applicationName: string) => [
  { title: "Overview", to: `${projectName}/applications/${applicationName}` },
  {
    title: "Deployments",
    to: `${projectName}/applications/${applicationName}/deployments`,
  },
  {
    title: "Logs",
    to: `${projectName}/applications/${applicationName}/logs`,
  },
  {
    title: "Storage",
    to: `${projectName}/applications/${applicationName}/storage`,
  },
  {
    title: "Terminal",
    to: `${projectName}/applications/${applicationName}/terminal`,
  },
  {
    title: "Integrations",
    to: `${projectName}/applications/${applicationName}/integrations`,
  },
];

const CappMenuItems = React.memo(
  ({ projectName, applicationName }: CappMenuItemsProps) => {
    const items = useMemo(
      () => menuItems(projectName, applicationName),
      [projectName, applicationName]
    );

    return (
      <>
        {items.map((item, i) => (
          <LinkMenuItem title={item.title} to={item.to} key={i} />
        ))}
        <Divider />
        <LinkMenuItem
          to={`${projectName}/applications/${applicationName}/settings`}
          title="Settings"
        />
      </>
    );
  }
);
export default CappMenuItems;
