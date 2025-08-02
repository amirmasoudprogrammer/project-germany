import React from 'react';
import LayoutOrder from "@/Component/client/module/LayoutOrder";
import {CiSearch} from "react-icons/ci";
import {CiShoppingCart} from "react-icons/ci";



function ShopingCart(props) {
    return (
        <div className="bg-white min-h-screen w-full flex items-center flex-col">
            <div className="bg-white ">
                <LayoutOrder/>
            </div>


            <div className="flex items-start justify-start w-[312px] mt-5 md:w-[938px] h-[52px] bg-[#EBEDF0] rounded">
                <span className="text-black text-[10px] md:text-[16px] flex items-center mt-5 ml-2 md:mt-0 md:ml-0 justify-center md:pl-5 md:pt-3 md:pb-1"><strong className="text-red-600">google.comhlfais-already-taken </strong> is invalid This domain is invalid.</span>
            </div>

            <div className="container m-auto w-full h-full mt-20 flex items-center md:items-start flex-col justify-center md:justify-start ">
                <div className=" md:ml-48 w-[250px] md:w-auto">
                    <span className="font-bold text-black  text-[12px] md:text-[14px] ">
                    Secure your offer quickly: Select your domain now (free for 12 months)
                </span>
                </div>
                <div
                    className=" md:ml-48 mt-5 rounded-xl w-[312px] md:w-[632px] h-[271px] md:h-[290px] border border-slate-300 md:p-5 p-3">
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
                        <div
                            className="hidden md:flex w-[101px] h-[34px] bg-[#20B4C2] rounded-lg  items-center justify-center">
                            <span className="text-[20px]"><CiSearch/></span>
                            <span className="ml-2">Search</span>
                        </div>
                    </div>
                    <input type="text"
                           className="hidden md:flex  md:w-[600px] h-[34px] mt-5 mb-5 outline-0 border border-slate-300 rounded-lg text-black"/>
                    <div className="flex md:hidden w-[288px] mt-5 h-[34px] border border-slate-300 justify-between">
                        <div className="flex items-center justify-between w-full">
                            <input type="text" className="w-[240px] outline-0 border-0 text-black"/>
                            <span
                                className="flex items-center justify-center rounded-lg text-[20px] w-[34px] h-[34px] bg-[#20B4C2] text-black"><CiSearch/></span>
                        </div>
                    </div>
                    <button
                        className="w-[180px] text-[14px] h-[26px] md:w-[228px] h-[48px] mt-5 md:mt-0 rounded bg-[#20B4C2]  md:rounded-lg">Continue
                        without domain
                    </button>
                </div>
            </div>

            <div className="mr-auto mt-10 ">
                <span className="ml-8 md:ml-64 text-black font-bold ">Other recommended domains</span>

                <div className="hidden md:block w-[938px] h-[640px] md:ml-64 mb-10 mt-10 rounded-xl">
                    <div
                        className="flex items-center justify-between rounded-xl text-black h-[128px] border border-slate-300">
                        <span className="ml-5">Google.Life</span>
                        <div
                            className="w-[116px] h-[48px] text-white   flex items-center bg-[#0088FF] justify-center rounded-full">
                            <span>Choose</span>
                            <CiShoppingCart/>

                        </div>
                        <div className="flex items-center flex-col justify-center mr-5">
                            <div className="flex">
                                <div
                                    className="w-[69px] text-[14px] mr-5 h-[24px] bg-[#FFCC00] flex items-center justify-center">
                                    Save 95%
                                </div>
                                <span className="text-[12px] text-[#5B5E63]">3,75 €</span>
                            </div>
                            <span className="text-[24px] text-[#5B5E63]">0,21 €/Month</span>
                            <p className="text-[12px] text-[#5B5E63] ml-auto">for 12 months</p>
                        </div>
                    </div>
                    <div
                        className="flex items-center justify-between rounded-xl text-black h-[128px] border border-slate-300">
                        <span className="ml-5">Google.Life</span>
                        <div
                            className="w-[116px] h-[48px] text-white   flex items-center bg-[#0088FF] justify-center rounded-full">
                            <span>Choose</span>
                            <CiShoppingCart/>

                        </div>
                        <div className="flex items-center flex-col justify-center mr-5">
                            <div className="flex">
                                <div
                                    className="w-[69px] text-[14px] mr-5 h-[24px] bg-[#FFCC00] flex items-center justify-center">
                                    Save 95%
                                </div>
                                <span className="text-[12px] text-[#5B5E63]">3,75 €</span>
                            </div>
                            <span className="text-[24px] text-[#5B5E63]">0,21 €/Month</span>
                            <p className="text-[12px] text-[#5B5E63] ml-auto">for 12 months</p>
                        </div>
                    </div>
                    <div
                        className="flex items-center justify-between rounded-xl text-black h-[128px] border border-slate-300">
                        <span className="ml-5">Google.Life</span>
                        <div
                            className="w-[116px] h-[48px] text-white   flex items-center bg-[#0088FF] justify-center rounded-full">
                            <span>Choose</span>
                            <CiShoppingCart/>

                        </div>
                        <div className="flex items-center flex-col justify-center mr-5">
                            <div className="flex">
                                <div
                                    className="w-[69px] text-[14px] mr-5 h-[24px] bg-[#FFCC00] flex items-center justify-center">
                                    Save 95%
                                </div>
                                <span className="text-[12px] text-[#5B5E63]">3,75 €</span>
                            </div>
                            <span className="text-[24px] text-[#5B5E63]">0,21 €/Month</span>
                            <p className="text-[12px] text-[#5B5E63] ml-auto">for 12 months</p>
                        </div>
                    </div>
                    <div
                        className="flex items-center justify-between rounded-xl text-black h-[128px] border border-slate-300">
                        <span className="ml-5">Google.Life</span>
                        <div
                            className="w-[116px] h-[48px] text-white   flex items-center bg-[#0088FF] justify-center rounded-full">
                            <span>Choose</span>
                            <CiShoppingCart/>

                        </div>
                        <div className="flex items-center flex-col justify-center mr-5">
                            <div className="flex">
                                <div
                                    className="w-[69px] text-[14px] mr-5 h-[24px] bg-[#FFCC00] flex items-center justify-center">
                                    Save 95%
                                </div>
                                <span className="text-[12px] text-[#5B5E63]">3,75 €</span>
                            </div>
                            <span className="text-[24px] text-[#5B5E63]">0,21 €/Month</span>
                            <p className="text-[12px] text-[#5B5E63] ml-auto">for 12 months</p>
                        </div>
                    </div>
                    <div
                        className="flex items-center justify-between rounded-xl text-black h-[128px] border border-slate-300">
                        <span className="ml-5">Google.Life</span>
                        <div
                            className="w-[116px] h-[48px] text-white   flex items-center bg-[#0088FF] justify-center rounded-full">
                            <span>Choose</span>
                            <CiShoppingCart/>

                        </div>
                        <div className="flex items-center flex-col justify-center mr-5">
                            <div className="flex">
                                <div
                                    className="w-[69px] text-[14px] mr-5 h-[24px] bg-[#FFCC00] flex items-center justify-center">
                                    Save 95%
                                </div>
                                <span className="text-[12px] text-[#5B5E63]">3,75 €</span>
                            </div>
                            <span className="text-[24px] text-[#5B5E63]">0,21 €/Month</span>
                            <p className="text-[12px] text-[#5B5E63] ml-auto">for 12 months</p>
                        </div>
                    </div>
                </div>

                <div className="w-[312px] h-[494px] block md:hidden mt-5">
                    <div className="w-[312px] flex justify-between h-[98px] border border-slate-300 ml-5 rounded-lg mt-2">
                        <div className="mt-2 ml-2">
                            <span className="text-black text-[14px] font-bold">Google.Life</span>
                        </div>
                        <div className="text-black flex flex-col items-end mt-2 mr-2">
                            <span className="text-[#5B5E63] text-[11px]">3,75 €</span>
                            <p className="mt-2">0,21 €/Month</p>
                            <div className="flex items-center">
                                <p className="w-[63px] text-black mr-5 text-[12px] h-[24px] bg-[#FFCC00] flex items-center justify-center">
                                    Save 95%
                                </p>
                                <span className="text-[13px] mr-2 text-[#5B5E63]">for 12 months</span>

                            </div>
                        </div>
                        <button className="w-[40px] h-[97px] text-[30px] flex items-center justify-center bg-[#0088FF] rounded-r-xl"><CiShoppingCart /></button>
                    </div>
                    <div className="w-[312px] flex justify-between h-[98px] border border-slate-300 ml-5 rounded-lg mt-2">
                        <div className="mt-2 ml-2">
                            <span className="text-black text-[14px] font-bold">Google.Life</span>
                        </div>
                        <div className="text-black flex flex-col items-end mt-2 mr-2">
                            <span className="text-[#5B5E63] text-[11px]">3,75 €</span>
                            <p className="mt-2">0,21 €/Month</p>
                            <div className="flex items-center">
                                <p className="w-[63px] text-black mr-5 text-[12px] h-[24px] bg-[#FFCC00] flex items-center justify-center">
                                    Save 95%
                                </p>
                                <span className="text-[13px] mr-2 text-[#5B5E63]">for 12 months</span>

                            </div>
                        </div>
                        <button className="w-[40px] h-[97px] text-[30px] flex items-center justify-center bg-[#0088FF] rounded-r-xl"><CiShoppingCart /></button>
                    </div>
                    <div className="w-[312px] flex justify-between h-[98px] border border-slate-300 ml-5 rounded-lg mt-2">
                        <div className="mt-2 ml-2">
                            <span className="text-black text-[14px] font-bold">Google.Life</span>
                        </div>
                        <div className="text-black flex flex-col items-end mt-2 mr-2">
                            <span className="text-[#5B5E63] text-[11px]">3,75 €</span>
                            <p className="mt-2">0,21 €/Month</p>
                            <div className="flex items-center">
                                <p className="w-[63px] text-black mr-5 text-[12px] h-[24px] bg-[#FFCC00] flex items-center justify-center">
                                    Save 95%
                                </p>
                                <span className="text-[13px] mr-2 text-[#5B5E63]">for 12 months</span>

                            </div>
                        </div>
                        <button className="w-[40px] h-[97px] text-[30px] flex items-center justify-center bg-[#0088FF] rounded-r-xl"><CiShoppingCart /></button>
                    </div>
                    <div className="w-[312px] flex justify-between h-[98px] border border-slate-300 ml-5 rounded-lg mt-2">
                        <div className="mt-2 ml-2">
                            <span className="text-black text-[14px] font-bold">Google.Life</span>
                        </div>
                        <div className="text-black flex flex-col items-end mt-2 mr-2">
                            <span className="text-[#5B5E63] text-[11px]">3,75 €</span>
                            <p className="mt-2">0,21 €/Month</p>
                            <div className="flex items-center">
                                <p className="w-[63px] text-black mr-5 text-[12px] h-[24px] bg-[#FFCC00] flex items-center justify-center">
                                    Save 95%
                                </p>
                                <span className="text-[13px] mr-2 text-[#5B5E63]">for 12 months</span>

                            </div>
                        </div>
                        <button className="w-[40px] h-[97px] text-[30px] flex items-center justify-center bg-[#0088FF] rounded-r-xl"><CiShoppingCart /></button>
                    </div>

                </div>
            </div>

        </div>

    );
}

export default ShopingCart;