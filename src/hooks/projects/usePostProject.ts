import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { useDataMutation } from "@/hooks/useDataMutation";

interface IUsePostProjectResult {
  register: ReturnType<typeof useForm>["register"];
  handleSubmit: ReturnType<typeof useForm>["handleSubmit"];
  formErrors: ReturnType<typeof useForm>["formState"]["errors"];
  onSubmit: SubmitHandler<FieldValues>;
  error: string | null;
  isSuccess: boolean;
  isLoading: boolean;
}

interface IProjectData {
  name: string;
  hierarchy: string;
}

export const usePostProject = (): IUsePostProjectResult => {
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    register,
    formState: { errors: formErrors },
    handleSubmit,
  } = useForm();

  const { mutateInstance: mutate } = useDataMutation<IProjectData>(
    "/projects",
    undefined,
    {
      onMutate: () => {
        setIsLoading(true);
        setIsSuccess(false);
        setError(null);
      },
      onSuccess: async () => {
        setIsSuccess(true);
        setIsLoading(false);
      },
      onError: (error) => {
        setError(error.message);
        setIsSuccess(false);
        setIsLoading(false);
      },
    }
  );

  const onSubmit: SubmitHandler<FieldValues> = async ({ name, hierarchy }) => {
    await mutate.post.mutateAsync({ body: { name, hierarchy } });
  };

  return {
    register,
    handleSubmit,
    formErrors,
    onSubmit,
    error,
    isSuccess,
    isLoading,
  };
};
