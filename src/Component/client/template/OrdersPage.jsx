import React from 'react';
import HeaderComponent from "@/Component/client/layout/HeaderComponent";
import {CiSearch} from "react-icons/ci";
import Image from "next/image";
import Footer from "@/Component/client/layout/Footer";
import Link from "next/link";

function OrdersPage(props) {
    return (
        <>
            <HeaderComponent/>
            <div className="container m-auto ">
                <div className="flex items-center justify-center flex-col md:flex-row">
                    <div className="flex items-center justify-center m-auto text-black ">
                        <span className='text-[24px] md:text-[50px] mr- mt-16 font-bold '>order registration</span>
                    </div>
                </div>

                <div className="flex items-center justify-around mt-20 border-b border-b-slate-400 pb-10">
                    <Link href="/order" className="flex items-center justify-center mr-2 md:mr-0 w-[138px] h-[38px] md:w-[273px] md:h-[60px] bg-[#9D915F] rounded-full text-black border border-slate-500 text-white ">Buy a template</Link>
                    <Link href="/order/registration" className="flex items-center justify-center w-[170px] h-[38px] md:w-[341px] md:h-[60px] bg-[#FFFFFF] rounded-full text-black border border-slate-500 font-bold">Project registration</Link>

                </div>

                <div className="flex items-center justify-around mt-10">
                    <div>
                        <input type="radio" id="Website" name="radio"/>
                        <label htmlFor="Website" className="text-[20px] ml-3 font-bold text-black">Website</label>

                    </div>
                    <div className="flex items-center justify-center">
                        <input type="radio" id="App" name="radio"/>
                        <label htmlFor="App" className="text-[20px] ml-3 font-bold text-black">App</label>
                    </div>
                </div>

                <div className="w-[312px] h-[35px] md:w-[674px] mt-5 md:mt-0 md:h-[219px] flex items-center justify-center m-auto">
                    <input type="text"
                           className="w-[312px] h-[35px] md:w-[674px] md:h-[57px] m-auto outline-0 border border-[#24B8D2] rounded-xl text-black pl-3"
                           placeholder=""/>
                </div>

                <div className="flex items-center justify-center flex-col md:flex-row mb-10 mt-10">
                    <div className=" flex items-start justify-start flex-col">
                        <span className="text-[19px] text-black font-bold mb-5">Description</span>
                        <textarea name="" id="" cols="30" rows="10"
                                  className="text-black border border-[#C2BB87] rounded-lg w-[312px] h-[148px] md:w-[548px] md:h-[248px]"></textarea>
                    </div>
                    <div className="ml-10 flex items-start justify-start flex-col mt-5 md:mt-0">
                        <span className="text-[19px] text-black font-bold mb-5">File upload</span>
                        <textarea name="" id="" cols="30" rows="10"
                                  className="text-black border border-[#C2BB87] rounded-lg w-[312px] h-[148px] md:w-[548px] md:h-[248px]"></textarea>
                    </div>
                </div>

                <div className="flex items-center justify-between flex-col md:flex-row mb-16 mt-28">
                    <div className=" flex items-center flex-col justify-start md:ml-16">
                        <div className="w-[312px] md:w-[548px] h-[48px] md:h-[48px] rounded-lg  bg-white border border-slate-300 flex items-center justify-center">
                              <span className="text-black  ml-2">
                                <CiSearch/>
                              </span>
                            <input type="text" className="w-[312px] md:w-[548px] text-black outline-0 pl-3"/>
                        </div>
                        <div className="flex text-black items-center justify-start mr-auto mt-5 mb-5">
                            <span className="text-[34px] font-bold mr-4"> Have ui?</span>
                            <input type="checkbox"/>
                        </div>
                        <input type="text" className="w-[312px] md:w-[548px] h-[48px] text-black outline-0 pl-3 rounded-lg  bg-white border border-slate-300"/>

                    </div>
                    <div>
                        <Image src="/image/imageor.png" alt="logo" className="" width={401} height={303}/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default OrdersPage;