import { Tag } from "lucide-react";
import React from "react";
import {
  PricingFeatures,
  PricingPrice,
  PricingButton,
  PricingButtonPremium,
} from "../ReusableComponents/PricingResuables";
import { useState, useEffect } from "react";
import SidePanel from "./SidePanel";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/AuthContext";
import "../../index.css";

function PaymentOption() {
  const [monthly, setMonthly] = useState(true);
  const [userId, setUserId] = useState("");
  const [email, setEmail] = useState("");
  const [planType, setPlanType] = useState("");
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth(); // Access isAuthenticated from useAuth hook
  const userData = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    // Redirect to login page if not authenticated
    if (!isAuthenticated) {
      navigate("/auth/login");
    }
  }, [isAuthenticated, navigate]); // Dependency array ensures this effect runs when isAuthenticated changes

  // Get the current date
  const currentDate = new Date();
  // Set the end date for the limited time offer
  const endDate = new Date("2024-03-31"); // yyyy-mm-dd
  // Check if the current date is before the end date
  const showBanner = currentDate <= endDate;

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setUserId(user.id);
      setEmail(user.email);
      user.subscription_name === null
        ? setPlanType("")
        : setPlanType(user.subscription_name);
    }
  }, []);

  const checkout = async (plan, userId) => {
    const data = {
      plan: plan,
      userId: userId,
    };
    try {
      const response = await api.post("/users/payment", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const session = response.data.session;
      localStorage.setItem("sessionId", JSON.stringify(session.id));
      window.location = session.url;
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className=" h-screen">
      {/* Limited Offer Banner */}
      {showBanner && (
        <div className=" bg-[#033CEE] w-full sticky top-0 z-50 text-white px-5 py-2 flex flex-col justify-between items-center">
          <div className=" flex gap-3 items-center">
            <div className=" flex gap-3 items-center">
              <Tag size={30} />
              <p className=" font-bold text-2xl max-sm:text-base">
                Limited Time Offer!{" "}
                <span
                  onClick={() => checkout(Number(23.99), userId)}
                  className=" text-black underline cursor-pointer"
                >
                  Subscribe
                </span>{" "}
                for only €23.99.
              </p>
            </div>
          </div>
          <p className=" max-sm:text-sm">Offer ends March 31st, 2024.</p>
        </div>
      )}

      <div className=" text-dark-blue flex flex-col items-center w-full gap-10 pb-20 overflow-y-auto px-3">
        <div className=" text-center pt-7">
          <p className=" font-semibold">
            {!userData.on_trial &&
              userData.subscription_name === null &&
              "Your trial has ended..."}
          </p>
          <p className=" font-semibold">
            Save up to <span className=" text-2xl font-extrabold">15%</span> of
            all our plans with our annual subcription
          </p>
        </div>

        <div className="toggle lg:mb-10">
          <label className="name">Annually</label>
          <input
            type="checkbox"
            className="checkbox"
            id="checkbox"
            checked={monthly}
            onChange={() => setMonthly(!monthly)}
          />

          <label htmlFor="checkbox" className="label">
            <div className="ball"></div>
          </label>

          <label className="name">Monthly</label>
        </div>

        <div className=" flex flex-row flex-wrap max-lg:gap-8 justify-center w-full">
          <div className=" bg-white px-6 py-8 w-80 max-sm:w-64 rounded-xl flex flex-col gap-8 lg:shadow">
            <h1 className=" text-2xl font-semibold text-center">Basic</h1>

            <div className=" w-full">
              {monthly && <PricingPrice price="14.99" />}
              {!monthly && <PricingPrice price="170.00" />}
            </div>

            <div className=" flex flex-col gap-4">
              <PricingFeatures text="1 Deal Creation" />
              <PricingFeatures text="Maximum of 5 Contacts" />
              <PricingFeatures text="No Investor Update Feature" />
              {/* {!monthly && <PricingFeatures text='Dedicated customer support' />} */}
            </div>

            <div className=" mt-auto">
              {monthly && (
                <div className=" w-full">
                  <PricingButton
                    text="Subscribe"
                    onClick={() => checkout(Number(14.99), userId)}
                  />
                </div>
              )}

              {!monthly && (
                <div className=" w-full">
                  <PricingButton
                    text="Subscribe"
                    onClick={() => checkout(Number(170.0), userId)}
                  />
                </div>
              )}
            </div>
          </div>

          <div className=" bg-dark-blue text-white px-6 lg:scale-110 py-8 w-80 max-sm:w-64 rounded-xl flex flex-col gap-8 lg:shadow ">
            <h1 className=" text-2xl font-semibold text-center">Recommended</h1>

            <div className=" w-full">
              {monthly && <PricingPrice price="29.99" />}
              {!monthly && <PricingPrice price="300.00" />}
            </div>

            <div className=" flex flex-col gap-4">
              <PricingFeatures text="1 User" />
              <PricingFeatures text="Track leads" />
              <PricingFeatures text="Filter leads by member" />
              <PricingFeatures text="Update leads" />
              <PricingFeatures text="Change lead stage" />
              <PricingFeatures text="Send automated monthly investor updates" />
              <PricingFeatures text="Access Investors Platform" />
              {!monthly && (
                <PricingFeatures text="Dedicated customer support" />
              )}
            </div>

            <div>
              {monthly && (
                <div className=" w-full">
                  <PricingButtonPremium
                    text="Subscribe"
                    onClick={() => checkout(Number(29.99), userId)}
                  />
                </div>
              )}

              {!monthly && (
                <div className=" w-full">
                  <PricingButtonPremium
                    text="Subscribe"
                    onClick={() => checkout(Number(300.0), userId)}
                  />
                </div>
              )}
            </div>
          </div>

          <div className=" bg-white px-6 py-8 w-80 max-sm:w-64 rounded-xl flex flex-col gap-8 lg:shadow ">
            <h1 className=" text-2xl font-semibold text-center">Premium</h1>

            <div className=" w-full">
              {monthly && <PricingPrice price="99.99" />}
              {!monthly && <PricingPrice price="1,000" />}
            </div>

            <div className=" flex flex-col gap-4">
              <PricingFeatures text="Up to 5 Users" />
              <PricingFeatures text="Track leads" />
              <PricingFeatures text="Filter leads by member" />
              <PricingFeatures text="Update leads" />
              <PricingFeatures text="Change lead stage" />
              <PricingFeatures text="Send automated monthly investor updates" />
              <PricingFeatures text="Access Investors Platform" />
              {!monthly && (
                <PricingFeatures text="Dedicated customer support" />
              )}
            </div>

            <div>
              {monthly && (
                <div className=" w-full">
                  <PricingButton
                    text="Subscribe"
                    onClick={() => checkout(Number(99.99), userId)}
                  />
                </div>
              )}

              {!monthly && (
                <div className=" w-full">
                  <PricingButton
                    text="Subscribe"
                    onClick={() => checkout(Number(1000), userId)}
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        <div className=" flex flex-row max-sm:flex-col gap-3 items-center justify-center mt-10 mb-20 w-full">
          <p className="font-semibold">You have other needs?</p>
          <button className="uppercase shadow p-3 border-2 border-dark-blue rounded-lg bg-dark-blue text-white hover:bg-transparent hover:text-dark-blue transition-all duration-200">
            <a href="mailto:service@mansastars.com">
              <p className=" font-bold">Talk to Us</p>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PaymentOption;
