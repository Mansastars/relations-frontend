import React, { useEffect, useState } from "react";
import monthly from "../../assets/monthly.svg";
import annually from "../../assets/annually.svg";
import api from "../api";

const data = [
    {
        id: 1,
        src: monthly,
        title: "Monthly",
        price: "29.99",
    },
    {
        id: 2,
        src: annually,
        title: "Annually",
        price: "300",
    },

];
const Payment = () => {
    const [userId, setUserId] = useState("");
    const [email, setEmail] = useState("");
    const [planType, setPlanType] = useState("");

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) {
            setUserId(user.id);
            setEmail(user.email);
            user.subscription_name === null ? setPlanType("") : setPlanType(user.subscription_name)
        }
    }, []);

    const checkout = async (plan, userId) => {
        const data = {
            plan: plan,
            userId: userId
        }
        try {
            const response = await api.post("/users/payment", data, {
                headers: {
                    "Content-Type": "application/json",
                }
            });
            const session = response.data.session;
            localStorage.setItem("sessionId", JSON.stringify(session.id))
            window.location = session.url;
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <>
            <div className="flex flex-col items-center w-full mx-auto min-h-screen diagonal-background overflow-x-hidden">
                <div className="flex justify-between items-center w-full px-6 h-20 bg-[#00000012]">
                    <div className="text-4xl font-bold text-white">Subscriptions</div>
                    <div className="flex justify-center items-center gap-2">
                        {!userId ? (
                            <a
                                href="/login"
                                className="bg-white px-4 py-2 uppercase w-auto rounded-lg text-xl text-[#4f7cff] font-semibold"
                            >
                                Login
                            </a>
                        ) : (
                            <div className="flex justify-center items-center space-x-4">
                                <span className="text-white text-xl">{email}</span>
                                <button
                                    onClick={() => localStorage.clear()}
                                    className="bg-white px-4 py-2 w-auto rounded-lg text-base uppercase font-semibold text-[#4f7cff]"
                                >
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                </div>
                <div
                    className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 z-50 place-items-center w-9/12 mx-auto
        mt-20"
                >
                    {data.map((item, idx) => (
                        <div
                            key={idx}
                            className={`bg-white px-6 py-8 rounded-xl text-[#4f7cff] w-full mx-auto grid 
              place-items-center ${planType === item.title.toLowerCase() &&
                                "border-[16px] border-green-400"
                                }`}
                        >
                            <img
                                src={item.src}
                                alt=""
                                width={200}
                                height={200}
                                className="h-40"
                            />
                            <div className="text-4xl text-slate-700 text-center py-4 font-bold">
                                {item.title}
                            </div>
                            <p className="lg:text-sm text-xs text-center px-6 text-slate-500">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Dignissimos quaerat dolore sit eum quas non mollitia
                                reprehenderit repudiandae debitis tenetur?
                            </p>
                            <div className="text-4xl text-center font-bold py-4">
                                ${item.price}
                            </div>
                            <div className="mx-auto flex justify-center items-center my-3">
                                {planType === item.title.toLowerCase() ? (
                                    <button className="bg-green-600 text-white rounded-md text-base uppercase w-auto py-2 px-4 font-bold">
                                        Subscribed
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => checkout(Number(item.price), userId)}
                                        className="bg-[#3d5fc4] text-white rounded-md text-base uppercase w-24 py-2 font-bold"
                                    >
                                        Start
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
export default Payment;