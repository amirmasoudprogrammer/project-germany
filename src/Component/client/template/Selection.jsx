"use client"
import React, {useEffect} from 'react';
import LayoutOrder from "@/Component/client/module/LayoutOrder";
import { CiSearch } from "react-icons/ci";
import useStepStore from "@/stores/useStepStore";
import {useRouter} from "next/navigation";


function Selection(props) {
    const {step, setStep} = useStepStore();
    const router = useRouter()


  const startButton = () => {
      setStep(step + 1)
      router.push("/cart/ShoppingCart")
  }
    return (
        <div className="bg-white min-h-screen w-full flex items-center flex-col">
            <div className="bg-white ">
                <LayoutOrder/>
            </div>

            <div className="container m-auto w-full h-full mt-20 flex items-center md:items-start flex-col justify-center md:justify-start ">
                <div className=" md:ml-48 w-[250px] md:w-auto">
                    <span className="font-bold text-black  text-[12px] md:text-[14px] ">
                    Secure your offer quickly: Select your domain now (free for 12 months)
                </span>
                </div>
                <div className=" md:ml-48 mt-5 rounded-xl w-[312px] md:w-[632px] h-[271px] md:h-[290px] border border-slate-300 md:p-5 p-3">
                    <div className=" flex items-center">
                        <input type="radio" name="radio" className="w-[16px] h-[16px] rounded-full"/>
                        <label htmlFor="" className="text-black font-bold text-[16px] ml-2">Search without A</label>
                    </div>
                    <div className=" flex items-center mt-2">
                        <input type="radio" name="radio" className="w-[16px] h-[16px] rounded-full"/>
                        <label htmlFor="" className="text-black font-bold text-[16px] ml-2">Generate domain names with
                            AI</label>
                    </div>
                    <div className="flex items-center justify-between mt-10">
                        <span className="text-[#1B1F26B8] text-[11px]">Free endings: de, eu, com, net, org, info, me, biz, online</span>
                        <div className="hidden md:flex w-[101px] h-[34px] bg-[#20B4C2] rounded-lg  items-center justify-center">
                            <span className="text-[20px]"><CiSearch /></span>
                            <span className="ml-2">Search</span>
                        </div>
                    </div>
                    <input type="text" className="hidden md:flex  md:w-[600px] h-[34px] mt-5 mb-5 outline-0 border border-slate-300 rounded-lg text-black"/>
                    <div className="flex md:hidden w-[288px] mt-5 h-[34px] border border-slate-300 justify-between">
                        <div className="flex items-center justify-between w-full">
                            <input type="text" className="w-[240px] outline-0 border-0 text-black"/>
                            <span className="flex items-center justify-center rounded-lg text-[20px] w-[34px] h-[34px] bg-[#20B4C2] text-black"><CiSearch /></span>
                        </div>
                    </div>
                    <button onClick={startButton} className="w-[180px] text-[14px] h-[26px] md:w-[228px] md:h-[48px] rounded bg-[#20B4C2] mt-5 md:mt-0 md:rounded-lg">Continue without domain</button>
                </div>
            </div>
        </div>
    );
}

export default Selection;