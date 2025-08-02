import React from 'react';
import Link from "next/link";
import Image from "next/image";
import {RiComputerFill} from "react-icons/ri";


function ProductDashboard(props) {
    return (
        <div className="flex flex-col items-start">

            <div className="w-full h-[220px] bg-custom-gradient shadow-md"/>


            <div className="container m-auto  flex flex-col items-start text-black">
                <div
                    className="md:ml-36 ml-10 -mt-6 md:-mt-24 bg-white w-[44px] h-[44px] md:w-[160px] md:h-[160px] rounded-full shadow-lg flex items-center justify-center border-4 border-white">
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

                <div className="pl-10 flex md:pl-44 mt-5  flex-col md:flex-row">
                    <div>
                        <span className="text-[24px] font-bold">Purchased products</span>
                        <div className="w-[312px] h-[76px] md:w-[172px] md:h-[187px] border border-slate-300 rounded-lg mt-5 flex items-center justify-around md:justify-center flex-row md:flex-col">
                        <span className="text-[#086B68] text-[40px]">
                              <RiComputerFill/>
                        </span>
                            <p className="text-[#9D915F] md:mt-4">purchased</p>
                            <span className="text-[#9D915F]">0</span>
                        </div>
                    </div>
                    <div className="md:-mt-16 md:ml-56 ">
                        <Image src="/image/Group 1419.svg" alt="image" className=" object-cover md:w-[388px] md:h-[363px] w-[312px] h-[344px]" width={388} height={363}/>
                        <div className="text-center text-[#086B68] mt-5">
                            No course has been purchased!
                        </div>
                        <Link href="" className="mb-5 mt-2 text-white flex items-center justify-center m-auto rounded-lg w-[169px] h-[48px] bg-[#086B68]">
                            Started
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDashboard;