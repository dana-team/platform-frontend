import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useEffect } from "react";

interface IUseSearchProjectsResult {
  register: ReturnType<typeof useForm>["register"];
  handleSubmit: ReturnType<typeof useForm>["handleSubmit"];
}

export const useSearchProjects = (
  onSearch: SubmitHandler<FieldValues>
): IUseSearchProjectsResult => {
  const { register, handleSubmit, watch } = useForm();

  useEffect(() => {
    const subscription = watch(() => {
      const timer = setTimeout(() => {
        handleSubmit(onSearch)();
      }, 1000);

      return () => clearTimeout(timer);
    });
    return () => subscription.unsubscribe();
  }, [handleSubmit, watch]);

  return {
    register,
    handleSubmit,
  };
};
