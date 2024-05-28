import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "../Reusables";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import x_button from "../../assets/PaymentIcon/x-button.png";
import { useEffect } from "react";
import { useAuth } from "../../hooks/AuthContext";

const PaymentCancellation = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth(); // Access isAuthenticated from useAuth hook

  useEffect(() => {
    // Redirect to login page if not authenticated
    if (!isAuthenticated) {
      navigate("/auth/login");
    }
  }, [isAuthenticated, navigate]); // Dependency array ensures this effect runs when isAuthenticated changes

  useEffect(() => {
    // Display cancellation toast when the component mounts
    toast.error("Oops! Something went wrong while processing your payment.");
  }, []);

  return (
    <div className=" my-10 px-4 min-h-[80vh] flex flex-col gap-10 justify-center items-center w-screen">
      <div className=" text-dark-blue mx-auto flex flex-col gap-7 justify-center items-center">
        <img src={x_button} className=" w-28 h-28" alt="Payment Cancellation" />
        <h3 className="text-4xl max-sm:text-2xl font-bold text-center">
          Oops! Something went wrong
        </h3>
        <p className=" text-center font-medium text-lg max-sm:text-sm max-sm:font-semibold">
          Something went wrong while processing your payment. Please try again{" "}
          <br /> or contact support if the issue persists.
        </p>
      </div>

      <Link to="/pricing">
        <Button text={"Retry Payment"} />
      </Link>

      <ToastContainer />
    </div>
  );
};

export default PaymentCancellation;
