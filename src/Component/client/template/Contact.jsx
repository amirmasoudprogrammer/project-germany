import React from 'react';
import HeaderComponent from "@/Component/client/layout/HeaderComponent";

function Contact(props) {
    return (
        <>
           <div className="bg-white">
               <HeaderComponent/>
           </div>
            <div className="hidden md:flex items-center justify-between bg-white h-full ">
                <div className="container m-auto flex items-center justify-between">
                    <div className="w-[589px] ">
                        <h3 className="text-black text-[50px] font-bold">Contact Us</h3>
                        <p className="text-[#1B1F26B8] font-medium">
                            To request aquoute or want to meet up for coffee contact me
                            directly or fill out the from and i will get back to you soon
                        </p>
                        <form className="mt-16">
                            <div className="flex items-start flex-col justify-start">
                                <label className="text-black ">Your Name</label>
                                <input type="text"
                                       className="mt-2 w-[409px] h-[40px] pl-5 rounded-xl bg-[#086B68] outline-0"/>
                            </div>
                            <div className="flex items-start flex-col justify-start mt-5">
                                <label className="text-black ">Your Email</label>
                                <input type="text"
                                       className="mt-2 w-[409px] h-[40px] pl-5 rounded-xl bg-[#086B68] outline-0"/>
                            </div>
                            <div className="flex items-start flex-col justify-start mt-5">
                                <label className="text-black ">Your Message</label>
                                <textarea rows={4} className="mt-2 w-[409px] pl-5 rounded-xl bg-[#086B68] outline-0"/>
                            </div>
                            <button className="w-[183px] h-[48px] bg-[#9D915F] mt-10 mb-10 rounded">Send Message</button>

                        </form>
                    </div>
                    <div>
                        <video
                            src="/video/6NhwxqvZdmx594S10F.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-[676px] h-[820px]"
                        />
                    </div>
                </div>
            </div>
            <div className="flex md:hidden bg-white h-full mt-2">
                <div className="container m-auto flex items-center justify-between flex-col">
                    <div className="text-center pt-8">
                        <h3 className="text-black  text-[15px] font-bold">Contact Us</h3>
                        <p className="text-[#1B1F26B8] font-medium">
                            To request aquoute or want to meet up for coffee contact me
                            directly or fill out the from and i will get back to you soon
                        </p>
                        <div>
                            <video
                                src="/video/6NhwxqvZdmx594S10F.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-[432px] h-[393px]"
                            />
                        </div>
                    </div>
                    <form className="">
                        <div className="flex items-start flex-col justify-start">
                            <label className="text-black ">Your Name</label>
                            <input type="text"
                                   className="mt-2 w-[312px] h-[40px] pl-5 rounded-xl bg-[#086B68] outline-0"/>
                        </div>
                        <div className="flex items-start flex-col justify-start mt-5">
                            <label className="text-black ">Your Email</label>
                            <input type="text"
                                   className="mt-2 w-[312px] h-[40px] pl-5 rounded-xl bg-[#086B68] outline-0"/>
                        </div>
                        <div className="flex items-start flex-col justify-start mt-5">
                            <label className="text-black ">Your Message</label>
                            <textarea rows={4} className="mt-2 w-[312px] pl-5 rounded-xl bg-[#086B68] outline-0"/>
                        </div>
                        <button className="w-[312px] h-[48px] bg-[#9D915F] mt-10 mb-10 rounded">Send Message</button>
                    </form>
                </div>
            </div>


        </>
    );
}

export default Contact;