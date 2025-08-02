import React from 'react';
import Image from "next/image";
import Link from "next/link";
import {MdDelete} from "react-icons/md";


function CardDashboard({data}) {
    return (
        <>
            <div className="hidden w-[500px] h-[180px] mt-5 border border-slate-200 rounded-xl md:flex items-end "
                 style={{boxShadow: 'inset 0 4px 10px rgba(0, 0, 0, 0.1)'}}>
                <div className=" relative right-16 -top-3">
                    <Image src={data.image} alt="web Profile"
                           className="rounded-full object-cover shadow-xl w-[190px] h-[150px]" width={192}
                           height={199}/>
                </div>

                <div className="container m-auto h-full mt-10 ">
                    <span className="font-bold">{data.description}</span>
                    <div className="flex items-center justify-start mt-1">
                        {Array.from({length: 5}, (_, i) => (
                            <span key={i} className="text-yellow-400 text-[20px]">
                           {i < data.star ? '★' : '☆'}
                           </span>
                        ))}
                        <div className="ml-5">
                            <span>${data.price}</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <Link href=""
                              className="w-[215px] flex items-center justify-center text-[#086B68] font-bold h-[36px] border border-slate-300 mt-2 bg-[#EDE9C4] rounded-lg">
                            Live Demo
                        </Link>
                        <div className="mr-5 mt-5 cursor-pointer">
                            <MdDelete/>

                        </div>
                    </div>
                </div>


            </div>
            <div className="flex md:hidden mb-5 w-[312px] h-[327px] border border-slate-300 rounded-xl flex flex-col ">
                <div className="">
                    <Image src={data.image} alt="web Profile"
                           className="object-cover rounded-t-xl shadow-xl w-[312px] h-[178px]" width={312}
                           height={178}/>
                </div>
                <div className="p-5 text-[14px] font-bold">
                    <span>Global virtual teamwork has emerged as a crosghAbstract</span>
                </div>
                <div className="ml-5 flex items-center">
                    <div className="flex items-center">
                        <div>
                            {Array.from({length: 5}, (_, i) => (
                                <span key={i} className="text-yellow-400 text-[20px]">
                           {i < data.star ? '★' : '☆'}
                           </span>
                            ))}
                        </div>
                        <span className="ml-3">${data.price}</span>
                    </div>
                    <div className="flex -mt-2 ml-10">
                        <Link href="" className="w-[91px] flex items-center justify-center text-[#086B68] font-bold h-[28px] border border-slate-300 mt-2 bg-[#EDE9C4] rounded-lg">
                            Live Demo
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CardDashboard;