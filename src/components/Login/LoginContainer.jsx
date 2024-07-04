import React from "react";
import LoginFormContainer from "./LoginFormContainer";
import LoginImageContainer from "./LoginImageContainer";

const LoginContainer = () => {
  return (
    <div className="flex w-full min-h-screen h-full max-md:flex-col">
      <div className="w-full lg:w-2/5 md:w-1/2">
        <LoginFormContainer />
      </div>
      <div className=" w-1/2 lg:w-3/5 max-md:w-full">
        <LoginImageContainer />
      </div>
    </div>
  );
};

export default LoginContainer;
