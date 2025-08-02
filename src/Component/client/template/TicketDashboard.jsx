import React from 'react';
import Link from "next/link";
import Image from "next/image";
import { IoBag } from "react-icons/io5";
import { AiOutlineFolderAdd } from "react-icons/ai";
import { FaMessage } from "react-icons/fa6";




function TicketDashboard(props) {
    return (
        <div className="flex flex-col items-start">

            <div className="w-full h-[220px] bg-custom-gradient shadow-md"/>


            <div className="container m-auto  flex flex-col items-start text-black">
                <div className="md:ml-36 ml-10 -mt-6 md:-mt-24 bg-white  md:w-[160px] md:h-[160px] rounded-full shadow-lg flex items-center justify-center border-4 border-white">
                    <Link href="/dashboard/profile">
                        <Image
                            src="/image/profile4.png"
                            alt="User Profile"
                            className="rounded-full object-cover md:w-[140px] md:h-[140px] w-[44px] h-[44px]"
                            width={140}
                            height={140}
                        />
                    </Link>
                </div>


                <div className="mt-4 md:pl-36 ml-10">
                    <h1 className="text-md font-semibold"> Jac@untitle.com 👋</h1>
                    <p className="text-gray-600 mt-1">Welcome to the user panel!</p>
                </div>

                <div className="md:ml-44 mt-5 pl-2">
                    <span className="md:text-[24px] font-bold ml-7 md:ml-0">Send ticket</span>
                    <div className="flex items-center justify-between flex-col md:flex-row">
                        <form action="" className=" mt-5">
                            <div className="md:w-[450px] h-[62px] flex items-center border border-slate-300 rounded-lg">
                                <span className="w-[312px] w-[62px] p-5 ml-0 border-r border-r-slate-400 text-[#1B1F26B8] text-[20px]"><IoBag /></span>
                                <select name="" id="" className="w-[312px] md:w-[600px] border-0 outline-0 ">
                                    <option>section</option>
                                    <option>section</option>
                                    <option>section</option>
                                </select>
                            </div>
                            <div className="md:w-[450px] h-[62px] flex items-center border border-slate-300 rounded-lg mt-5">
                                <span className="w-[312px] w-[62px] p-5 ml-0 border-r border-r-slate-400 text-[#1B1F26B8] text-[20px]"><AiOutlineFolderAdd /></span>
                                <select name="" id="" className="w-[312px] md:w-[600px] border-0 outline-0 ">
                                    <option>Department</option>
                                    <option>Department</option>
                                    <option>Department</option>
                                </select>
                            </div>
                            <div className="md:w-[450px] h-[62px] flex items-center border border-slate-300 rounded-lg mt-5">
                                <span className="w-[312px] w-[62px] p-5 ml-0 border-r border-r-slate-400 text-[#1B1F26B8] text-[20px]"><FaMessage /></span>
                                <input type="text" className="w-[312px] md:w-[645px] border-0 outline-0 pl-2"/>
                            </div>
                            <div
                                className="ml-auto w-[140px] h-[38px] mt-2 rounded-lg bg-[#086B68] flex items-center justify-center">
                                <Link href="" className="text-white">New ticket</Link>
                            </div>
                        </form>
                        <Image src="/image/Group 1342.svg" alt="User Profile" className="w-[204px] h-[203px]  md:w-[289px] md:h-[289px] md:ml-36" width={289} height={289}/>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default TicketDashboard;