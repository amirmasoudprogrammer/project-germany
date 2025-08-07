"use client"
import React from 'react';
import LayoutOrder from "@/Component/client/module/LayoutOrder";
import Image from "next/image";
import {CiCircleCheck} from "react-icons/ci";
import {CiShoppingCart} from "react-icons/ci";
import useStepStore from "@/stores/useStepStore";
import {useRouter} from "next/navigation";


function CustomerCart(props) {
    const {step, setStep} = useStepStore();
    const router = useRouter()


    const startButton = () => {
        setStep(step + 1)
        router.push("/cart/OrderData")
    }



        return (
        <div className="bg-white min-h-screen w-full flex items-center flex-col">
            <div className="bg-white ">
                <LayoutOrder/>
            </div>


            <div
                className="container m-auto w-full h-full mt-20 flex items-center md:items-start flex-col justify-center md:justify-start ">
                <div className=" md:ml-48 w-[250px] md:w-auto">
                    <span className="font-bold text-black  text-[12px] md:text-[14px] ">
                      Almost there. Suitable extensions for your perfect website!
                    </span>
                </div>
                <div className="flex items-center justify-between flex-col">
                    <div
                        className="w-[312px] md:w-[938px] h-[486px] border border-slate-300 md:ml-36 mt-5 mb-5 bg-white rounded-xl">
                        <Image src="/image/i12.png" alt="logo" className="w-[48px] h-[48px] mt-10 ml-5 md:ml-10"
                               width={48}
                               height={48}/>
                        <div className="w-[280px] md:w-[542px] h-[72px] ml-5 md:ml-10  mt-5">
                            <span className="text-[12px] md:text-[20px] text-black">Website warning protection of the IT-Recht Kanzlei All-round legal protection for your website</span>
                        </div>
                        <p className="text-[12px] w-[254px] ml-5 md:text-[16px] md:ml-10 text-black font-thin">Just 1
                            click, and your website benefits from professional legal protection:</p>
                        <div className="mt-10">
                            <div className="flex items-center justify-start md:ml-10 text-[12px] md:text-[16px] ml-5">
                                <span className="text-[#2CBEE3] text-[20px]"> <CiCircleCheck/></span>
                                <span className="text-black ml-2">Imprint and Privacy Policy</span>
                            </div>
                            <div className="flex items-center justify-start md:ml-10 text-[12px] md:text-[16px] ml-5">
                                <span className="text-[#2CBEE3] text-[20px]"> <CiCircleCheck/></span>
                                <span className="text-black ml-2">Free update service for automatic updates</span>
                            </div>
                            <div className="flex items-center justify-start md:ml-10 text-[12px] md:text-[16px] ml-5">
                                <span className="text-[#2CBEE3] text-[20px]"> <CiCircleCheck/></span>
                                <span
                                    className="text-black ml-2">Assumption of liability in the event of a warning</span>
                            </div>
                        </div>
                        <div className="ml-10 md:ml-14 mt-5">
                            <span
                                className="text-black font-thin text-[12px] md:text-[15px]">Try it free for 1 month!</span>
                            <p className="text-black text-[12px] md:text-[20px] mt-2">7,- €/Month</p>
                        </div>
                        <div onClick={startButton} className="w-[280px] md:w-[126px] flex items-center cursor-pointer justify-center h-[32px] bg-[#20B4C2] m-auto mt-10 md:mt-auto  md:ml-auto md:mr-10 rounded-full">
                            <p className="text-[25px]"><CiShoppingCart/></p>
                            <span className="ml-2">Choose</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-center flex-col md:flex-row md:ml-36">
                        <div className="w-[312px] md:w-[453px] h-[448px] md:h-[453px] border border-slate-300 rounded">
                            <Image src="/image/i1.png" alt="logo" className="w-[48px] h-[48px] mt-10 ml-5 md:ml-10"
                                   width={48} height={48}/>
                            <div className="ml-3 md:ml-8 mt-5">
                                <span className="text-[14px] text-black">rankingCoach Advanced</span>
                                <p className="text-black font-bold w-[280px] text-start"> More visibility ontheInternetthanks to AI
                                </p>
                            </div>
                            <div className="w-[280px] md:w-[347px] h-[63px] ml-3 md:ml-8 mt-8">
                                <p className="text-[#090909] text-[14px]">Improve your search engine ranking step by step while saving time and resources. Digital marketing on a new level  without an expensive agency.</p>
                            </div>
                            <p className="ml-3 md:ml-8 md:mt-5 mt-10 text-[#000000]">Try it free for 1 month!</p>
                            <div className="ml-3 md:ml-8 flex items-center text-black mt-4">
                                <p className="text-[12px] flex items-center justify-center bg-[#EDE9C4] rounded w-[69px] h-[24px]">Save 25%</p>
                                <p className="text-[#1B1F26B8] ml-5">12 €/month6</p>
                            </div>
                            <div className="flex items-center justify-between mt-5">
                                <span className="ml-5 text-[34px] text-black">6</span>
                                <div className="w-[126px] flex items-center justify-center mr-5 h-[32px] bg-[#20B4C2] rounded-full ml-auto">
                                    <span className="text-[25px]"><CiShoppingCart /></span>
                                    <p className="font-bold ml-2">Choose</p>
                                </div>
                            </div>
                        </div>
                        <div className="md:ml-5 mt-3 md:mt-0 w-[312px] md:w-[453px] h-[448px] md:h-[453px] border border-slate-300 rounded">
                            <Image src="/image/i1.png" alt="logo" className="w-[48px] h-[48px] mt-10 ml-5 md:ml-10"
                                   width={48} height={48}/>
                            <div className="ml-3 md:ml-8 mt-5">
                                <span className="text-[14px] text-black">rankingCoach Advanced</span>
                                <p className="text-black font-bold w-[280px] text-start"> More visibility ontheInternetthanks to AI
                                </p>
                            </div>
                            <div className="w-[280px] md:w-[347px] h-[63px] ml-3 md:ml-8 mt-8">
                                <p className="text-[#090909] text-[14px]">Improve your search engine ranking step by step while saving time and resources. Digital marketing on a new level  without an expensive agency.</p>
                            </div>
                            <p className="ml-3 md:ml-8 md:mt-5 mt-10 text-[#000000]">Try it free for 1 month!</p>
                            <div className="ml-3 md:ml-8 flex items-center text-black mt-4">
                                <p className="text-[12px] flex items-center justify-center bg-[#EDE9C4] rounded w-[69px] h-[24px]">Save 25%</p>
                                <p className="text-[#1B1F26B8] ml-5">12 €/month6</p>
                            </div>
                            <div className="flex items-center justify-between mt-5">
                                <span className="ml-5 text-[34px] text-black">6</span>
                                <div className="w-[126px] flex items-center justify-center mr-5 h-[32px] bg-[#20B4C2] rounded-full ml-auto">
                                    <span className="text-[25px]"><CiShoppingCart /></span>
                                    <p className="font-bold ml-2">Choose</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default CustomerCart;