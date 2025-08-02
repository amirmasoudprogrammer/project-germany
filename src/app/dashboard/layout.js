"use client";
import React, {useState} from "react";
import Link from "next/link";
import {GoHome} from "react-icons/go";
import {BiSolidDashboard} from "react-icons/bi";
import {IoTicketOutline} from "react-icons/io5";
import {FiSettings} from "react-icons/fi";
import {IoLogInOutline} from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";




const nameDashboard = [
    {id: 1, name: "Home", icon: <GoHome/>, link:"/dashboard"},
    {id: 2, name: "Dashboard", icon: <BiSolidDashboard/> , link:"/dashboard/Dashboard"},
    {id: 3, name: "ticket", icon: <IoTicketOutline/> , link: "/dashboard/ticket"},
    {id: 4, name: "ticketAll", icon: <IoTicketOutline/> , link: "/dashboard/allTicket"},
];

const menuItems = [
    { name: "Home", icon: <GoHome /> },
    { name: "Dashboard", icon: <BiSolidDashboard /> },
    { name: "Ticket", icon: <IoTicketOutline /> },
    { name: "Settings", icon: <FiSettings /> },
    { name: "Log Out", icon: <IoLogInOutline /> },
];

function Layout({children}) {
    const [selectedDashboard, setSelectedDashboard] = useState(null);
    const [showMenu , setShowMenu] =useState(false)

    return (
        <div className="flex h-screen bg-[#086B68] flex-col md:flex-row">

            <div className="hidden w-[160px] pl-5 py-10 md:flex justify-between flex-col h-[700px]">
                <div>
                    {nameDashboard.map((item) => (
                        <Link
                            onClick={() => setSelectedDashboard(item.name)}
                            key={item.id}
                            href={item.link}
                            className={`flex items-center px-3 py-2 rounded-l-full transition-all ${
                                selectedDashboard === item.name ? "bg-[#090909] text-white relative w-[162px]" : "text-white"
                            }`}
                        >
                            {item.icon}
                            <span className="text-[14px] ml-2">{item.name}</span>
                        </Link>
                    ))}
                </div>
                <div>
                    <Link
                        onClick={() => setSelectedDashboard("Settings")}
                        href="#"
                        className={`flex items-center px-3 py-2 rounded-l-full transition-all ${
                            selectedDashboard === "Settings" ? "bg-white text-black relative w-[202px]" : "text-white"
                        }`}
                    >
                        <FiSettings/>
                        <span className="text-[14px] ml-2">Settings</span>
                    </Link>
                    <Link
                        onClick={() => setSelectedDashboard("Log Out")}
                        href="#"
                        className={`flex items-center px-3 py-2 rounded-l-full transition-all ${
                            selectedDashboard === "Log Out" ? "bg-white text-black relative w-[202px]" : "text-white"
                        }`}
                    >

                        <IoLogInOutline/>

                        <span className="text-[14px] ml-2">Log Out</span>
                    </Link>
                </div>
            </div>

            <div className="md:hidden p-4">
                {/* Menu Icon */}
                <div
                    className="text-white text-3xl cursor-pointer"
                    onClick={() => setShowMenu(!showMenu)}
                >
                    <IoMdMenu />
                </div>

                {/* Overlay Menu */}
                {showMenu && (
                    <div className="fixed inset-0 bg-black/40 z-40" onClick={() => setShowMenu(false)}>
                        {/* Slide-in menu */}
                        <div
                            className="absolute top-0 left-0 w-[250px] h-full bg-white text-black p-6 shadow-lg z-50 animate-slide-in"
                            onClick={(e) => e.stopPropagation()} // جلوگیری از بستن هنگام کلیک روی منو
                        >
                           <div className="flex items-center justify-between">
                               <h2 className="text-xl font-bold mb-4">Menu</h2>
                               <span className="-mt-10 cursor-pointer" onClick={() =>setShowMenu(false)}><IoMdClose /></span>
                           </div>
                            <div className="flex flex-col gap-4">
                                {menuItems.map((item) => (
                                    <Link
                                        key={item.name}
                                        href="#"
                                        onClick={() => {
                                            setShowMenu(false); // بستن منو هنگام انتخاب
                                        }}
                                        className="flex items-center gap-3 text-[16px] hover:text-red-600 transition"
                                    >
                                        {item.icon}
                                        <span>{item.name}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className="flex-1 flex items-center justify-center md:p-5">
                <div className="w-full max-w-[1244px] h-full rounded-3xl border border-slate-500 bg-white overflow-auto">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Layout;
