/// <reference types="vite-plugin-svgr/client" />
import DockerIcon from "@/assets/icon-container.svg?react";
import Button from "@components/button/Button";
import Input from "@components/form/input/Input";
import Typography from "@components/typography/Typography";
import { useImage } from "@hooks/applications/useImage";

type ImportApplicationProps = {
  setImage: React.Dispatch<React.SetStateAction<string>>;
  setNextStep: React.Dispatch<React.SetStateAction<number>>;
};

const ImportApplication = ({
  setImage,
  setNextStep,
}: ImportApplicationProps) => {
  const { register, handleSubmit, formErrors, onSubmit } = useImage({
    setImage,
    setNextStep,
  });

  return (
    <div className="mr-10 flex flex-col w-full h-full">
      <Typography
        variant="headline-sm"
        className="text-mono/basic-3 mb-2.5 h-[5%]"
      >
        Import your code
      </Typography>
      <div className="border border-mono/basic-10 bg-mono/basic-14 flex justify-center items-center rounded-sm px-24 py-7.5 cursor-pointer mb-6 h-[35%]">
        <DockerIcon className="" />
        <Typography variant="headline-md" className=" text-mono/basic-3 ml-4">
          From image
        </Typography>
      </div>
      <div className="border border-mono/basic-10 bg-mono/basic-16 py-8 rounded-sm px-10 mb-6 h-[50%]">
        <Typography variant="headline-sm" className="text-mono/basic-1 mb-2">
          Import from image
        </Typography>
        <Typography variant="body-xl" className="text-mono/basic-2 mb-5">
          Only images from public registries are currently supported
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="text"
            {...register("image", {
              required: "image is required",
            })}
            error={formErrors.image?.message as string}
            label="Image name"
            autoComplete="image"
            placeholder="registry/image-name:tag"
          ></Input>
        </form>
      </div>
      <div className="flex items-center justify-center h-[10%]">
        <Button variant="primary" onClick={handleSubmit(onSubmit)}>
          import
        </Button>
      </div>
    </div>
  );
};

export default ImportApplication;
