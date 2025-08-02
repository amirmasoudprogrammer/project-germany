"use client"
import React, {useState} from 'react';

import HeaderComponent from "@/Component/client/layout/HeaderComponent";
import DetailProductItem from "@/Component/client/module/DetailProductItem";
import DescriptionDetailProducts from "@/Component/client/module/DescriptionDetailProducts";
import Discounted from "@/Component/client/template/Discounted";
import {FaChevronRight} from "react-icons/fa";
import CardComments from "@/Component/client/module/CardComments";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";





const data = [
    {
        id: 1,
        title: "Global virtual teamwork has emerged ",
        dec: " Global virtual teamwork has emergedGlobal virtual teamwork has emerged  ",
        name: "Fahime Robertson",
        image: "/image/comments2.jpg"
    },
    {
        id: 2,
        title: "Global virtual teamwork has emerged ",
        dec: " Global virtual teamwork has emergedGlobal virtual teamwork has emerged  ",
        name: "Fahime Robertson",
        image: "/image/comments.jpg"
    },
    // {
    //     id: 3,
    //     title: "Global virtual teamwork has emerged ",
    //     dec: " Global virtual teamwork has emergedGlobal virtual teamwork has emerged  ",
    //     name:"Fahime Robertson",
    //     image:"/image/comments2.jpg"
    // },
    // {
    //     id: 4,
    //     title: "Global virtual teamwork has emerged ",
    //     dec: " Global virtual teamwork has emergedGlobal virtual teamwork has emerged  ",
    //     name:"Fahime Robertson",
    //     image:"/image/comments.jpg"
    // },
    // {
    //     id: 5,
    //     title: "Global virtual teamwork has emerged ",
    //     dec: " Global virtual teamwork has emergedGlobal virtual teamwork has emerged  ",
    //     name:"Fahime Robertson",
    //     image:"/image/comments2.jpg"
    // },
]

function DetailProducts(props) {
    const [showMore, setShowMore] = useState(false);


    const toggleText = () => {
        setShowMore(!showMore);
    };
    const fullText = `Global virtual teamwork has emerged as a cornerstone of collaborative teamwork in today’s work landscape, characterized by cross-border collaboration using digital technologies. Although research has started to investigate the mechanisms underlying effective teamwork through.`.repeat(10);

    return (
        <>
            <div className="bg-white">
                <HeaderComponent/>
            </div>
            <DetailProductItem/>
            <DescriptionDetailProducts showMore={showMore} setShowMore={setShowMore} toggleText={toggleText}
                                       fullText={fullText}/>
            <Discounted image="“Similar products”.svg"/>
            <div className=" flex items-center justify-center flex-col">
                <div className="m-auto flex items-center justify-center">
                    <span className="text-black font-bold text-[44px]">Customer reviews</span>
                </div>
                <div style={{backgroundImage: "url('/image/img2.png')"}}
                     className="w-[1224px]  h-[605px] mt-10 bg-no-repeat bg-cover mb-10 rounded-lg flex items-center justify-center">
                    <div className="w-[960px]  h-[399px] bg-[#003F6C] rounded-lg p-10 flex ">
                        <div>
                            <span className="  text-white text-[40px] ">
                            What Our
                            <br/>
                             Customer Say
                        </span>
                            <p className="w-[290px] text-[22px] text-slate-300">
                                Global virtual teamwork has emerged as a cornerstone of collaborative teamwork in
                                today’s work landscape,
                            </p>
                            <p className="mt-5 flex items-center justify-start">
                                Read More
                                <FaChevronRight/>

                            </p>
                        </div>
                        <div className="flex  flex-col ">

                            <div className="flex ">
                                {

                                    data.map((item) =>
                                        <CardComments key={item.id} data={item}/>)
                                }
                            </div>



                            <div className="text-black mt-5 flex items-center justify-between w-[580px] ">
                                <div className="flex items-center">
                                    <button className="w-[24px] h-[24px] bg-[#2CBEE3] m-auto flex items-center justify-center rounded-full mr-2"><FaAngleLeft /></button>
                                    <button className="w-[24px] h-[24px] bg-[#2CBEE3] m-auto flex items-center justify-center rounded-full mr-2"><FaAngleRight /></button>

                                </div>
                                <div className="flex">
                                    <span className="mr-3 flex items-center justify-center w-[8px] h-[8px] bg-[#20B4C2] rounded-full"></span>
                                    <span className="mr-3 flex items-center justify-center w-[8px] h-[8px] bg-[#20B4C2] rounded-full"></span>
                                    <span className="mr-3 flex items-center justify-center w-[8px] h-[8px] bg-white rounded-full"></span>
                                    <span className="mr-3 flex items-center justify-center w-[8px] h-[8px] bg-[#20B4C2] rounded-full"></span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    );
}

export default DetailProducts;