import Thumbnail from "@/assets/account-thumbnails/color-3.svg?react";
import Typography from "@components/typography/Typography";
import React, { useMemo } from "react";
import Card from "@components/card/Card";
import OpenLink from "@/assets/open-link.svg?react";
import Docker from "@/assets/icon-container.svg?react";
import Button from "@components/button/Button";
import { menuItems } from "../menuItems";

interface CappCardProps {
  projectName: string;
  cappName: string;
  cappSource: string;
  deployment?: string;
}

const CappCard: React.FC<CappCardProps> = React.memo(
  ({ projectName, cappName, cappSource, deployment }: CappCardProps) => {
    const items = useMemo(
      () => menuItems(projectName, cappName),
      [projectName, cappName]
    );
    return (
      <Card menuItems={items}>
        <div className="flex flex-row">
          <div className="relative flex justify-center items-center">
            <Thumbnail />
            <div className="text-white absolute inset-0 flex justify-center items-center">
              {projectName[0].toUpperCase()}
              {cappName[0].toUpperCase()}
            </div>
          </div>

          <div className="flex flex-col pl-2.25 flex-grow overflow-hidden">
            <Typography
              variant="headline-xs"
              className="text-mono/basic-1 mb-1 truncate"
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
        </div>
        <div className="pr-5 mt-5">
          <div className="h-[1px] self-stretch bg-mono/basic-10" />
          {deployment ? (
            <Button
              variant="link"
              icon={
                <div className="h-4 w-4 flex items-center">
                  <OpenLink />
                </div>
              }
              iconPosition="right"
              className="text-mono/basic-7 mt-4"
              size="sm"
            >
              {deployment}
            </Button>
          ) : (
            <Typography variant="label-md" className="text-mono/basic-7 mt-5">
              No production deployments
            </Typography>
          )}
        </div>
      </Card>
    );
  }
);

export default CappCard;
