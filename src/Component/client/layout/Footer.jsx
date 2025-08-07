import React from 'react';
import Link from "next/link";
import {MdOutlineMailOutline} from "react-icons/md";
import {FaPhone} from "react-icons/fa6";
import {CiLocationOn} from "react-icons/ci";
import { FaChevronUp } from "react-icons/fa";



function Footer() {
    return (
        <>

            <footer className=" hidden md:block mt-16 bg-cover bg-center bg-white bg-no-repeat w-full h-[400px] "
                    style={{backgroundImage: "url('/image/Frame 1598.png')"}}>
                <div
                    className=" container mx-auto h-full px-10 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-3 text-white items-center">

                    <div className="flex items-center justify-between">
                        {/* ستــون ۱ */}
                        <div className="p-5">
                            <h3 className="font-bold text-lg mb-4">Company</h3>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="">About Us</Link></li>
                                <li><Link href="">Team</Link></li>
                                <li><Link href="">Blog</Link></li>
                            </ul>
                        </div>

                        {/* ستــون ۲ */}
                        <div className=" text-[12px] w-72">
                            <h3 className="font-bold text-sm mb-4 ">Useful Links</h3>
                            <ul className="space-y-2 text-sm">
                                <li>Contact Us</li>
                                <li>Log in</li>
                                <li>Proudact</li>

                            </ul>
                        </div>

                        {/* ستــون ۳ */}
                        <div>
                            <h3 className="font-bold text-lg mb-6">Contact</h3>
                            <p className="text-[15px]">
                                Abstract
                                Global virtual teamwork has emerged as a cornerstone of collaborative teamwork in
                                today’s
                                work landscape, characterized by cross-border
                            </p>
                        </div>
                    </div>

                    {/* ستــون ۴ */}
                    <div className=" text-[12px] w-72">
                        <h3 className="font-bold text-xl mb-4 ">Contact</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="" className="flex items-center">
                                    <MdOutlineMailOutline/>
                                    <span className="ml-1">hello@it.com</span>
                                </Link>

                            </li>
                            <li>
                                <Link href="" className="flex items-center">
                                    <FaPhone/>
                                    <span className="ml-1">+351 123 456 789</span>
                                </Link>

                            </li>
                            <li>
                                <Link href="" className="flex items-center">
                                    <CiLocationOn/>
                                    <span className="ml-1">Lisboa, Portugal</span>
                                </Link>

                            </li>

                        </ul>
                    </div>

                </div>
            </footer>
            <footer className=" block md:hidden mt-16 bg-cover bg-center bg-white bg-no-repeat  h-[567px] " style={{backgroundImage: "url('/image/Rectangle 299.svg')"}}>
                <div className=" container m-auto flex flex-col items-start justify-between h-full px-10 py-10  text-white ">
                    <div className="border-b border-[#EDE9C4] h-[200px] mt-10 pb-5">
                        <h3 className="font-bold text-lg mb-6">Contact</h3>
                        <p className="text-[15px]">
                            Abstract
                            <br/>
                            Global virtual teamwork has emerged as a cornerstone of collaborative teamwork in
                            today’s
                            work landscape, characterized by cross-border
                        </p>
                    </div>
                    <div className="flex items-center justify-between h-[150px] w-full border-b border-[#EDE9C4] pb-5 pt-5">

                        <div className="">
                            <h3 className="font-bold text-lg mb-4">Company</h3>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="">About Us</Link></li>
                                <li><Link href="">Team</Link></li>
                                <li><Link href="">Blog</Link></li>
                            </ul>
                        </div>

                        <div className=" text-[12px] ">
                            <h3 className="font-bold text-sm mb-4 ">Useful Links</h3>
                            <ul className="space-y-2 text-sm">
                                <li>Contact Us</li>
                                <li>Log in</li>
                                <li>Proudact</li>

                            </ul>
                        </div>


                    </div>
                    <div className=" text-[12px]  pt-5">
                        <h3 className="font-bold text-xl mb-4 ">Contact</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="" className="flex items-center">
                                    <MdOutlineMailOutline/>
                                    <span className="ml-1">hello@it.com</span>
                                </Link>

                            </li>
                            <li>
                                <Link href="" className="flex items-center">
                                    <FaPhone/>
                                    <span className="ml-1">+351 123 456 789</span>
                                </Link>

                            </li>
                            <li>
                                <Link href="" className="flex items-center">
                                    <CiLocationOn/>
                                    <span className="ml-1">Lisboa, Portugal</span>
                                </Link>

                            </li>

                        </ul>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;


