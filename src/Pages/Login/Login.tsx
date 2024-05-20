/// <reference types="vite-plugin-svgr/client" />

import AppIcon from "../../assets/app-icon.svg?react";
import Modal from "components/Modal/Modal";
import React, { useState } from "react";
import Typography from "components/Typography/Typography";
import PrimaryButton from "components/Button/PrimaryButton";
import LoginInput from "components/Login/Input/LoginInput";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleLogin = () => {
    // TODO: perhaps create "useAuth" hook and call it here.
    // const { login } = useAuth();
    console.log("Logging in...");
  };

  return (
    <div className="h-screen bg-mono/basic-15">
      <div className="h-screen bg-cover bg-no-repeat bg-login-pattern opacity-30">
        <Modal
          closeOnEscape={true}
          children={
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center justify-center pb-4">
                <Typography children={<AppIcon />} className="" />
                <Typography
                  variant="h3"
                  children={"RCS Amplify"}
                  className="text-mono/basic-4 pl-3	font-normal"
                />
              </div>
              <div className="bg-mono/basic-12 border border-mono/basic-10 h-85 w-150 flex flex-col py-8 px-10 rounded-lg">
                <Typography
                  variant="h2"
                  children={"Login to RCS Amplify"}
                  className="text-mono/basic-1 gap-2 mb-5 h-8"
                />
                <LoginInput
                  error={usernameError}
                  label="Username"
                  placeholder="Insert username..."
                  setValue={setUsername}
                  value={username}
                />
                <LoginInput
                  error={passwordError}
                  label="Password"
                  placeholder="Insert password..."
                  setValue={setPassword}
                  value={password}
                  inputType={"password"}
                />
                <div className="flex items-center justify-center pt-3 h-13">
                  <PrimaryButton
                    text={"Login"}
                    onClick={handleLogin}
                    className="h-10 w-35 bg-green/basic-5 font-semibold cursor-pointer login"
                  />
                </div>
              </div>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default Login;
