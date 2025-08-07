import React from 'react';
import LayoutOrder from "@/Component/client/module/LayoutOrder";
import Image from "next/image";
import Form from "next/form";

function PaymentDetails(props) {
    return (
        <div className="bg-white min-h-screen w-full flex items-center flex-col">
            <div className="bg-white ">
                <LayoutOrder/>
            </div>

            <div className="container m-auto w-full h-full mt-2 flex items-center md:items-start flex-col justify-center md:justify-start ">
                <div className=" md:ml-48 w-[250px] md:w-auto">
                    <span className="font-bold text-black  text-[12px] md:text-[34px] ">
                 Information
                </span>
                </div>
            </div>

            <div className="flex items-start justify-between flex-col md:flex-row mt-5">
                <div className="w-[312px] md:w-[636px] h-auto border border-slate-300 p-5">
                    <Form action="" className="mb-5">
                        <div className="flex items-start justify-center flex-col">
                            <span className="text-black font-bold mb-2">gender</span>
                            <div className="flex items-center">
                                <div className="flex items-center space-x-6 text-black mt-4">
                                    <div className="flex items-center">
                                        <input type="radio" id="Mrs" name="radio" className="mr-2 accent-[#C2BB87]"/>
                                        <label htmlFor="Mrs" className="text-[16px] font-medium">Mrs</label>
                                    </div>

                                    <div className="flex items-center">
                                        <input type="radio" id="Mr" name="radio" className="mr-2 accent-[#C2BB87]"/>
                                        <label htmlFor="Mr" className="text-[16px] font-medium">Mr</label>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row items-start justify-center">
                            <div className="flex items-start flex-col mt-10 mr-5">
                                <label className="text-black" htmlFor="">Name*</label>
                                <input type=""
                                       className="w-[278px] mt-2 h-[32px] border border-slate-500 outline-0 rounded text-black"/>
                            </div>
                            <div className="flex items-start flex-col mt-10 ">
                                <label className="text-black" htmlFor="">Last name*</label>
                                <input type=""
                                       className="w-[278px] mt-2 h-[32px] border border-slate-500 outline-0 rounded text-black"/>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row items-start justify-center ">
                            <div className="flex items-start flex-col mt-10 mr-5">
                                <label className="text-black" htmlFor="">Nationality*</label>
                                <input type=""
                                       className="w-[278px] mt-2 h-[32px] border border-slate-500 outline-0 rounded text-black"/>
                            </div>
                            <div className="flex items-start flex-col mt-10">
                                <label className="text-black" htmlFor="">Country*</label>
                                <select
                                    className="w-[278px] mt-2 h-[32px] border border-slate-500 outline-0 rounded text-black">
                                    <option value="">Country*</option>
                                    <option value="">Country*</option>
                                    <option value="">Country*</option>
                                    <option value="">Country*</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex flex-col  items-start flex-col mt-10 md:ml-2">
                            <label className="text-black" htmlFor="">Address</label>
                            <input type=""
                                   className="w-[280px] md:w-[582px] mt-2 h-[32px] border border-slate-500 outline-0 rounded text-black"/>
                        </div>
                        <div className="flex flex-col  items-start flex-col mt-10 md:ml-2">
                            <label className="text-black" htmlFor="">Workplace address</label>
                            <input type=""
                                   className="w-[280px] md:w-[582px] mt-2 h-[32px] border border-slate-500 outline-0 rounded text-black"/>
                        </div>
                        <div className="flex flex-col md:flex-row items-start justify-center">
                            <div className="flex items-start flex-col mt-10 mr-5">
                                <label className="text-black" htmlFor="">Postal code*</label>
                                <input type=""
                                       className="w-[278px] mt-2 h-[32px] border border-slate-500 outline-0 rounded text-black"/>
                            </div>
                            <div className="flex items-start flex-col mt-10">
                                <label className="text-black" htmlFor="">Place*</label>
                                <input type=""
                                       className="w-[278px] mt-2 h-[32px] border border-slate-500 outline-0 rounded text-black"/>
                            </div>
                        </div>
                        <div className="flex flex-col  items-start flex-col mt-10 md:ml-2">
                            <label className="text-black" htmlFor="">Email address*</label>
                            <input type="" className="w-[280px] md:w-[582px] mt-2 h-[32px] border border-slate-500 outline-0 rounded text-black"/>
                        </div>
                        <div className="flex flex-col md:flex-row items-start justify-center">
                            <div className="flex items-start flex-col mt-10 mr-5">
                                <label className="text-black" htmlFor="">Country code*</label>
                                <select
                                    className="w-[278px] mt-2 h-[32px] border border-slate-500 outline-0 rounded text-black">
                                    <option value="">Country*</option>
                                    <option value="">Country*</option>
                                    <option value="">Country*</option>
                                    <option value="">Country*</option>
                                </select>
                            </div>
                            <div className="flex items-start flex-col mt-10">
                                <label className="text-black" htmlFor="">Phone number*</label>
                                <input type=""
                                       className="w-[278px] mt-2 h-[32px] border border-slate-500 outline-0 rounded text-black"/>
                            </div>
                        </div>
                        <p className="text-[20px] text-black mt-5 font-bold">Choose a password for the IONOS Control
                            Center.</p>
                        <div className="flex flex-col items-start flex-col mt-10">
                            <label className="text-black" htmlFor="">password*</label>
                            <input type="password"
                                   className="w-[280px] md:w-[572px] mt-2 h-[32px] border border-slate-500 outline-0 rounded text-black"/>
                        </div>
                        <div className="flex flex-col md:flex-row items-end justify-end md:mr-5">
                            <button className="w-[280px] md:w-[180px] h-[28px] bg-[#20B4C2] mt-5 rounded-lg ">Pay</button>

                        </div>
                    </Form>
                </div>
                <div className="flex items-center justify-between flex-col md:h-[980px] ">
                    <div className="w-[312px] md:ml-5 mt-10 md:-mt-0 h-[316px] md:w-[288px] md:h-[340px] border border-slate-300 rounded-xl">
                        <div className="relative flex items-center justify-center">
                            <Image src="/image/Rectangle 350.svg" alt="logo"
                                   className="w-[312px] md:w-[288px] md:h-[72px] md:-mt-5"
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
                            <p className="text-[8px] text-[#1B1F26B8] flex items-center justify-end mt-2">(incl. 19%
                                Tax,
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
                    <div className="ml-5">
                        <Image src="/image/Group 1431.svg" alt="logo" className="" width={288} height={251}/>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default PaymentDetails;