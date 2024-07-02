import React from "react";
import LoginFormContainer from "./LoginFormContainer";
import LoginImageContainer from "./LoginImageContainer";

const LoginContainer = () => {
  return (
    <div className="flex w-full h-full">
      <div className="w-full lg:w-2/5 md:w-1/2">
        <LoginFormContainer />
      </div>
      <div className="hidden sm:block w-1/2 lg:w-3/5">
        <LoginImageContainer />
      </div>
    </div>
  );
};

export default LoginContainer;
