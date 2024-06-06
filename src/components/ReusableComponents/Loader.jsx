import React from "react";
import { Oval } from "react-loader-spinner";

function Loader() {
  return (
    <div className="flex justify-center items-center h-screen w-full">
      <Oval
        visible={true}
        height={50}
        width={50}
        color="#1A1D32"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}

export default Loader;
