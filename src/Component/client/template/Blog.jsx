import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";
import Footer from "@/Component/client/layout/Footer";


function Blog() {
    return (
        <div className=" bg-white h-screen  w-full">
            <div className="mt-28 flex flex-col items-center ">
                <div>
                    <Image src="/image/“Blog”.svg" className="block" alt="image" width={152} height={84}/>

                </div>
                <div className="relative flex items-center p-10">
                    <div>
                        <Image src="/image/blog.jpg" className="block rounded-3xl" alt="image" width={350} height={610}/>
                        <div className="w-[310px] h-[44px] md:w-[350px] m-auto md:h-[80px] absolute bottom-10 md:bottom-0 border-t border-t-slate-200 bg-white/20 rounded-b-3xl backdrop-blur-md shadow-md ">
                        </div>

                    </div>
                    <div className="absolute bg-white w-[100px] h-[70px] md:w-[150px] md:h-[70px] right-10 top-9 rounded-tl-xl rounded-bl-3xl">
                        <Link href="/" className="w-[80px] h-[34px] md:w-[137px] md:h-[40px] flex items-center justify-center bg-black ml-5 rounded-xl mt-3">
                           <span className="text-[10px] md:text-[18px]">View More</span>
                            <FaAngleRight />
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Blog;