"use client";

import React, { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import { BiSolidShow, BiSolidHide } from "react-icons/bi";

function ProfileDashboard() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <div className="flex flex-col items-start">
            <div className="w-full h-[220px] bg-custom-gradient shadow-md" />

            <div className="container m-auto pl-6 sm:pl-12 flex flex-col items-start text-black">
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
                <div className="mt-4 md:pl-36">
                    <h1 className="text-md font-semibold"> Jac@untitle.com 👋</h1>
                    <p className="text-gray-600 mt-1">Welcome to the user panel!</p>
                </div>

                <div className="md:pl-36 mt-5">
                    <p className="text-[18px] font-bold">Public Profile</p>

                    <form action="" className="mt-5 flex flex-col md:flex-row">
                        <div className="flex flex-col">
                            <input type="text" placeholder="Name"
                                   className="outline-0 pl-2 w-fit md:w-[372px] rounded-lg h-[40px] border border-slate-400" />
                            <input type="text" placeholder="Email"
                                   className="mt-5 outline-0 pl-2 w-fit md:w-[372px] rounded-lg h-[40px] border border-slate-400" />
                            <input type="text" placeholder="Username"
                                   className="mt-5 outline-0 pl-2 w-fit md:w-[372px] rounded-lg h-[40px] border border-slate-400" />
                        </div>

                        <div className="flex flex-col md:ml-5 md:-mt-8 mt-5">
                            <label htmlFor="Password" className="text-[#1B1F26B8] mb-2">Password</label>
                            <div className="flex items-center border border-slate-400 rounded-lg w-fit md:w-[372px]">
                                <input
                                    type={showPassword ? "number" : "password"}
                                    className="outline-0 pl-2 w-fit md:w-[372px] h-[40px]"
                                    placeholder="Password"
                                />
                                <span onClick={() => setShowPassword(!showPassword)} className="mr-2 cursor-pointer text-xl">
                                    {showPassword ? <BiSolidHide /> : <BiSolidShow />}
                                </span>
                            </div>

                            <label htmlFor="ConfirmPassword" className="text-[#1B1F26B8] mt-2">Confirm Password</label>
                            <div className="flex items-center border border-slate-400 rounded-lg mt-2 w-fit md:w-[372px]">
                                <input
                                    type={showConfirmPassword ? "number" : "password"}
                                    className="outline-0 pl-2 w-fit md:w-[372px] h-[40px]"
                                    placeholder="Confirm Password"
                                />
                                <span onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="mr-2 cursor-pointer text-xl">
                                    {showConfirmPassword ? <BiSolidHide /> : <BiSolidShow />}
                                </span>
                            </div>
                        </div>

                    </form>
                    <div className="mt-10 mb-10 md:mb-0 md:mt-20 flex items-end justify-end ">
                        <button className="w-[126px] h-[48px] bg-white text-black border border-black rounded-lg mr-5">Discard</button>
                        <button className="w-[126px] h-[48px] bg-[#090909] text-white rounded-lg ">Save</button>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileDashboard;
