import React, {useState} from 'react';
import {TiMessages} from "react-icons/ti";
import Image from "next/image";

function PostComments(props) {
    const [showComments, setShowComments] = useState(false)

    return (
        <div className="container m-auto">
            <div className="text-black flex items-center justify-center md:justify-start">
                <span className="text-[30px]"><TiMessages/></span>
                <span className="font-bold text-[24px] md:text-[40px]">Questions and answers</span>
            </div>
            <div className="container m-auto">
                <div onClick={() => setShowComments(!showComments)}
                     className="w-[287px] h-[52px] m-auto md:m-0 mt-5 md:mt-0 flex items-center justify-center border border-[#EDE9C4] md:ml-auto bg-[#EDE9C4] rounded">
                    <span className="text-[#A8A16A] text-[20px] ">Add comment</span>
                </div>
                <div className="flex items-start justify-start flex-col mt-20 mb-20  ml-10 md:ml-0">
                    <div
                        className="w-[312px] h-[70px] md:w-[1224px] md:h-[70px] bg-[#A8A16A] rounded flex items-center rounded-l-xl justify-between">
                        <div className="flex items-center">
                            <Image src="/image/About.png"
                                   className="w-[64px] h-[64px] md:w-[84px] -ml-5 md:h-[84px] rounded-full" alt="image"
                                   width={84} height={84}/>
                            <span
                                className="w-[220px] md:w-auto ml-5 overflow-hidden text-[11px] md:text-[16px] md:ml-10 ">Hi, don't worry, it is possible to change all parts of the site such as header, footer, header settings, ?</span>
                        </div>
                        <p className="text-[11px] md:text-[16px] w-[100px] md:w-auto mb-auto md:mr-5 mt-3 ">20 Apr
                            2024</p>
                    </div>
                    <div
                        className="w-[310px] h-[70px]  md:w-[1080px] md:h-[85px] mt-10 bg-white border border-slate-500 rounded-l-xl rounded flex items-center justify-between">
                        <div className="flex items-center">
                            <Image src="/image/About.png"
                                   className="w-[64px] h-[64px] md:w-[84px] -ml-5 md:h-[84px] rounded-full" alt="image"
                                   width={84} height={84}/>
                            <span
                                className="w-[220px] md:w-auto ml-5 overflow-hidden text-[11px] md:text-[16px] md:ml-10 text-black">Hi, don't worry, it is possible to change all parts of the site such as header, footer, header settings, ?</span>
                        </div>
                        <p className="text-[11px] md:text-[16px] w-[100px] md:w-auto mb-auto md:mr-5 mt-3 text-black">20
                            Apr 2024</p>
                    </div>
                </div>
            </div>


            {showComments && (
                <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center px-4">
                    <div
                        className="relative w-full max-w-[808px] h-auto bg-[#086B68] text-white rounded-xl shadow-lg p-8 animate-fade-in">

                        <button
                            onClick={() => setShowComments(false)}
                            className="absolute top-4 right-4 text-white text-2xl hover:text-red-400"
                        >
                            &times;
                        </button>

                        <h2 className="text-2xl font-bold mb-4 m-auto flex items-center justify-center">Describe your
                            point of view.</h2>
                        <div className="flex items-center justify-center">
                            <input className="w-[744px] h-[141px] outline-0 flex items-end justify-end text-start pb-28 text-black border border-slate-400" type="text" placeholder=""/>

                        </div>
                        <div className="ml-auto w-[207px] h-[52px] text-black font-bold bg-white border border-slate-400 flex items-center justify-center mt-2 rounded-lg">
                            <button>Send</button>
                        </div>
                    </div>
                </div>
            )}


        </div>
    );
}

export default PostComments;