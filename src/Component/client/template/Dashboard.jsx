import React from 'react';
import Link from "next/link";
import Image from "next/image";
import {LuMessageSquareText} from "react-icons/lu";
import { LuMessageCircleMore } from "react-icons/lu";
import { IoVideocam } from "react-icons/io5";




function Dashboard(props) {
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

                <div className="ml-6 mt-4 md:pl-36">
                    <h1 className="text-md font-semibold"> Jac@untitle.com 👋</h1>
                    <p className="text-gray-600 mt-1">Welcome to the user panel!</p>
                </div>

                <div className="md:pl-10 md:mt-10 flex flex-col md:flex-row mt-5">
                    <div>
                        <Image src="/image/rafiki.svg" alt="icon" className=" object-cover" width={350} height={250}/>
                    </div>
                    <div className="flex flex-col items-center justify-center md:justify-between md:items-center">
                        <span className="text-[15px] md:text-[40px] font-bold">Hello Fahime Hosein Ali Welcom.</span>
                        <div className="mt-24 flex justify-between   items-center flex-col md:flex-row ">
                            <div className=" mt-2 md:mr-5 w-[280px] md:w-[199px] h-[74px] md:h-[104px] bg-[#9D915F] rounded-lg flex  items-center justify-center">
                                <div className="flex items-center justify-center flex-col text-white font-bold">
                                    <span>0</span>
                                    <p>open ticket</p>
                                </div>
                                <span className="text-[30px] ml-5 text-white font-bold">
                                    <LuMessageSquareText/>
                                </span>

                            </div>
                            <div className=" mt-2 md:mr-5 w-[280px] md:w-[199px] h-[74px] md:h-[104px] bg-[#9D915F] rounded-lg flex  items-center justify-center">
                                <div className="flex items-center justify-center flex-col text-white font-bold">
                                    <span>0</span>
                                    <p>Comments</p>
                                </div>
                                <span className="text-[30px] ml-5 text-white font-bold">
                                   <LuMessageCircleMore />
                                </span>

                            </div>
                            <div className=" mt-2 md:mr-5 w-[280px] md:w-[199px] h-[74px] md:h-[104px] bg-[#9D915F] rounded-lg flex  items-center justify-center">
                                <div className="flex items-center justify-center flex-col text-white font-bold">
                                    <span>0</span>
                                    <p>Templates</p>
                                </div>
                                <span className="text-[30px] ml-5 text-white font-bold">
                                   <IoVideocam />

                                </span>

                            </div>

                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Dashboard;