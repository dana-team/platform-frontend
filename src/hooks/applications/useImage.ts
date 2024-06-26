import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

interface IUseImageResult {
  register: ReturnType<typeof useForm>["register"];
  handleSubmit: ReturnType<typeof useForm>["handleSubmit"];
  formErrors: ReturnType<typeof useForm>["formState"]["errors"];
  onSubmit: SubmitHandler<FieldValues>;
}

type UseImageProps = {
  setImage: React.Dispatch<React.SetStateAction<string>>;
  setNextStep: React.Dispatch<React.SetStateAction<number>>;
};
export const useImage = ({
  setImage,
  setNextStep,
}: UseImageProps): IUseImageResult => {
  const {
    register,
    formState: { errors: formErrors },
    handleSubmit,
  } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = async ({ image }) => {
    setImage(image);
    setNextStep((prev) => prev + 1);
  };

  return {
    register,
    handleSubmit,
    formErrors,
    onSubmit,
  };
};
