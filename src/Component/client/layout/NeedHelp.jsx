import React from 'react';
import Image from "next/image";
import { CiHeadphones } from "react-icons/ci";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { FaGooglePlay } from "react-icons/fa";

function NeedHelp() {
    return (
        <div className="fixed bottom-6 right-0 left-0 m-auto flex items-center justify-center z-50">

            <div className="flex items-center gap-3">
                <div className="w-[310px] h-[52px] bg-gradient-to-r from-teal-600 to-cyan-600 rounded-full flex items-center justify-between shadow-lg px-3">

                    <div className="flex items-center mr-2 gap-2 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-inner">
                        <MdOutlineWifiCalling3 className="text-lg" />
                        <span>55261380</span>
                    </div>


                    <div className="flex items-center mr-2 w-[139px] h-[35px]  justify-center bg-cyan-400 text-white  rounded-full text-sm font-medium hover:scale-105 transition">
                        <CiHeadphones className="text-xl" />
                        <span className="text-[12px]">Request for advice</span>
                    </div>

                 <div>
                     <Image
                         src="/image/Group 1435.svg"
                         width={32}
                         height={32}
                         alt="img"
                         className="mr-2"
                     />
                 </div>
                </div>


                <div className="relative group flex items-center">
                    <div className="p-[3px] rounded-full bg-gradient-to-tr from-pink-500 via-yellow-500 to-cyan-500 animate-borderSpin [background-size:200%_200%]">
                        <div className="rounded-full overflow-hidden shadow-lg border-2 border-white">
                            <video
                                src="/video/8048443-hd_1080_1920_25fps.mp4"
                                muted
                                autoPlay
                                loop
                                className="w-[60px] h-[60px] object-cover"
                            />
                        </div>
                    </div>



                    <div className="absolute left-[110%] opacity-0 group-hover:opacity-100 group-hover:left-[120%] transition-all duration-500 bg-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg border border-gray-300">
                        <FaGooglePlay className="text-black text-lg" />
                        <span className="text-black text-sm font-medium">Need help?</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NeedHelp;
