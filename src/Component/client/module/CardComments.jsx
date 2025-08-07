import React from 'react';
import Image from "next/image";
import {FaStar} from "react-icons/fa";


function CardComments({data}) {
    return (
        <>
            <div className="hidden md:flex flex-col bg-white mr-5 rounded-xl overflow-hidden items-start justify-between w-[278px] h-[409px] border-2 border-b-slate-50 -mt-28">
                <Image src={data.image} alt="logo" className="w-[278px] h-[250px]  object-fill rounded-bl-3xl"
                       width={278}
                       height={171}/>
                <div className="w-[275px] h-[171px] bg-white rounded-tr-3xl z-10 text-black p-1">
                    <div className="pt-5 p-2">
                        <span className="text-[14px] font-bold">{data.title}</span>
                        <p className="text-[12px] text-[#1B1F26B8] pt-2">
                            Global virtual teamwork has
                            emergedGlobal virtual teamwork has emerged
                        </p>
                    </div>
                    <div className="p-2 flex justify-between">
                        <div className="">
                            <span className="font-bold text-[16px]">{data.name}</span>
                        </div>
                        <div className="flex items-center text-yellow-400">
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>

                        </div>
                    </div>
                </div>
            </div>
            <div className="block md:hidden  bg-[#FFFFFF] w-[264px] h-[189px] rounded-tr-3xl rounded-l-xl rounded-b">
             <div className="relative -top-7">
                 <Image src={data.image} alt="logo" className="w-[80px] h-[80px]  object-fill rounded-full"
                        width={80}
                        height={80}/>
             </div>
                <div className="-mt-5">
                    <span className="text-[12px] text-black ml-5 font-bold">{data.title}</span>
                </div>
                <div>
                    <p className="text-[#1B1F26B8] text-[12px] ml-5 mt-1">{data.dec}</p>
                </div>
                <div className="mt-5 flex justify-around">
                    <span className="text-black ml-5 ">{data.name}</span>
                    <div className="flex items-center text-yellow-400">
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>

                    </div>
                </div>
            </div>
        </>
    );
}

export default CardComments;