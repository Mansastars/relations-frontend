import React from "react";
// import SignUpUI from "../components/SignUp/SignUpWithWorkFlow/SignUpUI";
import SignUpWithMarketingUI from "../components/SignUp/SignUpWithMarketing/SignUpWithMarketingUI";

const NewSignUpPage = () => {
  return (
    <div className=" bg-white w-full h-full">
      {/* <SignUpUI /> */}
      <SignUpWithMarketingUI />
    </div>
  );
};

export default NewSignUpPage;
