import React from 'react';
import Image from "next/image";
import {FaHeadphones, FaStar} from "react-icons/fa";
import {FaRegHeart} from "react-icons/fa6";

function DetailProductItem(props) {
    return (
        <div className="flex items-center  justify-between bg-white ">
            <div className="container m-auto flex items-center flex-col justify-between   bg-white">
                <div>
                    <h3 className="flex items-center justify-center text-black text-[35px] font-bold">Detail
                        Products</h3>
                </div>
                <div className="flex items-center justify-between md:flex-row flex-col mt-14">
                    <div className="flex items-center flex-col justify-between md:mr-10">
                        <div className="flex items-center justify-center">
                            <Image src="/image/image3.png" alt="logo"
                                   className="w-[312px] h-[200px] m-auto md:w-[612px] md:h-[494px]  rounded-xl"
                                   width={612}
                                   height={494}/>
                        </div>
                        <div className="mt-5 flex items-center ">
                            <div
                                className="bg-[#086B68] w-[144px] h-[32px] md:w-[278px]  md:h-[48px] border border-slate-500 rounded-full flex items-center justify-center text-white">
                                Live Demo
                            </div>
                            <div
                                className="ml-5 md:ml-16 w-[144px] h-[32px] md:w-[278px] md:h-[48px] border border-slate-500 rounded-full flex items-center justify-center text-black">
                                Ade to cart
                            </div>

                        </div>
                    </div>
                    <div className="flex items-center justify-center flex-col">
                        <span className="font-bold text-black text-[20px] mt-10 md:-mt-20 md:text-[40px]">Detail Products Products</span>
                        <div className="flex items-center ">
                            <div
                                className="mt-9 text-[12px] md:text-[16px] w-[142px] h-[44px] md:w-[174px]  md:h-[69px] text-center flex flex-col items-center justify-center text-black rounded-full border border-[#086B68]">
                                <span>80%</span>
                                <p>
                                    Happy clients
                                </p>
                            </div>
                            <div
                                className="ml-5 text-[12px] md:text-[16px] mt-9 w-[142px] h-[44px] md:w-[174px]  md:h-[69px] text-center flex flex-col items-center justify-center text-black rounded-full border border-[#086B68]">
                                <span>80%</span>
                                <p>
                                    Happy clients
                                </p>
                            </div>
                        </div>
                        <div className="w-[312px] md:w-[580px] text-black border-b border-b-slate-500 mt-5 pb-5">
                            <span className="font-bold text-[14px] md:text-[20px] ">
                                Products
                            </span>
                            <p className="mt-2 text-[14px] md:text-[20px]">
                                Global virtual teamwork has emerged as a cornerstone of collaborative teamwork in
                                today’s work landscape, characterized by cross-border collaboration using digital
                                technologies. Although research has started to investigate the mechanisms underlying
                                effective teamwork through.
                            </p>
                        </div>
                        <div className="flex items-center justify-between w-[312px] md:w-[580px]">
                            <div className="flex items-center mt-2 text-black">
                                <span>regular price:</span>
                                <p className="font-bold">$995</p>
                                <div className="flex items-center justify-center text-yellow-400 ml-5">
                                    <FaStar/>
                                    <FaStar/>
                                    <FaStar/>
                                    <FaStar/>
                                    <FaStar/>

                                </div>
                            </div>
                            <div className="mt-3 text-black cursor-pointer">
                                <FaRegHeart/>

                            </div>

                        </div>
                        <button type="button"
                                className="w-[150px] h-[32px] md:w-[161px] md:h-[48px] bg-[#086B68] flex items-center justify-center mr-auto mt-5 rounded-full">

                            <FaHeadphones/>
                            <span className="ml-3">Support</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default DetailProductItem;