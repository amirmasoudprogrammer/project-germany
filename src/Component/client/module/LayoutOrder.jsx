"use client";

import React from "react";
import {motion} from "framer-motion";
import {CiCircleCheck, CiShoppingCart, CiCreditCard1} from "react-icons/ci";
import {FaTruck} from "react-icons/fa";
import useStepStore from "@/stores/useStepStore";
import Link from "next/link";
import MobileStepper from "@/Component/client/module/MobileStepper";

const steps = [
    {id: 1, icon: <CiCircleCheck size={24}/>, label: "Your selection", route: "/cart/selection"},
    {id: 2, icon: <CiShoppingCart size={24}/>, label: "Shopping cart", route: "/cart/ShoppingCart"},
    {id: 3, icon: <CiCreditCard1 size={24}/>, label: "Customer cart", route: "/cart/CustomerCart"},
    {id: 4, icon: <FaTruck size={22}/>, label: "Order data", route: "/cart/OrderData"},
    {id: 5, icon: <CiCreditCard1 size={24}/>, label: "Payment details", route: "/cart/PaymentDetails"},
];

const LayoutOrder = () => {
    const {step, setStep} = useStepStore();

    const handleClick = (id) => {
        setStep(id);
    };
    return (
        <>
            <div className="relative hidden md:block w-[940px] mx-auto px-6 py-12">
                {/* Progress Line */}
                <div className="absolute top-20 left-0 right-0 h-1 bg-gray-300 rounded">
                    <motion.div
                        className="h-1 bg-[#2CBEE3] rounded"
                        initial={{width: 0}}
                        animate={{width: `${(step - 1) / (steps.length - 1) * 100}%`}}
                        transition={{duration: 0.4}}
                    />
                </div>

                {/* Steps */}
                <div className="flex justify-between items-center relative z-10">
                    {steps.map((item, index) => {
                        const isActive = step >= item.id;
                        const isCurrent = step === item.id;

                        return (
                            <Link href={item.route} key={item.id} onClick={() => handleClick(item.id)}
                                  className="flex flex-col items-center cursor-pointer group">
                                <motion.div
                                    className={`rounded-full shadow-md flex items-center justify-center w-14 h-14 transition-all ${
                                        isActive ? "bg-[#E0F7FD]" : "bg-white"}`} animate={{
                                    scale: isCurrent ? 1.2 : 1,
                                    boxShadow: isActive ? "0 0 12px rgba(44, 190, 227, 0.4)" : "0 2px 6px rgba(0,0,0,0.1)",
                                }}>
                            <span
                                className={`transition-colors text-xl ${isActive ? "text-[#2CBEE3]" : "text-gray-400"}`}>
                  {item.icon}
                </span>
                                </motion.div>

                                <span
                                    className={`text-sm mt-3 font-semibold transition-colors text-center ${isActive ? "text-[#2CBEE3]" : "text-gray-400 group-hover:text-gray-600"}`}>
                            {item.label}
                             </span>
                            </Link>
                        );
                    })}
                </div>
            </div>
            <MobileStepper
                steps={steps}
                currentStep={step}
                onBack={() => setStep(step > 1 ? step - 1 : step)}
                onNext={() => setStep(step < steps.length ? step + 1 : step)}
            />        </>

    );
};

export default LayoutOrder;

