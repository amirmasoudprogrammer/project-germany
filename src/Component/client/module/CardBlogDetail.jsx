import React from 'react';
import Image from "next/image";
import {IoTimeOutline} from "react-icons/io5";
import {SlCalender} from "react-icons/sl";


function CardBlogDetail(props) {
    return (
        <div className="container m-auto flex flex-col">
            <div className="flex items-center justify-between flex-col border-b border-b-slate-400 pb-10 mb-10">
                <Image src="/image/productsDitl.jpg"
                       className="rounded-3xl w-[360px] h-[267px] md:w-[1224px] md:h-[725px]" width={1224} height={725}
                       alt="image"/>
                <div className="mt-5 hidden md:flex items-center justify-between w-[1224px]">
                    <div className="flex items-center">
                        <span className="text-black text-[22px] font-bold">
                        Blog details
                    </span>
                        <div className="flex items-center justify-center text-black ml-16">
                            <span className="text-[20px]">   <IoTimeOutline/></span>

                            <span className="text-[12px] ml-2">10 mins read </span>
                        </div>
                    </div>
                    <div className="flex items-center justify-center mr-14">
                        <p className="text-black mr-5"><SlCalender/></p>
                        <span className="text-[#090909] text-[14px]">20 Apr 2024</span>
                    </div>
                </div>
                <div className="flex md:hidden flex-col items-start pl-5 pt-5 w-[360px]">
                    <div className="flex items-center justify-between">
                                 <span className="text-black text-[15px] md:text-[32px] font-bold">
                                  Blog details
                                </span>
                        <div className="flex items-center  md:justify-center ml-24">
                            <p className="text-black mr-2"><SlCalender/></p>
                            <span className="text-[#090909] text-[12px]">20 Apr 2024</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-center text-black mt-3 mb-3">
                        <span className="text-[20px]"><IoTimeOutline/></span>

                        <span className="text-[12px] ml-2">10 mins read </span>
                    </div>
                </div>
                <div className="w-[312px]  md:w-[1224px]">
                    <p className="text-[#1B1F26B8] mt-5">
                        Abstract
                        <br/>
                        Global virtual teamwork has emerged as a cornerstone of collaborative teamwork in today’s work
                        landscape, characterized by cross-border collaboration using digital technologies. Although
                        research has started to investigate the mechanisms underlying effective teamwork through
                        information and communication technologies (ICTs), an often-neglected dimension is the pivotal
                        social context within which this collaboration unfolds. To address this research gap, this study
                        adopts a social capital lens on teamwork in proposing social capital as a multidimensional
                        mediator between the usage of ICTs and team effectiveness. The research model. Abstract
                        Global virtual teamwork has emerged as a cornerstone of collaborative teamwork in today’s work
                        landscape, characterized by cross-border collaboration using digital technologies. Although
                        research has started to investigate the mechanisms underlying effective teamwork through
                        information and communication technologies (ICTs), an often-neglected dimension is the pivotal
                        social context within which this collaboration unfolds. To address this research gap, this study
                        adopts a social capital lens on teamwork in proposing social capital as a multidimensional
                        mediator between the usage of ICTs and team effectiveness. The research model. Abstract
                        Global virtual teamwork has emerged as a cornerstone of collaborative teamwork in today’s work
                        landscape, characterized by cross-border collaboration using digital technologies. Although
                        research has started to investigate the mechanisms underlying effective teamwork through
                        information and communication technologies (ICTs), an often-neglected dimension is the pivotal
                        social context within which this collaboration unfolds. To address this research gap, this study
                        adopts a social capital lens on teamwork in proposing social capital as a multidimensional
                        mediator between the usage of ICTs and team effectiveness. The research model. Abstract
                        Global virtual teamwork has emerged as a cornerstone of collaborative teamwork in today’s work
                        landscape, characterized by cross-border collaboration using digital technologies. Although
                        research has started to investigate the mechanisms underlying effective teamwork through
                        information and communication technologies (ICTs), an often-neglected dimension is the pivotal
                        social context within which this collaboration unfolds. To address this research gap, this study
                        adopts a social capital lens on teamwork in proposing social capital as a multidimensional
                        mediator between the usage of ICTs and team effectiveness. The research model.
                    </p>
                </div>
            </div>
            <div className="flex items-center w-[1224px] mb-10 border-b border-b-slate-500 pb-8">
                <div className="w-[312px] md:w-[1224px] flex items-center md:items-start  md:justify-between flex-col md:flex-row">
                    <div className="">
                        <Image src="/image/img2.png"
                               className="w-[308px] h-[226px] md:w-[650px] md:h-[365px] rounded-3xl ml-10 m-auto flex items-center justify-center"
                               width={495} height={364} alt="image"/>

                    </div>
                    <div className="mt-5 ml-16 flex items-center justify-center md:items-start md:justify-between w-full flex-col ">
                        <div className="hidden md:flex md:items-center ml-5 justify-center md:justify-between w-[312px] md:w-[697px]">
                            <div className="flex items-center ">
                                <span className="text-black text-[15px]  md:text-[32px] font-bold">
                                  Blog details
                                </span>
                                <div className="flex items-center justify-center text-black ml-16">
                                    <span className="text-[20px]">   <IoTimeOutline/></span>

                                    <span className="text-[12px] ml-2">10 mins read </span>
                                </div>
                            </div>
                            <div className="flex items-center  md:justify-center ml-24">
                                <p className="text-black mr-2"><SlCalender/></p>
                                <span className="text-[#090909] text-[14px]">20 Apr 2024</span>
                            </div>
                        </div>
                        <div className="flex md:hidden flex-col items-start  pl-5">
                            <div className="flex items-center justify-between">
                                 <span className="text-black text-[15px] md:text-[32px] font-bold">
                                  Blog details
                                </span>
                                <div className="flex items-center  md:justify-center ml-24">
                                    <p className="text-black mr-2"><SlCalender/></p>
                                    <span className="text-[#090909] text-[12px]">20 Apr 2024</span>
                                </div>
                            </div>
                            <div className="flex items-center justify-center text-black mt-3 mb-3">
                                <span className="text-[20px]"><IoTimeOutline/></span>

                                <span className="text-[12px] ml-2">10 mins read </span>
                            </div>
                        </div>
                        <div className=" text-[#1B1F26B8] md:mt-10">
                            <p className="ml-5">
                                Abstract
                                Global virtual teamwork has emerged as a cornerstone of collaborative teamwork in
                                today’s work landscape, characterized by cross-border collaboration using digital
                                technologies. Although research has started to investigate the mechanisms underlying
                                effective teamwork through information and communication technologies (ICTs), an
                                often-neglected dimension is the pivotal social context within which this collaboration
                                unfolds. To address this research gap, this study adopts a social capital lens on
                                teamwork in proposing social capital as a multidimensional mediator between the usage of
                                ICTs and team effectiveness. The usage of ICTs and team effectiveness. The research
                                model. Abstract

                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between flex-col border-b border-b-slate-400 pb-10 mb-10">
                <Image src="/image/Group 8.png" className="rounded-3xl w-[312px] h-[184px] md:w-[940px] md:h-[481px]"
                       width={940} height={481} alt="image"/>
                <div className="mt-5 hidden md:flex items-center justify-between w-[940px]">
                    <div className="flex items-center">
                        <span className="text-black text-[22px] font-bold">
                        Blog details
                    </span>
                        <div className="flex items-center justify-center text-black ml-16">
                            <span className="text-[20px]">   <IoTimeOutline/></span>

                            <span className="text-[12px] ml-2">10 mins read </span>
                        </div>
                    </div>
                    <div className="flex items-center justify-center mr-14">
                        <p className="text-black mr-5"><SlCalender/></p>
                        <span className="text-[#090909] text-[14px]">20 Apr 2024</span>
                    </div>
                </div>
                <div className="flex md:hidden flex-col items-start pl-8 pt-5 w-[360px]">
                    <div className="flex items-center justify-between">
                                 <span className="text-black text-[15px] md:text-[32px] font-bold">
                                  Blog details
                                </span>
                        <div className="flex items-center  md:justify-center ml-24">
                            <p className="text-black mr-2"><SlCalender/></p>
                            <span className="text-[#090909] text-[12px]">20 Apr 2024</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-center text-black mt-3 mb-3">
                        <span className="text-[20px]"><IoTimeOutline/></span>

                        <span className="text-[12px] ml-2">10 mins read </span>
                    </div>
                </div>
                <div className="w-[312px] md:w-[940px]">
                    <p className="text-[#1B1F26B8] mt-5">
                        Abstract
                        <br/>
                        Global virtual teamwork has emerged as a cornerstone of collaborative teamwork in today’s work
                        landscape, characterized by cross-border collaboration using digital technologies. Although
                        research has started to investigate the mechanisms underlying effective teamwork through
                        information and communication technologies (ICTs), an often-neglected dimension is the pivotal
                        social context within which this collaboration unfolds. To address this research gap, this study
                        adopts a social capital lens on teamwork in proposing social capital as a multidimensional
                        mediator between the usage of ICTs and team effectiveness. The research model. Abstract
                        Global virtual teamwork has emerged as a cornerstone of collaborative teamwork in today’s work
                        landscape, characterized by cross-border collaboration using digital technologies. Although
                        research has started to investigate the mechanisms underlying effective teamwork through
                        information and communication technologies (ICTs), an often-neglected dimension is the pivotal
                        social context within which this collaboration unfolds. To address this research gap, this study
                        adopts a social capital lens on teamwork in proposing social capital as a multidimensional
                        mediator between the usage of ICTs and team effectiveness. The research model. Abstract
                        Global virtual teamwork has emerged as a cornerstone of collaborative teamwork in today’s work
                        landscape, characterized by cross-border collaboration using digital technologies. Although
                        research has started to investigate the mechanisms underlying effective teamwork through
                        information and communication technologies (ICTs), an often-neglected dimension is the pivotal
                        social context within which this collaboration unfolds. To address this research gap, this study
                        adopts a social capital lens on teamwork in proposing social capital as a multidimensional
                        mediator between the usage of ICTs and team effectiveness. The research model. Abstract
                        Global virtual teamwork has emerged as a cornerstone of collaborative teamwork in today’s work
                        landscape, characterized by cross-border collaboration using digital technologies. Although
                        research has started to investigate the mechanisms underlying effective teamwork through
                        information and communication technologies (ICTs), an often-neglected dimension is the pivotal
                        social context within which this collaboration unfolds. To address this research gap, this study
                        adopts a social capital lens on teamwork in proposing social capital as a multidimensional
                        mediator between the usage of ICTs and team effectiveness. The research model.
                    </p>
                </div>
            </div>
            <div className="flex items-center w-[1224px] mb-10 border-b border-b-slate-500 pb-8">
                <div className="w-[312px] md:w-[1224px] flex items-center md:items-start  md:justify-between flex-col-reverse md:flex-row">
                    <div className="mt-5 ml-16 flex items-center justify-center md:items-start md:justify-between w-full flex-col ">
                        <div className="hidden md:flex md:items-center ml-5 justify-center md:justify-between w-[312px] md:w-[697px]">
                            <div className="flex items-center ">
                                <span className="text-black text-[15px]  md:text-[32px] font-bold">
                                  Blog details
                                </span>
                                <div className="flex items-center justify-center text-black ml-16">
                                    <span className="text-[20px]">   <IoTimeOutline/></span>

                                    <span className="text-[12px] ml-2">10 mins read </span>
                                </div>
                            </div>
                            <div className="flex items-center  md:justify-center ml-24">
                                <p className="text-black mr-2"><SlCalender/></p>
                                <span className="text-[#090909] text-[14px]">20 Apr 2024</span>
                            </div>
                        </div>
                        <div className="flex md:hidden flex-col items-start  pl-5">
                            <div className="flex items-center justify-between">
                                 <span className="text-black text-[15px] md:text-[32px] font-bold">
                                  Blog details
                                </span>
                                <div className="flex items-center  md:justify-center ml-24">
                                    <p className="text-black mr-2"><SlCalender/></p>
                                    <span className="text-[#090909] text-[12px]">20 Apr 2024</span>
                                </div>
                            </div>
                            <div className="flex items-center justify-center text-black mt-3 mb-3">
                                <span className="text-[20px]"><IoTimeOutline/></span>

                                <span className="text-[12px] ml-2">10 mins read </span>
                            </div>
                        </div>
                        <div className=" text-[#1B1F26B8] md:mt-10">
                            <p className="ml-5">
                                Abstract
                                Global virtual teamwork has emerged as a cornerstone of collaborative teamwork in
                                today’s work landscape, characterized by cross-border collaboration using digital
                                technologies. Although research has started to investigate the mechanisms underlying
                                effective teamwork through information and communication technologies (ICTs), an
                                often-neglected dimension is the pivotal social context within which this collaboration
                                unfolds. To address this research gap, this study adopts a social capital lens on
                                teamwork in proposing social capital as a multidimensional mediator between the usage of
                                ICTs and team effectiveness. The usage of ICTs and team effectiveness. The research
                                model. Abstract

                            </p>
                        </div>
                    </div>
                    <div className="">
                        <Image src="/image/Group 9.png"
                               className="w-[308px] h-[226px] md:w-[650px] md:h-[365px] rounded-3xl ml-10 m-auto flex items-center justify-center"
                               width={495} height={364} alt="image"/>

                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between flex-col border-b border-b-slate-400 pb-10 mb-10">
                <Image src="/image/Group 10.png" className="rounded-3xl w-[360px] h-[267px] md:w-[1224px] md:h-[429px]" width={1224} height={429} alt="image"/>
                <div className="mt-5 hidden md:flex items-center justify-between w-[1224px]">
                    <div className="flex items-center">
                        <span className="text-black text-[22px] font-bold">
                        Blog details
                    </span>
                        <div className="flex items-center justify-center text-black ml-16">
                            <span className="text-[20px]">   <IoTimeOutline/></span>

                            <span className="text-[12px] ml-2">10 mins read </span>
                        </div>
                    </div>
                    <div className="flex items-center justify-center mr-14">
                        <p className="text-black mr-5"><SlCalender/></p>
                        <span className="text-[#090909] text-[14px]">20 Apr 2024</span>
                    </div>
                </div>
                <div className="flex md:hidden flex-col items-start pl-5 pt-5 w-[360px]">
                    <div className="flex items-center justify-between">
                                 <span className="text-black text-[15px] md:text-[32px] font-bold">
                                  Blog details
                                </span>
                        <div className="flex items-center  md:justify-center ml-24">
                            <p className="text-black mr-2"><SlCalender/></p>
                            <span className="text-[#090909] text-[12px]">20 Apr 2024</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-center text-black mt-3 mb-3">
                        <span className="text-[20px]"><IoTimeOutline/></span>

                        <span className="text-[12px] ml-2">10 mins read </span>
                    </div>
                </div>
                <div className="w-[312px]  md:w-[1224px]">
                    <p className="text-[#1B1F26B8] mt-5">
                        Abstract
                        <br/>
                        Global virtual teamwork has emerged as a cornerstone of collaborative teamwork in today’s work
                        landscape, characterized by cross-border collaboration using digital technologies. Although
                        research has started to investigate the mechanisms underlying effective teamwork through
                        information and communication technologies (ICTs), an often-neglected dimension is the pivotal
                        social context within which this collaboration unfolds. To address this research gap, this study
                        adopts a social capital lens on teamwork in proposing social capital as a multidimensional
                        mediator between the usage of ICTs and team effectiveness. The research model. Abstract
                        Global virtual teamwork has emerged as a cornerstone of collaborative teamwork in today’s work
                        landscape, characterized by cross-border collaboration using digital technologies. Although
                        research has started to investigate the mechanisms underlying effective teamwork through
                        information and communication technologies (ICTs), an often-neglected dimension is the pivotal
                        social context within which this collaboration unfolds. To address this research gap, this study
                        adopts a social capital lens on teamwork in proposing social capital as a multidimensional
                        mediator between the usage of ICTs and team effectiveness. The research model. Abstract
                        Global virtual teamwork has emerged as a cornerstone of collaborative teamwork in today’s work
                        landscape, characterized by cross-border collaboration using digital technologies. Although
                        research has started to investigate the mechanisms underlying effective teamwork through
                        information and communication technologies (ICTs), an often-neglected dimension is the pivotal
                        social context within which this collaboration unfolds. To address this research gap, this study
                        adopts a social capital lens on teamwork in proposing social capital as a multidimensional
                        mediator between the usage of ICTs and team effectiveness. The research model. Abstract
                        Global virtual teamwork has emerged as a cornerstone of collaborative teamwork in today’s work
                        landscape, characterized by cross-border collaboration using digital technologies. Although
                        research has started to investigate the mechanisms underlying effective teamwork through
                        information and communication technologies (ICTs), an often-neglected dimension is the pivotal
                        social context within which this collaboration unfolds. To address this research gap, this study
                        adopts a social capital lens on teamwork in proposing social capital as a multidimensional
                        mediator between the usage of ICTs and team effectiveness. The research model.
                    </p>
                </div>
            </div>



        </div>
    );
}

export default CardBlogDetail;