import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";


function Blog() {
    return (
        <div className=" bg-white h-screen w-full ">
            <div className=" flex flex-col items-center ">
                <div className="mb-10 mt-16 md:mt-0">
                    <Image src="/image/“Blog”.svg" className="block" alt="image" width={152} height={84}/>
                </div>
                <div className="relative flex items-center mr-5 ml-5 md:ml-0 md:mr-0  md:p-0">
                    <div>
                        <Image src="/image/blog.jpg" className=" block rounded-3xl" alt="image" width={1224} height={610}/>
                        <div className="w-[320px] h-[44px] md:w-[1224px] m-auto md:h-[80px] absolute bottom-0 left-0 md:bottom-0 border-t border-t-slate-200 bg-white/20 rounded-b-3xl backdrop-blur-md shadow-md "></div>

                    </div>
                    <div className="absolute bg-white w-[130px] h-[70px] md:w-[200px] md:h-[90px] right-0 top-0 md:right-0 md:top-0 rounded-tl-xl rounded-bl-3xl">
                        <Link href="/" className="w-[80px] h-[34px] md:w-[187px] md:h-[40px] flex items-center justify-center bg-black ml-8  md:ml-5 rounded-xl mt-5">
                           <span className="text-[10px] md:text-[18px]">View More</span>
                            <FaAngleRight />
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Blog;