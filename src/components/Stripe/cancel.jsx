import React from "react";
import { GiCancel } from "react-icons/gi";
import { Link } from "react-router-dom";
import { Button } from "../Reusables";

const Cancel = () => {
    return (
        <>
            <div className="m-0 p-0 bg-[#FDFDFD] min-h-screen">
                <div className="w-full min-h-[80vh] flex flex-col justify-center items-center">
                    <div className="my-10 text-red-600 text-2xl mx-auto flex flex-col justify-center items-center">
                        <GiCancel alt="cancel" className="w-40 h-40" style={{ color: 'red' }}/>
                        <h3 className="text-4xl pt-20 py-20 font-bold text-center text-slate-700">
                            Something Went Wrong
                        </h3>
                        <Link to={"/alldeals"}>
                            <Button text={"Go To Homepage"}/>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cancel;