import React from 'react';
import HeaderComponent from "@/Component/client/layout/HeaderComponent";
import CardBlogDetail from "@/Component/client/module/CardBlogDetail";

function DetailBlog(props) {
    return (
        <>
            <div className="bg-white">
                <HeaderComponent/>
            </div>
            <div className="flex items-center justify-between bg-white pt-16">
                <div className="container m-auto flex items-center flex-col justify-between  bg-white">
                    <div className="flex items-center justify-center flex-col text-center">
                        <h3 className="flex items-center justify-center text-center text-black text-[35px] font-bold">
                            Blog details
                        </h3>
                        <p className="w-[312px] md:w-[558px] h-[119px] text-[16px] md:text-[20px] text-[#1B1F26B8] mt-10">
                            Abstract
                            <br/>
                            Global virtual teamwork has emerged as a cornerstone of collaborative teamwork in today’s
                            work landscape,
                        </p>
                    </div>
                    <CardBlogDetail/>
                </div>
            </div>

        </>
    );
}

export default DetailBlog;