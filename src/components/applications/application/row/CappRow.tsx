/// <reference types="vite-plugin-svgr/client" />
import Thumbnail from "@/assets/account-thumbnails/color-3.svg?react";
import Typography from "@components/typography/Typography";
import React from "react";
import Row from "@components/table/row/Row";
import OpenLink from "@/assets/open-link.svg?react";
import Docker from "@/assets/icon-container.svg?react";
import Button from "@components/button/Button";
import CappMenuItems from "../CappMenuItems";

type CappRowProps = {
  projectName: string;
  cappName: string;
  cappSource: string;
  deployment?: string;
};

const CappRow = React.memo(
  ({ projectName, cappName, cappSource, deployment }: CappRowProps) => {
    return (
      <Row
        menuChildren={
          <CappMenuItems projectName={projectName} applicationName={cappName} />
        }
      >
        <div className="relative flex justify-center items-center">
          <Thumbnail />
          <div className="text-white absolute inset-0 flex justify-center items-center">
            {projectName[0].toUpperCase()}
            {cappName[0].toUpperCase()}
          </div>
        </div>
        <div className="flex flex-row pl-3 flex-grow overflow-hidden justify-start items-center gap-5 ">
          <Typography
            variant="headline-xs"
            className="text-mono/basic-1 truncate "
          >
            {cappName}
          </Typography>
          <div className="bg-mono/basic-13 pl-1 pr-3 rounded-[32px] flex items-center gap-1 h-[20px] w-fit">
            <div className="flex w-5 h-5 items-center justify-center">
              <Docker />
            </div>
            <Typography
              variant="label-md"
              className="text-mono/basic-5 truncate"
            >
              {cappSource}
            </Typography>
          </div>
        </div>

        <div className="flex items-center justify-center h-full">
          {deployment ? (
            <Button
              variant="link"
              icon={
                <div className="h-4 w-4 flex items-center">
                  <OpenLink />
                </div>
              }
              iconPosition="right"
              className="text-mono/basic-7"
              size="sm"
            >
              {deployment}
            </Button>
          ) : (
            <Typography variant="label-md" className="text-mono/basic-7 ">
              No production deployments
            </Typography>
          )}
        </div>

        <div className="grow-0 flex place-items-center pr-5">
          <div className="flex flex-row flex-grow place-items-center">
            <div className="flex flex-row pl-3 flex-grow place-items-center"></div>
          </div>
        </div>
      </Row>
    );
  }
);

export default CappRow;
