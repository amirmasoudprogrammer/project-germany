"use client"
import React, {useEffect} from 'react';
import {CiSearch} from "react-icons/ci";
import Image from "next/image";
import Footer from "@/Component/client/layout/Footer";
import useNameOrderStore from "@/stores/useNameOrderStore";
import {FaArrowDown} from "react-icons/fa";

function OrdersPage(props) {
    const setStep = useNameOrderStore(state => state.setStep);
    useEffect(() => {
        setStep("order registration")
    }, [])
    return (
        <>

            <div className=" bg-white ">
                <div className="container m-auto">
                    <div className="flex items-center justify-around mt-10">
                        <div>
                            <input type="checkbox" id="Website"/>
                            <label htmlFor="Website" className="text-[20px] ml-3 font-bold text-black">Website</label>

                        </div>
                        <div className="flex items-center justify-center">
                            <input type="checkbox" id="App"/>
                            <label htmlFor="App" className="text-[20px] ml-3 font-bold text-black">App</label>
                        </div>
                    </div>

                    <div
                        className="w-[312px] h-[35px] md:w-[674px] mt-5 md:mt-0 md:h-[219px] flex items-center justify-center m-auto">
                        <select name="" id="" className="w-[674px] text-black h-[57px] border border-slate-300">
                            <option value="">E-commerce</option>
                            <option value="">Corporate</option>
                            <option value="">Personal</option>
                            <option value="">News/Media</option>
                            <option value="">Blog</option>
                            <option value="">Educational</option>
                            <option value="">Portfolio</option>
                            <option value="">Service-based</option>
                            <option value="">Forum/Community</option>
                            <option value="">Multipurpose</option>
                        </select>
                    </div>

                    <div className="flex items-center justify-center flex-col md:flex-row mb-10 mt-10">
                        <div className=" flex items-start justify-start flex-col">
                            <span className="text-[19px] text-black font-bold mb-5">Description</span>
                            <textarea name="" id="" cols="30" rows="10"
                                      className="text-black pl-3 pt-3 border border-[#C2BB87] rounded-lg w-[312px] h-[148px] md:w-[548px] md:h-[248px]"></textarea>
                        </div>
                        <div
                            className="md:ml-10 flex  md:items-start justify-center md:justify-start flex-col mt-5 md:mt-0">
                            <span className="text-[19px] text-black font-bold mb-5">File upload</span>

                            <label
                                htmlFor="fileUpload"
                                className="w-[312px] h-[148px] md:w-[548px] md:h-[248px] border border-[#C2BB87] rounded-lg flex items-center justify-center cursor-pointer bg-white hover:bg-gray-100 transition"
                            >
                                <FaArrowDown className="text-3xl text-[#C2BB87]"/>
                            </label>

                            <input
                                type="file"
                                id="fileUpload"
                                className="hidden"
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between flex-col md:flex-row mb-16 mt-28">
                        <div className=" flex items-center flex-col justify-start md:ml-16">
                            <div
                                className="w-[312px] md:w-[548px] h-[48px] md:h-[48px] rounded-lg  bg-white border border-slate-300 flex items-center justify-center">
                              <span className="text-black  ml-2">
                                <CiSearch/>
                              </span>
                                <input type="text" className="w-[312px] md:w-[548px] text-black outline-0 pl-3"/>
                            </div>
                            <div className="flex text-black items-center justify-start mr-auto mt-5 mb-5">
                                <span className="text-[34px] font-bold mr-4"> Have ui?</span>
                                <input type="checkbox"/>
                            </div>
                            <input type="text"
                                   className="w-[312px] md:w-[548px] h-[48px] text-black outline-0 pl-3 rounded-lg  bg-white border border-slate-300"
                                   placeholder="https://translate.google.com/?hl=fa"/>
                            <div
                                className="w-[312px] md:w-[215px] flex items-center justify-center font-bold  h-[48px] border border-slate-300 ml-auto mt-5 bg-[#9D915F] rounded">
                                <button>
                                    Submit
                                </button>
                            </div>
                        </div>
                        <div>
                            <Image src="/image/imageor.png" alt="logo" className="" width={401} height={303}/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default OrdersPage;