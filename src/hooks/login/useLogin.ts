import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useDataMutation } from "@/hooks/useDataMutation";
import { IUser } from "@models/user/user";
import { IUserCredentials } from "@models/user/userCredentials";

interface IUseLoginResult {
  register: ReturnType<typeof useForm>["register"];
  handleSubmit: ReturnType<typeof useForm>["handleSubmit"];
  formErrors: ReturnType<typeof useForm>["formState"]["errors"];
  onSubmit: SubmitHandler<FieldValues>;
  error: string | null;
}

export const useLogin = (): IUseLoginResult => {
  const { signIn } = useAuth();
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    formState: { errors: formErrors },
    handleSubmit,
  } = useForm();

  const { mutateInstance: mutate } = useDataMutation<IUser>(
    "/auth",
    undefined,
    {
      onSuccess: async (response, user) => {
        const data = response.body as IUserCredentials;
        if (data && data.token) {
          signIn(data.token, user.username);
        }
      },
      onError: (error) => setError(error.message),
    }
  );

  const onSubmit: SubmitHandler<FieldValues> = async ({
    username,
    password,
  }) => {
    await mutate.post.mutateAsync({ username, password });
  };

  return {
    register,
    handleSubmit,
    formErrors,
    onSubmit,
    error,
  };
};
