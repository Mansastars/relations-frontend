import React from "react";
import error_404 from "../../assets/error-404.png";
import { Button } from "../Reusables";
import { Link } from "react-router-dom";

function NotFoundUI() {
  return (
    <div className=" my-10 px-4 min-h-[80vh] flex flex-col gap-10 justify-center items-center w-screen">
      <div className=" text-dark-blue mx-auto flex flex-col gap-7 justify-center items-center">
        <img src={error_404} className=" w-28 h-28" alt="Error 404" />
        <h3 className="text-4xl max-sm:text-2xl font-bold text-center">
          Oops, page not found
        </h3>
        <p className=" text-center font-medium text-lg max-sm:text-sm max-sm:font-semibold">
          We are very sorry for the inconvience. It looks like you're trying to{" "}
          <br /> access a page that has been deleted or never even existed.
        </p>
      </div>

      <Link to="/auth/login">
        <Button text={"Back To Dashboards"} />
      </Link>
    </div>
  );
}

export default NotFoundUI;
