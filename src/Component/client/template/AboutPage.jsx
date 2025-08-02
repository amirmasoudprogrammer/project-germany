import React from 'react';
import Image from "next/image";
import HeaderComponent from "@/Component/client/layout/HeaderComponent";
import CardAbout from "@/Component/client/module/CardAbout";
import Footer from "@/Component/client/layout/Footer";

function AboutPage(props) {

    const result = [
        {id: 1, image: "/image/About.png", name: "amirmasoud", job: "frontEnd"},
        {id: 2, image: "/image/About.png", name: "amirmasoud", job: "frontEnd"},
        {id: 3, image: "/image/About.png", name: "amirmasoud", job: "frontEnd"},
        {id: 4, image: "/image/About.png", name: "amirmasoud", job: "frontEnd"},
        {id: 5, image: "/image/About.png", name: "amirmasoud", job: "frontEnd"},
        {id: 6, image: "/image/About.png", name: "amirmasoud", job: "frontEnd"},
    ]

    return (
        <>
            <HeaderComponent/>
            <div className=''>
                <div className="container flex items-center justify-center m-auto flex-col">
                    <div className="text-center  mb-3 mt-10 md:mt-0">
                        <span className="text-[#090909] text-[30px] font-medium">About  Us</span>
                        <p className="text-[16px] md:text-[22px] mt-5 text-[#1B1F26B8] w-[312px] md:w-[782px]">
                            Abstract
                            <br/>
                            Global virtual teamwork has emerged as a cornerstone of collaborative teamwork in today’s
                            work landscape, characterized by cross-border collaboration using digital technologies.
                            Although research has started to investigate the mechanisms underlying effective teamwork
                            through.
                        </p>
                    </div>
                    <div>
                        <Image src="/image/about.jpg" alt="logo"
                               className="md:w-[782px] md:h-[404px] w-[312px] h-[189px] object-cover rounded-lg"
                               width={782} height={404}/>

                    </div>
                    <div>
                        <p className="text-center text-[16px] md:text-[22px] mt-5 text-black md:w-[782px] w-[312px]">
                            Abstract <br/>

                            Global virtual teamwork has emerged as a cornerstone of collaborative teamwork in today’s
                            work landscape, characterized by cross-border collaboration using digital technologies.
                            Although research has started to investigate the mechanisms underlying effective teamwork
                            through.
                        </p>

                    </div>
                    <div className="flex items-center justify-center mt-10 mb-10 md:w-[617px] w-[312px] h-[85px] border border-[#2CBEE3] rounded-lg">
                        <div className="flex items-center flex-col justify-center text-black font-bold border-r border-r-[#2CBEE3] pr-3 md:pr-10">
                            <span className="text-[12px] md:text-[16px]">
                                500+
                          </span>
                            <span className="text-[12px] md:text-[16px]">Projects completed</span>
                        </div>
                        <div className="flex items-center flex-col justify-center text-black font-bold border-r border-r-[#2CBEE3] pl-3 md:pr-10 md:pl-10">
                            <span className="text-[12px] md:text-[16px]">  600+</span>
                            <span className="text-[12px] md:text-[16px]">Happy clients</span>
                        </div>
                        <div className="flex items-center flex-col justify-center text-black font-bold pl-3 md:pl-10">
                            <span className="text-[12px] md:text-[16px]"> 50%</span>
                            <span className="text-[12px] md:text-[16px]">Happy clients</span>
                        </div>
                    </div>
                    <div>
                        <p className="text-center text-[16px] md:text-[22px] mt-5 text-black md:w-[782px] w-[312px] ">
                            Abstract
                            <br/>
                            Global virtual teamwork has emerged as a cornerstone of collaborative teamwork in today’s
                            work landscape, characterized by cross-border collaboration using digital technologies.
                            Although research has started to investigate the mechanisms underlying effective teamwork
                            through.
                        </p>

                    </div>
                </div>
                <div className="container m-auto mt-32 flex items-center justify-center  flex-col ">
                    <div className="mr-auto ">
                        <span className="text-black font-bold text-[24px] pl-5 md:pl-0 md:text-[60px]">Our Team</span>
                    </div>

                    <div className="flex items-center justify-center md:justify-between  flex-wrap  mt-14">
                        {
                            result.map((item) => <CardAbout key={item.id} data={item}/>)
                        }
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default AboutPage;