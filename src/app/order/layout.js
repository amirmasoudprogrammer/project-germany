"use client"
import React, {useState} from 'react';
import Link from "next/link";
import HeaderComponent from "@/Component/client/layout/HeaderComponent";
import useNameOrderStore from "@/stores/useNameOrderStore";

function Layout({children}) {
    const step = useNameOrderStore(state => state.step);
    const [selectedOrder, setSelectedOrder] = useState(null)


    return (
        <>
            <div className="flex  flex-col bg-white">
                <div className="bg-white">
                    <HeaderComponent/>
                </div>

                <div className="flex items-center justify-center flex-col md:flex-row">
                    <div className="flex items-center justify-center m-auto text-black ">
                        <span className='text-[24px] md:text-[50px] mr- mt-16 font-bold '>{step}</span>
                    </div>
                </div>
                <div className="flex items-center justify-around mt-20 border-b border-b-slate-400 pb-10">
                    <Link
                        onClick={() => setSelectedOrder("Buy a template")}
                        href="/order" className={`rounded-full ${selectedOrder === "Buy a template" ?  "text-[#EDE9C4] bg-[#9D915F]" : "text-black"} text-[12px] md:text-[24px] font-bold flex items-center  justify-center  w-[138px] h-[38px] md:w-[273px] md:h-[50px] shadow border border-slate-400`}>Buy a template</Link>
                    <Link
                        onClick={() => setSelectedOrder("Project registration")}
                        href="/order/registration"
                          className={`rounded-full ${selectedOrder === "Project registration" ?  "text-[#EDE9C4] bg-[#9D915F]" : "text-black"} text-[12px] md:text-[24px] font-bold flex items-center  justify-center  w-[170px] h-[38px] md:w-[273px] md:h-[50px] shadow border border-slate-300`}>Project registration</Link>

                </div>
                <div>
                    {children}
                </div>
            </div>
        </>
    );
}

export default Layout;