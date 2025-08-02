import React from 'react';
import HeaderComponent from "@/Component/client/layout/HeaderComponent";
import { CiSearch } from "react-icons/ci";
import Image from "next/image";
import CardBlog from "@/Component/client/module/CardBlog";
import Footer from "@/Component/client/layout/Footer";


const data = [
    {id:1 ,image:"/image/blogpagr.jpg" , title:"Dirodi Entertaining “Blog”" , dec:"Abstract Global virtual teamwork has emerged as a cornerstone of collaborative teamwork in today’s work landscape, characterized by cross-border."},
    {id:2 ,image:"/image/blogpagr.jpg" , title:"Dirodi Entertaining “Blog”" , dec:"Abstract Global virtual teamwork has emerged as a cornerstone of collaborative teamwork in today’s work landscape, characterized by cross-border."},
    {id:3 ,image:"/image/blogpagr.jpg" , title:"Dirodi Entertaining “Blog”" , dec:"Abstract Global virtual teamwork has emerged as a cornerstone of collaborative teamwork in today’s work landscape, characterized by cross-border."},
    {id:4 ,image:"/image/blogpagr.jpg" , title:"Dirodi Entertaining “Blog”" , dec:"Abstract Global virtual teamwork has emerged as a cornerstone of collaborative teamwork in today’s work landscape, characterized by cross-border."},
    {id:5 ,image:"/image/blogpagr.jpg" , title:"Dirodi Entertaining “Blog”" , dec:"Abstract Global virtual teamwork has emerged as a cornerstone of collaborative teamwork in today’s work landscape, characterized by cross-border."},
    {id:6 ,image:"/image/blogpagr.jpg" , title:"Dirodi Entertaining “Blog”" , dec:"Abstract Global virtual teamwork has emerged as a cornerstone of collaborative teamwork in today’s work landscape, characterized by cross-border."},
]

function BlogPage(props) {
    return (
        <>

            <div className="bg-white">
                <HeaderComponent/>
            </div>

            <div className="flex items-center  justify-between bg-white pt-16">
                <div className="container m-auto flex items-center flex-col justify-between   bg-white">
                    <div>
                        <h3 className="flex items-center justify-center text-center text-black text-[35px] font-bold">
                            Dirodi Entertaining
                            <br/>
                            “Blog”
                        </h3>
                    </div>
                    <div className="rounded-xl flex items-center justify-center bg-[#7676801F] mt-10 mb-10 md:w-[504px] w-[312px] h-[40px] md:h-[50px] border border-slate-300">
                       <span className="text-[#20B4C2] text-[35px] ml-2 ">
                            <CiSearch />
                        </span>
                        <input type="text" className="w-[504px] h-[50px] pl-3 bg-transparent text-black outline-0 " placeholder=""/>
                        <button type="button" className="w-[100px] md:w-[56px] h-[34px] bg-[#20B4C2] rounded-lg mr-5">Go</button>

                    </div>
                    <div className="flex items-center justify-center md:items-start md:justify-start md:flex-row flex-col mt-32 w-[312px] h-[740px] md:w-[1224px] md:h-[590px]">
                        <div className="flex items-center flex-col justify-between md:mr-10">
                            <div className="flex items-center justify-center">
                                <Image src="/image/blogpagr.jpg" alt="logo"
                                       className="w-[312px] h-[200px] m-auto md:w-[573px] md:h-[590px]  rounded-xl"
                                       width={573}
                                       height={590}/>
                            </div>

                        </div>
                        <div className="flex items-center md:items-start justify-between flex-col mt-5 md:mt-0">
                            <span className="font-bold text-black text-center md:text-start text-[20px] md:text-[40px] mb-10">
                                Dirodi Entertaining
                                <br/>
                                “Blog”
                            </span>
                            <p className="w-[312px] md:w-[609px] h-[395px] text-[14px] md:text-[22px] text-slate-500">
                                Abstract
                                Global virtual teamwork has emerged as a cornerstone of collaborative teamwork in today’s work landscape, characterized by cross-border collaboration using digital technologies. Although research has started to investigate the mechanisms underlying effective teamwork through information and communication technologies (ICTs), an often-neglected dimension is the pivotal social context within which this collaboration unfolds. To address this research gap, this study adopts a social capital lens on teamwork in proposing social capital as a multidimensional mediator between the usage of ICTs and team effectiveness. The research model.
                            </p>
                        </div>
                    </div>
                    <div className="mt-20 md:mr-auto md:ml-10 ">
                        <span className="text-[24px] md:text-[60px] font-bold text-[#090909]">Our Recent Articles</span>
                        <p className="text-slate-300 text-[12px] md:text-[22px]">Stay Informed With Our Latest Insights</p>
                    </div>
                    <div className="flex flex-wrap items-center justify-center mt-28">
                        {
                            data.map((item) => (
                                <CardBlog key={item.id} data={item}/>
                            ))
                        }
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default BlogPage;