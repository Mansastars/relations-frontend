import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api";
import Sucess from "../../assets/PaymentIcon/Sucess.png";
import { Button } from "../Reusables";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../../hooks/AuthContext";

function PaymentSuccessPage() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth(); // Access isAuthenticated from useAuth hook

  useEffect(() => {
    // Redirect to login page if not authenticated
    if (!isAuthenticated) {
      navigate("/auth/login");
    }
  }, [isAuthenticated, navigate]); // Dependency array ensures this effect runs when isAuthenticated changes

  const successNavigate = useEffect(() => {
    toast.success("Payment Successful!");
    setTimeout(() => {
      navigate("/alldashboards");
    }, 5000);
  }, []);

  const handlePaymentSuccess = async () => {
    try {
      const sessionID = new URLSearchParams(location.search).get("session_id");
      const response = await api.get(
        `/users/successful-payment?session_id=${sessionID}`
      );

      const userDetails = await api.get(`/users/profile/`);

      localStorage.setItem("user", JSON.stringify(userDetails.data.user));

      localStorage.setItem(
        "showBanner",
        userDetails.data.showBanner.toString()
      );

      localStorage.setItem(
        "showBilling",
        userDetails.data.showBilling.toString()
      );

      successNavigate;
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="w-screen px-4 my-10 min-h-[80vh] flex flex-col gap-10 justify-center items-center">
      <div className=" text-dark-blue mx-auto flex flex-col gap-7 justify-center items-center">
        <img src={Sucess} className=" w-28 h-28" alt="Payment Successful" />
        <h3 className="text-4xl font-bold text-center">Payment Successful!</h3>
        <p className=" text-center font-semibold text-lg">
          Congratulations! Your payment has been successfully processed. <br />
          Thank you for choosing our services.
        </p>
      </div>
      <Button text={"View Dashboards"} onClick={handlePaymentSuccess()} />
      <ToastContainer />
    </div>
  );
}

export default PaymentSuccessPage;
