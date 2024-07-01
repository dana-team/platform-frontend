/// <reference types="vite-plugin-svgr/client" />
import Thumbnail from "@/assets/account-thumbnails/color-3.svg?react";
import Typography from "@components/typography/Typography";
import React from "react";
import Row from "@components/table/row/Row";
import ProjectMenuItems from "../ProjectMenu";

type ProjectRowProps = {
  name: string;
  hierarchy: string;
};

const ProjectRow = React.memo(({ name, hierarchy }: ProjectRowProps) => {
  return (
    <Row menuChildren={<ProjectMenuItems projectName={name} />}>
      <div className="relative flex justify-center items-center">
        <Thumbnail />
        <div className="text-white absolute inset-0 flex justify-center items-center">
          {name[0].toUpperCase()}
        </div>
      </div>

      <div className="flex flex-col pl-3 flex-grow overflow-hidden justify-center">
        <Typography
          variant="headline-xs"
          className="text-mono/basic-1 truncate "
        >
          {name}
        </Typography>
      </div>
      <div className="grow-0 flex place-items-center pr-5">
        <div className="flex flex-row flex-grow place-items-center">
          <div className="flex flex-row pl-3 flex-grow place-items-center">
            <Typography variant="label-md" className="text-mono/basic-5">
              {hierarchy}
            </Typography>
          </div>
        </div>
      </div>
    </Row>
  );
});

export default ProjectRow;
