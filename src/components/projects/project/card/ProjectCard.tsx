/// <reference types="vite-plugin-svgr/client" />
import Thumbnail from "@/assets/account-thumbnails/color-3.svg?react";
import Typography from "@components/typography/Typography";
import React from "react";
import { MenuItem } from "@components/menu/items";
import Card from "@components/card/Card";

interface ProjectCardProps {
  name: string;
  hierarchy: string;
}

const menuItems: (name: string) => MenuItem[] = (projectName) => [
  { label: "view applications", path: `${projectName}/applications` },
  { label: "members", path: `${projectName}/members` },
  { label: "secrets", path: `${projectName}/secrets` },
  { label: "divider", path: "" },
  { label: "settings", path: `${projectName}/settings` },
];

const ProjectCard: React.FC<ProjectCardProps> = React.memo(
  ({ name, hierarchy }: ProjectCardProps) => {
    return (
      <Card menuItems={menuItems(name)}>
        <div className="flex flex-row">
          <div className="relative flex justify-center items-center">
            <Thumbnail />
            <div className="text-white absolute inset-0 flex justify-center items-center">
              {name[0].toUpperCase()}
            </div>
          </div>

          <div className="flex flex-col pl-2.25 flex-grow overflow-hidden">
            <Typography
              variant="headline-xs"
              className="text-mono/basic-1 mb-1 truncate"
            >
              {name}
            </Typography>
            <Typography
              variant="label-md"
              className="text-mono/basic-5 truncate"
            >
              {hierarchy}
            </Typography>
          </div>
        </div>
      </Card>
    );
  }
);

export default ProjectCard;
