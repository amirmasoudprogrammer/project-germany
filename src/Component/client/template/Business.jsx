import React from 'react';
import Link from "next/link";
import Image from "next/image";

function Business(props) {
    return (
        <div className="bg-white w-full flex items-center justify-center flex-col mt-5 md:mt-0">
            <p className="mt-24 text-black font-bold text-[30px] text-center">Start your business with the right training.</p>
            <div className="flex items-center justify-around flex-col md:flex-row">
                <div>
                    <video
                        src="/video/WU3P63U00Xk062yhQm.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-[312px] h-[313px] md:w-[664px] md:h-[633px]"
                    />
                </div>
                <div className="mr-32 md:mr-20 ">
                    <div className="flex md:items-center items-center justify-center w-[490px] md:w-auto">
                            <Image src="/image/Arrow 1.svg" alt="logo" className="w-[40px] ml-32 md:ml-20 md:w-[50px] h-[90px] animate-bounce " width={147} height={68}/>
                            <div className="flex items-center md:items-start flex-col justify-center md:justify-end m-auto ">
                            <p className="text-[#2CBEE3] text-[20px] w-[300px] m-auto flex items-center justify-center md:text-[40px] md:w-[600px] ">
                                If you're a developer, get your website template from here!
                            </p>
                            <Link href="/order" className="w-[302px] md:w-[450px] h-[45px] rounded mt-3 bg-[#2CBEE3] flex items-center justify-center">
                                Developer
                            </Link>
                        </div>
                    </div>
                    <div className="flex md:items-center items-center justify-center w-[490px] md:w-auto mt-10">
                        <Image src="/image/Arrow 1.svg" alt="logo" className="w-[40px] ml-32 md:ml-20 md:w-[50px] h-[90px] animate-bounce " width={147} height={68}/>
                        <div className="flex items-center md:items-start flex-col justify-center md:justify-end m-auto ">
                            <p className="text-[#2CBEE3] text-[20px] w-[300px] m-auto flex items-center justify-center md:text-[40px] md:w-[600px] ">
                                If you're a developer, get your website template from here!
                            </p>
                            <Link href="/order" className="w-[302px] md:w-[450px] h-[45px] rounded mt-3 bg-slate-300 text-black font-bold flex items-center justify-center">
                                Buissens
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Business;