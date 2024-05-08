import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "@tanstack/react-router";
import { useAuth } from "@/hooks/useAuth";
import { useDataMutation } from "@/hooks/useDataMutation";
import { User } from "@/models/user/user";
import { AuthData } from "@/models/auth/authData";

interface UseLoginResult {
  register: ReturnType<typeof useForm>["register"];
  handleSubmit: ReturnType<typeof useForm>["handleSubmit"];
  formErrors: ReturnType<typeof useForm>["formState"]["errors"];
  onSubmit: SubmitHandler<FieldValues>;
  error: string | null;
}

export const useLogin = (): UseLoginResult => {
  const router = useRouter();
  const { signIn } = useAuth();
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    formState: { errors: formErrors },
    handleSubmit,
  } = useForm();

  const { mutateInstance: mutate } = useDataMutation<User>("/auth", undefined, {
    onSuccess: async (response, user) => {
      const authData: AuthData = AuthData.fromJson(
        response.body as { token: string; user: string }
      );
      if (authData && authData.token) {
        signIn(authData.token, user.username);
        router.invalidate();
      }
    },
    onError: (error) => setError(error.message),
  });

  const onSubmit: SubmitHandler<FieldValues> = async ({
    username,
    password,
  }) => {
    await mutate.post.mutateAsync(User.fromJson({ username, password }));
  };

  return {
    register,
    handleSubmit,
    formErrors,
    onSubmit,
    error,
  };
};
