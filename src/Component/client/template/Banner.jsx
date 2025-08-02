import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";


function Banner(props) {
    return (
        <div className="relative ">
            <div className="">
                <Image src="/image/images.jpg" alt="logo" className="w-[360px] h-[812px] rounded-xl md:rounded-none mt-5 md:mt-0  md:w-[100%] md:h-auto object-cover" width={1440} height={269}/>
            </div>

            <div className="absolute top-10 w-[504px] h-[200px] m-auto md:bottom-0 left-0 flex flex-col pl-5 pt-10 md:ml-10">
                <div className="w-[312px] md:w-[404px] flex items-center justify-start bg-[#EDE9C480] p-1 rounded-md">
                    <span className="text-[25px] ml-2">
                        <CiSearch />
                    </span>
                    <input type="text" placeholder="" className="ml-3 text-black outline-0 border-l border-l-white pl-2 w-[312px] md:w-[404px] h-[30px] bg-transparent "/>
                </div>
                <div>
                    <p className="text-[23px] md:text-[40px] font-medium text-[#EDE9C4] mt-5">Build your own site and find it</p>
                </div>
               <Link href="" className="bg-[#086B68] w-[80px] hidden md:flex items-center justify-center p-1 rounded-full">let’s go</Link>
            </div>
        </div>
    );
}

export default Banner;