/// <reference types="vite-plugin-svgr/client" />
import React from "react";
import AppIcon from "@/assets/app-icon.svg?react";
import Modal from "@/components/modal/Modal";
import Typography from "@/components/typography/Typography";
import Button from "@/components/button/Button";
import { APP_NAME } from "@/common/consts";
import Input from "@/components/form/input/Input";
import { useLogin } from "@hooks/login/useLogin";

const Login: React.FC = () => {
  const { register, handleSubmit, formErrors, onSubmit, error } = useLogin();

  return (
    <div className="h-screen bg-mono/basic-15">
      <div className="h-screen bg-cover bg-no-repeat bg-login-pattern opacity-30">
        <Modal>
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center pb-4">
              <Typography>
                <AppIcon />
              </Typography>
              <Typography
                variant="headline-md"
                className="text-mono/basic-4 pl-3"
              >
                {APP_NAME}
              </Typography>
            </div>
            <div className="bg-mono/basic-12 border border-mono/basic-10 h-85 w-150 flex flex-col py-8 px-10 rounded-lg">
              <Typography
                variant="headline-lg"
                className="text-mono/basic-1 gap-2 mb-5 h-8"
              >{`Login to ${APP_NAME}`}</Typography>

              <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                  type="text"
                  {...register("username", {
                    required: "username is required",
                  })}
                  error={formErrors.username?.message as string}
                  label="Username"
                  autoComplete="username"
                  placeholder="Insert username..."
                />
                <Input
                  type="password"
                  {...register("password", {
                    required: "password is required",
                    minLength: {
                      value: 6,
                      message: "password should be longer than 6 characters",
                    },
                  })}
                  error={formErrors.password?.message as string}
                  label="Password"
                  placeholder="Insert password..."
                />

                <div className="flex items-center justify-center pt-3 h-13">
                  <Button
                    variant="primary"
                    onClick={handleSubmit(onSubmit)}
                    className="w-[140px]"
                  >
                    Login
                  </Button>
                </div>
              </form>
            </div>
            <Typography
              variant="body-sm"
              className={`text-velvet/basic-5 mb-1 pt-0.75 h-5 ${error ? "" : "opacity-0"}`}
            >
              {error}
            </Typography>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Login;
