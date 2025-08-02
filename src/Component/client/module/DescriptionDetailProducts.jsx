import React from 'react';
import Image from "next/image";
import {FaAngleDown} from "react-icons/fa6";

function DescriptionDetailProducts({fullText,toggleText,showMore, setShowMore}) {
    return (
        <>
            <div className=" bg-white w-full h-auto ">
                <div className="container m-auto">
                    <div className="pt-16 flex items-center justify-center">
                    <span
                        className="font-bold text-black text-[20px] mt-10 md:text-[40px]">Detail Products Products</span>

                    </div>
                    <div className="w-[312px] md:w-[748px] m-auto text-center mt-5 text-[#1B1F26B8]">
                        <p>
                            Global virtual teamwork has emerged as a cornerstone of collaborative teamwork in today’s
                            work landscape, characterized by cross-border collaboration using digital technologies.
                            Although research has started to investigate the mechanisms underlying effective teamwork
                            through.
                        </p>
                    </div>
                    <div className="relative mb-16 border-b border-b-slate-300 pb-20">
                        <Image src="/image/productsDitl.jpg" alt="logo"
                               className="w-[312px] h-[349px] md:w-[1224px] md:h-[523px] m-auto mt-10  rounded-xl"
                               width={1224}
                               height={523}/>
                        <div>
                            <span
                                className="absolute rounded-full md:pl-3 top-5 ml-10 md:ml-28 p-2 md:p-0 font-bold bg-[#086B68] text-[12px] md:text-[30px]  md:w-[400px]"> Detail Products Products</span>
                        </div>
                    </div>
                </div>
                <div className="container m-auto  w-[312px] md:w-auto">
                    <span className="text-black font-bold text-[24px] md:text-[40px]"> Detail Products Products</span>
                    <p className="text-black mt-5 text-[18px] md:text-[22px]">
                        Global virtual teamwork has emerged as a cornerstone of collaborative teamwork in today’s work
                        landscape, characterized by cross-border collaboration using digital technologies. Although
                        research has started to investigate the mechanisms underlying effective teamwork through.Global
                        virtual teamwork has emerged as a cornerstone of collaborative teamwork in today’s work
                        landscape, characterized by cross-border collaboration using digital technologies. Although
                        research has started to investigate the mechanisms underlying effective teamwork through.Global
                        virtual teamwork has emerged as a cornerstone of collaborative teamwork in today’s work
                        landscape, characterized by cross-border collaboration using digital technologies. Although
                        research has started to investigate the mechanisms underlying effective teamwork through.Global
                        virtual teamwork has emerged as a cornerstone of collaborative teamwork in today’s work
                        landscape, characterized by cross-border collaboration using digital technologies. Although
                        research has started to investigate the mechanisms underlying effective teamwork through.
                    </p>
                </div>
            </div>
            <div className="bg-white w-full h-auto py-10">
                <div className="container m-auto w-[312px] md:w-[1224px]">
                    <div className=" mb-16 border-b border-b-slate-300 pb-20">
                        <Image
                            src="/image/img.png"
                            alt="logo"
                            className="w-[312px] h-[349px] md:w-[1224px] pt-10 md:h-[523px] m-auto mt-10  rounded-xl"
                            width={1224}
                            height={916}
                        />
                        <div>
                        </div>
                    </div>

                    <span className="text-black font-bold text-[24px] md:text-[40px] block mb-5">
                    Detail Products
                </span>

                    {/* متن همراه با انیمیشن و لایه سفید */}
                    <div
                        className={`relative transition-all duration-500 ease-in-out overflow-hidden ${showMore ? 'max-h-full' : 'max-h-[250px]'}`}>
                        <p className="text-black text-[18px] md:text-[22px] leading-relaxed">
                            {fullText}
                        </p>

                        {/* لایه سفید گرادیان پایین متن */}
                        {!showMore && (
                            <div
                                className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
                        )}
                    </div>

                    {/* دکمه نمایش بیشتر */}
                    <div
                        className="w-[278px] h-[48px] text-[18px] bg-[#086B68] text-white cursor-pointer rounded-full m-auto flex items-center justify-center mt-5 mb-5 transition-all duration-300"
                        onClick={toggleText}
                    >
                        <span className="flex mr-2">{showMore ? "View less" : "View more"}</span>
                        <FaAngleDown className={`transition-transform duration-300 ${showMore ? "rotate-180" : ""}`}/>
                    </div>
                </div>
            </div>
            <div className=" bg-white w-full h-auto ">
                <div className="container m-auto">
                    <div className="relative mb-16 border-b border-b-slate-300 pb-20 pt-10">
                        <Image src="/image/img2.png" alt="logo"
                               className="w-[312px] h-[349px] md:w-[1224px] md:h-[523px] m-auto mt-10  rounded-xl"
                               width={1224}
                               height={429}/>
                        <div>
                        </div>
                    </div>
                </div>
                <div className="container m-auto  w-[312px] md:w-auto">
                    <span className="text-black font-bold text-[24px] md:text-[40px]"> Detail Products Products</span>
                    <p className="text-black mt-5 text-[18px] md:text-[22px]">
                        Global virtual teamwork has emerged as a cornerstone of collaborative teamwork in today’s work
                        landscape, characterized by cross-border collaboration using digital technologies. Although
                        research has started to investigate the mechanisms underlying effective teamwork through.Global
                        virtual teamwork has emerged as a cornerstone of collaborative teamwork in today’s work
                        landscape, characterized by cross-border collaboration using digital technologies. Although
                        research has started to investigate the mechanisms underlying effective teamwork through.Global
                        virtual teamwork has emerged as a cornerstone of collaborative teamwork in today’s work
                        landscape, characterized by cross-border collaboration using digital technologies. Although
                        research has started to investigate the mechanisms underlying effective teamwork through.Global
                        virtual teamwork has emerged as a cornerstone of collaborative teamwork in today’s work
                        landscape, characterized by cross-border collaboration using digital technologies. Although
                        research has started to investigate the mechanisms underlying effective teamwork through.
                    </p>
                </div>
            </div>
        </>
    );
}

export default DescriptionDetailProducts;