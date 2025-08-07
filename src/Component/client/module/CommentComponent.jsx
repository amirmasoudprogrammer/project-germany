import React from 'react';
import {FaChevronRight} from "react-icons/fa";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper/modules";
import CardComments from "@/Component/client/module/CardComments";
import {FaAngleLeft, FaAngleRight} from "react-icons/fa6";

function CommentComponent({data}) {
    return (
       <>
           <div className="hidden md:flex items-center justify-center flex-col ">
               <div className="m-auto flex items-center justify-center">
                   <span className="text-black font-bold text-[44px]">Customer reviews</span>
               </div>
               <div
                   style={{backgroundImage: "url('/image/img2.png')"}}
                   className="w-[1224px] h-[605px] mt-10 bg-no-repeat bg-cover mb-10 rounded-lg flex items-center justify-center"
               >
                   <div className="w-[960px] h-[599px] flex items-center p-20 overflow-hidden">
                       <div className=" h-[399px] bg-[#003F6C]  rounded-lg p-10 flex ">
                           <div>
                        <span className="text-white text-[40px]">
                            What Our
                            <br/>
                            Customer Say
                        </span>
                               <p className="w-[290px] text-[22px] text-slate-300">
                                   Global virtual teamwork has emerged as a cornerstone of collaborative teamwork in
                                   today’s work landscape,
                               </p>
                               <p className="mt-5 flex items-center justify-start text-white cursor-pointer hover:underline">
                                   Read More
                                   <FaChevronRight className="ml-2"/>
                               </p>
                           </div>

                           <div className="flex relative bottom-40 flex-col  pt-36 overflow-hidden h-[500px]">
                               <Swiper
                                   modules={[Navigation, Pagination]}
                                   slidesPerView={2}
                                   spaceBetween={20}
                                   loop={true}
                                   navigation={{
                                       nextEl: '.custom-next',
                                       prevEl: '.custom-prev'
                                   }}
                                   pagination={{clickable: true, el: '.custom-pagination'}}
                                   className="w-[580px]  !overflow-visible  "
                               >
                                   {data.map((item) => (
                                       <SwiperSlide key={item.id} className="">
                                           <CardComments data={item}/>
                                       </SwiperSlide>
                                   ))}
                               </Swiper>

                               <div className="text-black mt-5 flex items-center justify-between w-[580px]">
                                   <div className="flex items-center">
                                       <button
                                           className="custom-prev w-[24px] h-[24px] bg-[#2CBEE3] flex items-center justify-center rounded-full mr-2">
                                           <FaAngleLeft/>
                                       </button>
                                       <button
                                           className="custom-next w-[24px] h-[24px] bg-[#2CBEE3] flex items-center justify-center rounded-full mr-2">
                                           <FaAngleRight/>
                                       </button>
                                   </div>
                                   <div className="custom-pagination flex space-x-2"/>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
           <div className="flex md:hidden items-center justify-center flex-col ">
               <div className="m-auto flex items-center justify-center">
                   <span className="text-black font-bold text-[24px] md:text-[44px]">Customer reviews</span>
               </div>
               <div style={{backgroundImage: "url('/image/img2.png')"}}
                    className="w-[360px] h-[523px] mt-10 bg-no-repeat bg-cover mb-10 rounded-lg flex items-center justify-center">
                   <div className="w-[960px] h-[599px] flex items-center justify-center p-20 overflow-hidden">
                       <div className="w-[312px] flex-col h-[450px] bg-[#003F6C] flex items-start justify-center  rounded-lg p-10 flex ">
                           <div>
                             <span className="text-white text-[20px] md:text-[40px]">
                            What Our
                            <br/>
                            Customer Say
                        </span>
                               <p className="w-[290px] text-[14px] md:text-[22px] text-slate-300">
                                   Global virtual teamwork has emerged as a cornerstone of collaborative teamwork in
                                   today’s work landscape,
                               </p>
                               <p className="mt-5 flex items-center justify-start text-white cursor-pointer hover:underline">
                                   Read More
                                   <FaChevronRight className="ml-2"/>
                               </p>
                           </div>

                           <div className="flex relative w-[280px] m-auto right-6 mt-10  ">
                               <Swiper
                                   modules={[Navigation, Pagination]}
                                   slidesPerView={1}
                                   spaceBetween={20}
                                   loop={true}
                                   navigation={{
                                       nextEl: '.mobile-next',
                                       prevEl: '.mobile-prev'
                                   }}
                                   pagination={{clickable: true, el: '.custom-pagination'}}
                                   className="w-[280px]  !overflow-visible  "
                               >
                                   {data.map((item) => (
                                       <SwiperSlide key={item.id} className="">
                                           <CardComments data={item}/>
                                       </SwiperSlide>
                                   ))}
                               </Swiper>

                           </div>
                           <div className=" flex w-[200px] mt-2">
                               <button
                                   className="mobile-prev w-[24px] h-[24px] bg-[#2CBEE3] flex items-center justify-center rounded-full mr-2">
                                   <FaAngleLeft/>
                               </button>
                               <button
                                   className="mobile-next w-[24px] h-[24px] bg-[#2CBEE3] flex items-center justify-center rounded-full mr-2">
                                   <FaAngleRight/>
                               </button>
                           </div>
                       </div>
                   </div>

               </div>
           </div>
       </>
    );
}

export default CommentComponent;