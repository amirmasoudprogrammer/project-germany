import React from 'react';
import LayoutOrder from "@/Component/client/module/LayoutOrder";
import Link from "next/link";
import {MdDelete} from "react-icons/md";
import Image from "next/image";


function OrderData(props) {
    return (
        <div className="bg-white min-h-screen w-full flex items-center flex-col">
            <div className="bg-white ">
                <LayoutOrder/>
            </div>

            <div
                className="container m-auto w-full h-full mt-20 flex items-center md:items-start flex-col justify-center md:justify-start ">
                <div className=" md:ml-48 w-[250px] md:w-auto text-center md:text-start mb-5 md:mb-0">
                    <span className="font-bold text-black  text-[12px] md:text-[34px] ">
                  Your shopping cart
                </span>
                    <p className='text-[16px] md:text-[24px] mt-5 text-[#1B1F26B8]'>
                        Millions of customers rely on solutions from IONOS.
                    </p>
                </div>
            </div>
            <div className="flex items-center justify-between flex-col md:flex-row mb-10">
                <div className="w-[312px] h-[326px] md:w-[636px] md:h-[340px] border border-slate-300 rounded">
                    <div className="relative flex items-center justify-center">
                        <Image src="/image/Rectangle 350.svg" alt="logo"
                               className="w-[312px] h-[72px] md:w-[636px] md:h-[85px] -mt-4" width={636} height={85}/>
                        <span className="text-[14px] md:text-[24px] absolute top-2 md:top-3 left-6">MyWebsite Now | Starter</span>
                    </div>
                    <div className="pl-5 text-[#1B1F26B8] text-[20px] mt-2">
                        <span>18,- €1,- €</span>
                    </div>
                    <div className="flex items-start text-[13px] flex-col justify-start text-[#000000] pl-5 mt-1">
                        <p>1,- €/month for 12 months</p>
                        <p>Afterwards 18,- €/month</p>
                        <p>30-day money-back guarantee</p>
                        <p>Contract details</p>
                        <p>Minimum contract period 12 months</p>
                        <p>Billing Period: 1 month in advance</p>
                        <p>Automatically renews</p>
                    </div>
                    <div className="mt-5 border-t border-t-black p-3  flex items-center justify-between text-black">
                        <Link href="" className="text-[14px] font-bold">Add more domains</Link>
                        <p className="cursor-pointer">
                            <MdDelete/>
                        </p>
                    </div>

                </div>
                <div className="w-[312px] md:ml-5 mt-10 md:-mt-5 h-[316px] md:w-[288px] md:h-[340px] border border-slate-300 rounded-xl">
                    <div className="relative flex items-center justify-center">
                        <Image src="/image/Rectangle 350.svg" alt="logo" className="w-[312px] md:w-[288px] md:h-[72px] md:-mt-5"
                               width={288} height={72}/>
                        <span
                            className="text-[14px] md:text-[20px] absolute top-2 md:top-1 left-6">Your selection</span>
                    </div>
                    <div className="w-[240px] h-[157px] mt-10  m-auto">
                        <span className="text-black">1 item</span>
                        <p className="text-[10px] text-[#34C759]">You save 36,- € with this order.</p>
                        <div className="flex items-center justify-between text-black mt-5">
                            <span>Total</span>
                            <p className="text-[#1B1F26B8]">1,- €</p>
                        </div>
                        <p className="text-[8px] text-[#1B1F26B8] flex items-center justify-end mt-2">(incl. 19% Tax,
                            including VAT: 0,16 €)</p>
                        <div className="flex items-center justify-center mt-5">
                            <div
                                className="mr-2 w-[112px] h-[24px] border border-slate-400 rounded-full flex items-center justify-center text-black">play
                            </div>
                            <div
                                className="w-[112px] h-[24px] border border-slate-400 rounded-full flex items-center justify-center text-black">play
                            </div>
                        </div>
                        <div className="flex items-center justify-center mt-2">
                            <span className="w-[200px] h-[1px] bg-[#1B1F26B8] flex mr-5"></span>
                            <p className="text-black">or</p>
                            <span className="w-[200px] h-[1px] bg-[#1B1F26B8] flex ml-5"></span>
                        </div>
                        <div className="w-[240px] h-[24px] bg-[#20B4C2] flex items-center justify-center rounded">
                            <span>Pay</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default OrderData;