/// <reference types="vite-plugin-svgr/client" />
import Plus from "@/assets/plus.svg?react";
import Button from "@components/button/Button";
import Typography from "@components/typography/Typography";
import { Link } from "@tanstack/react-router";

type NoApplicationProps = {
  projectName: string;
  className: string;
};
const NoApplication = ({ className, projectName }: NoApplicationProps) => {
  return (
    <div
      className={`flex flex-col justify-center items-center grow-0 bg-mono/basic-16 border border-mono/basic-10 rounded-md ${className}`}
    >
      <Typography variant="headline-md" className="text-mono/basic-1 mb-2">
        There are no existing apps in this project yet
      </Typography>
      <Typography variant="body-xl" className="text-[#6E6E6E]">
        You can add new applications to this project using your GitLab
      </Typography>
      <Typography variant="body-xl" className="text-[#6E6E6E] mb-5">
        repository, or import an app from Image
      </Typography>
      <Link to={`/projects/${projectName}/create-application`}>
        <Button variant="primary" icon={<Plus />}>
          Add an app to this project
        </Button>
      </Link>
    </div>
  );
};

export default NoApplication;
