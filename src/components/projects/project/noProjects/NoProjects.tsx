/// <reference types="vite-plugin-svgr/client" />
import Plus from "@/assets/plus.svg?react";
import Button from "@components/button/Button";
import Typography from "@components/typography/Typography";

type NoProjectsProps = {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  className: string;
};
const NoProjects = ({ className, setShowModal }: NoProjectsProps) => {
  return (
    <div
      className={`flex flex-col justify-center items-center grow-0 bg-mono/basic-16 border border-mono/basic-10 rounded-md ${className}`}
    >
      <Typography variant="headline-md" className="text-mono/basic-1 mb-2">
        There are no existing projects associate with your account
      </Typography>
      <Typography variant="body-xl" className="text-[#6E6E6E]">
        You can add new applications to this project using your GitLab
      </Typography>
      <Typography variant="body-xl" className="text-[#6E6E6E] mb-5">
        repository, or import app from Image
      </Typography>
      <Button
        variant="primary"
        icon={<Plus />}
        onClick={() => setShowModal((prev) => !prev)}
      >
        Add the first project
      </Button>
    </div>
  );
};

export default NoProjects;
