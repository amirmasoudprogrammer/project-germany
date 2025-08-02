import React from 'react';
import Link from "next/link";
import Image from "next/image";

function AllticketPage(props) {
    return (
        <div className="flex flex-col items-start">

            <div className="w-full h-[220px] bg-custom-gradient shadow-md"/>

            <div className="container m-auto flex flex-col items-start text-black">
                <div
                    className="md:ml-36 ml-10 -mt-6 md:-mt-24 bg-white md:w-[160px] md:h-[160px] rounded-full shadow-lg flex items-center justify-center border-4 border-white">
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
                    <h1 className="text-md font-semibold text-gray-800"> Jac@untitle.com 👋</h1>
                    <p className="text-gray-600 mt-1">Welcome to the user panel!</p>
                </div>

                <div className="ml-10 md:ml-20 mt-5 flex flex-col">
                    <div className="flex items-center justify-between flex-col md:flex-row">
                        <div className="mb-10 mr-auto md:mb-0 md:-mt-16 md:ml-24">
                            <span className="md:text-[24px] font-bold ml-7 md:ml-0 text-[#086B68]">ticketAll</span>
                        </div>
                        <div className="hidden md:flex items-center justify-between md:relative md:-top-32 md:right-20">
                            {[1, 2, 3].map((_, i) => (
                                <div key={i} className="flex flex-col items-center justify-center mr-10">
                                    <Image
                                        src="/image/tic3.png"
                                        alt="ticket"
                                        className="object-cover w-[60px] h-[60px]"
                                        width={60}
                                        height={60}
                                    />
                                    <span className="text-[#086B68] mt-2 font-semibold">0</span>
                                    <p className="text-[#086B68] font-medium text-sm">All conversations</p>
                                </div>
                            ))}
                        </div>
                        <div className="flex items-center justify-between md:hidden  w-full">
                            {[1, 2, 3].map((_, i) => (
                                <div key={i} className="flex flex-col items-center justify-center mr-3">
                                    <Image src="/image/tic3.png" alt="ticket" className="object-cover w-[30] h-[30]" width={30} height={30}/>
                                    <span className="text-[#086B68] mt-2 font-semibold">0</span>
                                    <p className="text-[#086B68] font-medium text-[10px]">All conversations</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="w-[312px] md:w-[90px] -ml-2 md:ml-24 mt-10 md:mt-0 h-[30px] bg-[#086B68] flex items-center justify-center rounded-md text-white text-sm shadow-md md:-mt-10">
                        My tikt
                    </div>

                    <div className="md:ml-24 w-[312px] md:w-[900px] h-auto md:border md:border-slate-300 mt-5 flex items-center justify-between flex-col md:flex-row md:p-5 rounded-xl bg-white shadow-sm">
                        <input
                            type="text"
                            placeholder="title"
                            className="w-[312px] md:w-[159px] mr-5 h-[38px] px-3 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#086B68]"
                        />
                        <select
                            className="w-[312px] md:w-[231px] mr-5  mt-5 md:mt-0 h-[38px] px-2 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#086B68]">
                            <option value="">status</option>
                            <option value="">status</option>
                            <option value="">status</option>
                        </select>
                        <select
                            className="w-[312px] md:w-[231px] mt-5 md:mt-0 mr-5 h-[38px] px-2 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#086B68]">
                            <option value="">product</option>
                            <option value="">product</option>
                            <option value="">product</option>
                        </select>
                        <input
                            type="text"
                            placeholder="Ticket ID"
                            className="w-[312px] md:w-[159px] mt-5 md:mt-0 mr-5 h-[38px] px-3 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#086B68]"
                        />
                        <input
                            type="text"
                            placeholder="Filter"
                            className="w-[312px] md:w-[159px]  mt-5 md:mt-0 mr-5 h-[38px] px-3 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#086B68]"
                        />
                    </div>
                    <div className="-ml-2 md:ml-auto w-[312px] md:w-[140px] h-[38px] mt-2 rounded-lg bg-[#086B68] flex items-center justify-center">
                        <Link href="" className="text-white">New ticket</Link>
                    </div>
                </div>
            </div>
            <div className='w-[364px] m-auto text-center mt-20 mb-20'>
                <span className="text-black text-center">You have no messages!You can contact the instructors or Carpool support</span>
            </div>
        </div>
    );
}

export default AllticketPage;
