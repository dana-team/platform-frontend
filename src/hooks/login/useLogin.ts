import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useDataMutation } from "@/hooks/useDataMutation";

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
  const [username, setUsername] = useState("");

  const {
    register,
    formState: { errors: formErrors },
    handleSubmit,
  } = useForm();

  const { mutateInstance: mutate } = useDataMutation("/login", undefined, {
    onSuccess: async (response) => {
      const authData = response.body as { token: string; user: string };
      if (authData && authData.token) {
        signIn(authData.token, username);
      } else {
        throw new Error("No token provided");
      }
    },
    onError: (error) => setError(error.message),
  });

  const onSubmit: SubmitHandler<FieldValues> = async ({
    username,
    password,
  }) => {
    setUsername(username);
    await mutate.post.mutateAsync({
      headersInit: {
        Authorization: `Basic ${btoa(`${username}:${password}`)}`,
      },
    });
  };

  return {
    register,
    handleSubmit,
    formErrors,
    onSubmit,
    error,
  };
};
