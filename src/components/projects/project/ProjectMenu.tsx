import Divider from "@components/menu/Divider";
import LinkMenuItem from "@components/menu/LinkMenuItem";
import React, { useMemo } from "react";

type ProjectMenuItemProps = {
  projectName: string;
};
const menuItems = (projectName: string) => [
  {
    title: "View Applications",
    to: `${projectName}/applications`,
  },
  {
    title: "Members",
    to: `${projectName}/members`,
  },
  {
    title: "Secrets",
    to: `${projectName}/secrets`,
  },
];
const ProjectMenuItems = React.memo(({ projectName }: ProjectMenuItemProps) => {
  const items = useMemo(() => menuItems(projectName), [projectName]);
  return (
    <>
      {items.map((item, i) => (
        <LinkMenuItem title={item.title} to={item.to} key={i} />
      ))}
      <Divider />
      <LinkMenuItem to={`${projectName}/settings`} title="Settings" />
    </>
  );
});
export default ProjectMenuItems;
