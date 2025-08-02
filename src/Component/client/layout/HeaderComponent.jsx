"use client"
import React, {useState} from 'react';
import Link from "next/link";
import Image from "next/image";
import {CiMenuBurger} from "react-icons/ci";
import {FaRegUserCircle} from "react-icons/fa";
import {FaArrowLeftLong} from "react-icons/fa6";

function HeaderComponent(props) {
    const [showMenu, setShowMenu] = useState(false)

    return (
       <>
           {/*Header for Desktop View */}
           <div className="hidden md:flex items-center justify-around  m-auto ">
               <Link href="/">
                   <Image src="/image/logoWeb.png" alt="logo" className="w-[100px] h-[100px]" width={269} height={269}/>
               </Link>
               <div className="flex items-center justify-between  ">
                   <ul className="flex items-end justify-between">
                       <li className="mr-5 hover:bg-[#086B68] px-3 py-1 text-black hover:text-white  rounded-full">
                           <Link className=" hover:text-white] font-bold" href="/">Home</Link></li>
                       <li className="mr-5 hover:bg-[#086B68] px-3 py-1 text-black hover:text-white  rounded-full">
                           <Link className="hover:text-white font-bold" href="/">Products</Link></li>
                       <li className="mr-5 hover:bg-[#086B68] px-3 py-1 text-black hover:text-white  rounded-full">
                           <Link className="hover:text-white font-bold" href="/">Blog</Link></li>
                       <li className="mr-5 hover:bg-[#086B68] px-3 py-1 text-black hover:text-white  rounded-full">
                           <Link className="hover:text-white font-bold" href="/">Countact Us</Link></li>
                       <li className="mr-5 hover:bg-[#086B68] px-3 py-1 text-black hover:text-white  rounded-full">
                           <Link className="hover:text-white font-bold" href="/">About us</Link></li>
                   </ul>
               </div>
               <div className="">
                   <Link
                       className="font-bold py-2 px-2 rounded-lg font-medium mr-5 text-black hover:text-white hover:bg-[#086B68]"
                       href="/Login">Log in</Link>
                   <Link
                       className="font-bold py-2 px-2 rounded-lg font-medium text-black hover:text-white hover:bg-[#086B68]"
                       href="/Signup">Sign up</Link>
               </div>
           </div>

           {/* Header for mobile View */}
           <div className="container m-auto flex md:hidden items-center justify-between  mt-3 ">
               <div className="text-[#086B68] ml-8 text-[20px] cursor-pointer" onClick={() => setShowMenu(!showMenu)}>
                   <CiMenuBurger/>
               </div>
               <Link href="" className="text-[#086B68] mr-8 text-[20px]">
                   <FaRegUserCircle/>
               </Link>


           </div>


           {
               showMenu && (
                   <div className="fixed inset-0 bg-black bg-opacity-60 z-50 ">

                       <div className="relative w-full h-full bg-white  rounded-none" >
                           <div className=" flex " style={{
                               backgroundImage: "url('image/banner.svg')",
                               backgroundSize: 'cover',
                               backgroundPosition: 'center',
                               height: '250px',
                               width: '100%'
                           }}></div>
                           <button onClick={() => setShowMenu(false)} className="absolute  w-[30px] top-4 right-0 left-5 text-gray-600 text-white hover:text-red-500 text-2xl">
                               <FaArrowLeftLong />
                           </button>

                           <div className="text-black  flex items-center justify-center">
                               <ul className="flex items-center justify-center flex-col">
                                   <li className="text-[14px] text-lg text-lg m-6 group relative w-max">
                                       <Link href="">
                                           <span className="hover:font-bold transition-all">Home</span>
                                           <span
                                               className="absolute -bottom-1 left-1/2 w-0 transition-all h-1 bg-indigo-600 group-hover:w-3/6"></span>
                                           <span
                                               className="absolute -bottom-1 right-1/2 w-0 transition-all h-1 bg-indigo-600 group-hover:w-3/6"></span>
                                       </Link></li>
                                   <li className="mt-3 text-[14px] text-lg text-lg m-6 group relative w-max">
                                       <Link href="">
                                           <span className="hover:font-bold transition-all">Products</span>
                                           <span
                                               className="absolute -bottom-1 left-1/2 w-0 transition-all h-1 bg-indigo-600 group-hover:w-3/6"></span>
                                           <span
                                               className="absolute -bottom-1 right-1/2 w-0 transition-all h-1 bg-indigo-600 group-hover:w-3/6"></span>
                                       </Link></li>
                                   <li className="mt-3 text-[14px] text-lg text-lg m-6 group relative w-max">
                                       <Link href="">
                                           <span className="hover:font-bold transition-all">Blog</span>
                                           <span
                                               className="absolute -bottom-1 left-1/2 w-0 transition-all h-1 bg-indigo-600 group-hover:w-3/6"></span>
                                           <span
                                               className="absolute -bottom-1 right-1/2 w-0 transition-all h-1 bg-indigo-600 group-hover:w-3/6"></span>
                                       </Link></li>
                                   <li className="mt-3 text-[14px] text-lg text-lg m-6 group relative w-max">
                                       <Link href="">
                                           <span className="hover:font-bold transition-all">Countact Us</span>
                                           <span
                                               className="absolute -bottom-1 left-1/2 w-0 transition-all h-1 bg-indigo-600 group-hover:w-3/6"></span>
                                           <span
                                               className="absolute -bottom-1 right-1/2 w-0 transition-all h-1 bg-indigo-600 group-hover:w-3/6"></span>
                                       </Link></li>
                                   <li className="mt-3 text-[14px] text-lg text-lg m-6 group relative w-max">
                                       <Link href="">
                                           <span className="hover:font-bold transition-all">About us</span>
                                           <span
                                               className="absolute -bottom-1 left-1/2 w-0 transition-all h-1 bg-indigo-600 group-hover:w-3/6"></span>
                                           <span
                                               className="absolute -bottom-1 right-1/2 w-0 transition-all h-1 bg-indigo-600 group-hover:w-3/6"></span>
                                       </Link></li>

                               </ul>
                           </div>

                       </div>

                   </div>

               )
           }

       </>
    );
}

export default HeaderComponent;