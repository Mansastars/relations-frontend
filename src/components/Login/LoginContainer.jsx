import React from "react";
import LoginFormContainer from "./LoginFormContainer";
import LoginImageContainer from "./LoginImageContainer";

const LoginContainer = () => {
  return (
    <div className="flex w-full max-lg:flex-col">
      <div className="w-full lg:w-2/5">
        <LoginFormContainer />
      </div>
      <div className=" w-full lg:w-3/5">
        <LoginImageContainer />
      </div>
    </div>
  );
};

export default LoginContainer;
