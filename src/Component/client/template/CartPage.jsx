"use client"
import React from 'react';
import {CiCircleChevDown} from "react-icons/ci";
import {IoIosInformationCircleOutline} from "react-icons/io";
import 'swiper/css';
import 'swiper/css/pagination';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Link from "next/link";


function CartPage(props) {
    return (
        <>
            <div className="hidden md:flex items-center bg-white min-h-screen w-full flex-col justify-start py-10">
                {/* Header Text */}
                <div className="container m-auto flex flex-col items-center justify-center mt-10">
                    <span className="text-[36px] md:text-[48px] font-bold text-gray-800 text-center leading-snug">
                        The right package for every project.
                    </span>
                    <p className="w-[90%] md:w-[862px] text-[#1B1F26B8] text-center mt-3 text-base leading-relaxed">
                        Start with a free trial without obligation or choose a package with powerful additional
                        functions
                        that will make you even more successful.
                    </p>
                </div>

                {/* Package Card */}
                <div className="flex items-center justify-center mt-10">
                    <div className=" mr-4 w-[302px] min-h-[686px] rounded-xl overflow-hidden group hover:scale-105 transition-all">
                        <div
                            className="border  border-slate-400 w-full h-[426px] group-hover:h-[550px] group-focus:h-[550px] transition-all text-black group-hover:bg-[#086B68] group-focus:bg-[#086B68] text-white px-5 py-6 flex  flex-col justify-between rounded-xl">
                            {/* Header */}
                            <div
                                className="flex flex-col items-center  text-[#090909] group-hover:text-[#EDE9C4] group-focus:text-[#EDE9C4]">
                                <h3 className="text-xl font-semibold mb-2 ">Plus</h3>
                                <p className="text-sm opacity-80 ">
                                    Global virtual teamwork has emerged as a cornerstone of
                                </p>
                            </div>

                            {/* Included Services */}
                            <div
                                className="mt-5 flex items-center border-b border-b-[#EDE9C4] pb-2 text-[#090909] group-hover:text-[#EDE9C4] group-focus:text-[#EDE9C4]">
                                <div className=" text-[25px] mr-0 ">
                                    <CiCircleChevDown/>
                                </div>
                                <p className="text-[12px] font-medium mb-1  ml-1">All services of the starter package
                                    included</p>

                            </div>

                            {/* Features List */}
                            <div className="mt-4 text-[#090909] group-hover:text-[#EDE9C4] group-focus:text-[#EDE9C4]">
                                <p className="font-semibold mb-3">Also included:</p>
                                <div className="flex flex-col gap-3 text-sm">
                                    {[...Array(4)].map((_, i) => (
                                        <div key={i} className="flex items-start gap-2 ">
                                            <p>.Create text and images with AI</p>
                                            <span className="text-lg mt-1 ml-10"><IoIosInformationCircleOutline/></span>

                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Price Section */}
                            <div
                                className="mt-6 flex items-center text-[#090909] group-hover:text-[#EDE9C4] group-focus:text-[#EDE9C4]">
                                <div
                                    className="text-[12px] flex items-center justify-center rounded font-bold w-[69px] h-[22px] bg-[#9D915F]">Save
                                    25%
                                </div>
                                <div className="text-2xl font-bold ml-3">12 €/month</div>
                            </div>

                            {/* Optional */}
                            <div
                                className="mt-2 text-white text-3xl opacity-80 text-[#090909] group-hover:text-[#EDE9C4] group-focus:text-[#EDE9C4]">6$
                            </div>
                        </div>

                        <div
                            className="w-[302px] h-[48px] border-t border-gray-100 flex items-center justify-center bg-[#086B68] mt-5 rounded-full">
                            <Link href="/cart/Cartorder" className="text-white font-medium hover:underline text-sm">Choose</Link>
                        </div>
                        <div
                            className="w-[302px] h-[48px] border border-gray-500 flex items-center justify-center  mt-5 rounded">
                            <button className="text-black font-medium hover:underline text-sm">Website without shop
                            </button>
                        </div>
                    </div>
                    <div className=" mr-4 w-[302px] min-h-[686px] rounded-xl overflow-hidden group hover:scale-105 transition-all">
                        <div className="border  border-slate-400 w-full h-[426px] group-hover:h-[550px] group-focus:h-[550px] transition-all text-black group-hover:bg-[#086B68] group-focus:bg-[#086B68] text-white px-5 py-6 flex  flex-col justify-between rounded-xl">
                            {/* Header */}
                            <div
                                className="flex flex-col items-center  text-[#090909] group-hover:text-[#EDE9C4] group-focus:text-[#EDE9C4]">
                                <h3 className="text-xl font-semibold mb-2 ">Plus</h3>
                                <p className="text-sm opacity-80 ">
                                    Global virtual teamwork has emerged as a cornerstone of
                                </p>
                            </div>

                            {/* Included Services */}
                            <div
                                className="mt-5 flex items-center border-b border-b-[#EDE9C4] pb-2 text-[#090909] group-hover:text-[#EDE9C4] group-focus:text-[#EDE9C4]">
                                <div className=" text-[25px] mr-0 ">
                                    <CiCircleChevDown/>
                                </div>
                                <p className="text-[12px] font-medium mb-1  ml-1">All services of the starter package
                                    included</p>

                            </div>

                            {/* Features List */}
                            <div className="mt-4 text-[#090909] group-hover:text-[#EDE9C4] group-focus:text-[#EDE9C4]">
                                <p className="font-semibold mb-3">Also included:</p>
                                <div className="flex flex-col gap-3 text-sm">
                                    {[...Array(4)].map((_, i) => (
                                        <div key={i} className="flex items-start gap-2 ">
                                            <p>.Create text and images with AI</p>
                                            <span className="text-lg mt-1 ml-10"><IoIosInformationCircleOutline/></span>

                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Price Section */}
                            <div
                                className="mt-6 flex items-center text-[#090909] group-hover:text-[#EDE9C4] group-focus:text-[#EDE9C4]">
                                <div
                                    className="text-[12px] flex items-center justify-center rounded font-bold w-[69px] h-[22px] bg-[#9D915F]">Save
                                    25%
                                </div>
                                <div className="text-2xl font-bold ml-3">12 €/month</div>
                            </div>

                            {/* Optional */}
                            <div
                                className="mt-2 text-white text-3xl opacity-80 text-[#090909] group-hover:text-[#EDE9C4] group-focus:text-[#EDE9C4]">6$
                            </div>
                        </div>
                        <div className="w-[302px] h-[48px] border-t border-gray-100 flex items-center justify-center bg-[#086B68] mt-5 rounded-full">
                            <Link href="/cart/selection" className="text-white font-medium hover:underline text-sm">Choose</Link>
                        </div>
                        <div className="w-[302px] h-[48px] border border-gray-500 flex items-center justify-center  mt-5 rounded">
                            <button className="text-black font-medium hover:underline text-sm">Website without shop
                            </button>
                        </div>
                    </div>
                    <div className=" mr-4 w-[302px] min-h-[686px] rounded-xl overflow-hidden group hover:scale-105 transition-all">
                        <div
                            className="border  border-slate-400 w-full h-[426px] group-hover:h-[550px] group-focus:h-[550px] transition-all text-black group-hover:bg-[#086B68] group-focus:bg-[#086B68] text-white px-5 py-6 flex  flex-col justify-between rounded-xl">
                            {/* Header */}
                            <div
                                className="flex flex-col items-center  text-[#090909] group-hover:text-[#EDE9C4] group-focus:text-[#EDE9C4]">
                                <h3 className="text-xl font-semibold mb-2 ">Plus</h3>
                                <p className="text-sm opacity-80 ">
                                    Global virtual teamwork has emerged as a cornerstone of
                                </p>
                            </div>

                            {/* Included Services */}
                            <div
                                className="mt-5 flex items-center border-b border-b-[#EDE9C4] pb-2 text-[#090909] group-hover:text-[#EDE9C4] group-focus:text-[#EDE9C4]">
                                <div className=" text-[25px] mr-0 ">
                                    <CiCircleChevDown/>
                                </div>
                                <p className="text-[12px] font-medium mb-1  ml-1">All services of the starter package
                                    included</p>

                            </div>

                            {/* Features List */}
                            <div className="mt-4 text-[#090909] group-hover:text-[#EDE9C4] group-focus:text-[#EDE9C4]">
                                <p className="font-semibold mb-3">Also included:</p>
                                <div className="flex flex-col gap-3 text-sm">
                                    {[...Array(4)].map((_, i) => (
                                        <div key={i} className="flex items-start gap-2 ">
                                            <p>.Create text and images with AI</p>
                                            <span className="text-lg mt-1 ml-10"><IoIosInformationCircleOutline/></span>

                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Price Section */}
                            <div
                                className="mt-6 flex items-center text-[#090909] group-hover:text-[#EDE9C4] group-focus:text-[#EDE9C4]">
                                <div
                                    className="text-[12px] flex items-center justify-center rounded font-bold w-[69px] h-[22px] bg-[#9D915F]">Save
                                    25%
                                </div>
                                <div className="text-2xl font-bold ml-3">12 €/month</div>
                            </div>

                            {/* Optional */}
                            <div
                                className="mt-2 text-white text-3xl opacity-80 text-[#090909] group-hover:text-[#EDE9C4] group-focus:text-[#EDE9C4]">6$
                            </div>
                        </div>

                        <div
                            className="w-[302px] h-[48px] border-t border-gray-100 flex items-center justify-center bg-[#086B68] mt-5 rounded-full">
                            <button className="text-white font-medium hover:underline text-sm">Choose</button>
                        </div>
                        <div
                            className="w-[302px] h-[48px] border border-gray-500 flex items-center justify-center  mt-5 rounded">
                            <button className="text-black font-medium hover:underline text-sm">Website without shop
                            </button>
                        </div>
                    </div>
                    <div className=" mr-4 w-[302px] min-h-[686px] rounded-xl overflow-hidden group hover:scale-105 transition-all">
                        <div
                            className="border  border-slate-400 w-full h-[426px] group-hover:h-[550px] group-focus:h-[550px] transition-all text-black group-hover:bg-[#086B68] group-focus:bg-[#086B68] text-white px-5 py-6 flex  flex-col justify-between rounded-xl">
                            {/* Header */}
                            <div
                                className="flex flex-col items-center  text-[#090909] group-hover:text-[#EDE9C4] group-focus:text-[#EDE9C4]">
                                <h3 className="text-xl font-semibold mb-2 ">Plus</h3>
                                <p className="text-sm opacity-80 ">
                                    Global virtual teamwork has emerged as a cornerstone of
                                </p>
                            </div>

                            {/* Included Services */}
                            <div
                                className="mt-5 flex items-center border-b border-b-[#EDE9C4] pb-2 text-[#090909] group-hover:text-[#EDE9C4] group-focus:text-[#EDE9C4]">
                                <div className=" text-[25px] mr-0 ">
                                    <CiCircleChevDown/>
                                </div>
                                <p className="text-[12px] font-medium mb-1  ml-1">All services of the starter package
                                    included</p>

                            </div>

                            {/* Features List */}
                            <div className="mt-4 text-[#090909] group-hover:text-[#EDE9C4] group-focus:text-[#EDE9C4]">
                                <p className="font-semibold mb-3">Also included:</p>
                                <div className="flex flex-col gap-3 text-sm">
                                    {[...Array(4)].map((_, i) => (
                                        <div key={i} className="flex items-start gap-2 ">
                                            <p>.Create text and images with AI</p>
                                            <span className="text-lg mt-1 ml-10"><IoIosInformationCircleOutline/></span>

                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Price Section */}
                            <div
                                className="mt-6 flex items-center text-[#090909] group-hover:text-[#EDE9C4] group-focus:text-[#EDE9C4]">
                                <div
                                    className="text-[12px] flex items-center justify-center rounded font-bold w-[69px] h-[22px] bg-[#9D915F]">Save
                                    25%
                                </div>
                                <div className="text-2xl font-bold ml-3">12 €/month</div>
                            </div>

                            {/* Optional */}
                            <div
                                className="mt-2 text-white text-3xl opacity-80 text-[#090909] group-hover:text-[#EDE9C4] group-focus:text-[#EDE9C4]">6$
                            </div>
                        </div>

                        <div
                            className="w-[302px] h-[48px] border-t border-gray-100 flex items-center justify-center bg-[#086B68] mt-5 rounded-full">
                            <button className="text-white font-medium hover:underline text-sm">Choose</button>
                        </div>
                        <div
                            className="w-[302px] h-[48px] border border-gray-500 flex items-center justify-center  mt-5 rounded">
                            <button className="text-black font-medium hover:underline text-sm">Website without shop
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex md:hidden w-full px-4 py-10 bg-white relative">
                {/* دکمه‌های ناوبری */}
                <div className="absolute top-[45%] left-0 z-10">
                    <div className="swiper-button-prev cursor-pointer text-[#086B68] text-3xl">‹</div>
                </div>
                <div className="absolute top-[45%] right-0 z-10">
                    <div className="swiper-button-next cursor-pointer text-[#086B68] text-3xl">›</div>
                </div>

                <Swiper
                    modules={[Navigation]}
                    spaceBetween={20}
                    slidesPerView={1.2}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }}
                    breakpoints={{
                        320: {slidesPerView: 1, spaceBetween: 10},

                    }}
                >

                    <SwiperSlide>
                        <div
                            className=" m-auto w-[312px]  min-h-[686px] rounded-xl overflow-hidden group  transition-all">
                            <div
                                className="border  border-slate-400 w-full h-[426px] group-hover:h-[550px] group-focus:h-[550px] transition-all text-black group-hover:bg-[#086B68] group-focus:bg-[#086B68] text-white px-5 py-6 flex  flex-col justify-between rounded-xl">
                                {/* Header */}
                                <div
                                    className="flex flex-col items-center  text-[#090909] group-hover:text-[#EDE9C4] group-focus:text-[#EDE9C4]">
                                    <h3 className="text-xl font-semibold mb-2 ">Plus</h3>
                                    <p className="text-sm opacity-80 ">
                                        Global virtual teamwork has emerged as a cornerstone of
                                    </p>
                                </div>

                                {/* Included Services */}
                                <div
                                    className="mt-5 flex items-center border-b border-b-[#EDE9C4] pb-2 text-[#090909] group-hover:text-[#EDE9C4] group-focus:text-[#EDE9C4]">
                                    <div className=" text-[25px] mr-0 ">
                                        <CiCircleChevDown/>
                                    </div>
                                    <p className="text-[12px] font-medium mb-1  ml-1">All services of the starter
                                        package
                                        included</p>

                                </div>

                                {/* Features List */}
                                <div
                                    className="mt-4 text-[#090909] group-hover:text-[#EDE9C4] group-focus:text-[#EDE9C4]">
                                    <p className="font-semibold mb-3">Also included:</p>
                                    <div className="flex flex-col gap-3 text-sm">
                                        {[...Array(4)].map((_, i) => (
                                            <div key={i} className="flex items-start gap-2 ">
                                                <p>.Create text and images with AI</p>
                                                <span
                                                    className="text-lg mt-1 ml-10"><IoIosInformationCircleOutline/></span>

                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Price Section */}
                                <div
                                    className="mt-6 flex items-center text-[#090909] group-hover:text-[#EDE9C4] group-focus:text-[#EDE9C4]">
                                    <div
                                        className="text-[12px] flex items-center justify-center rounded font-bold w-[69px] h-[22px] bg-[#9D915F]">Save
                                        25%
                                    </div>
                                    <div className="text-2xl font-bold ml-3">12 €/month</div>
                                </div>

                                {/* Optional */}
                                <div
                                    className="mt-2 mb-5 text-xl opacity-80 text-[#090909] group-hover:text-[#EDE9C4] group-focus:text-[#EDE9C4]">6$
                                </div>
                            </div>

                            <div
                                className="w-[302px] h-[48px] border-t border-gray-100 flex items-center justify-center bg-[#086B68] mt-5 rounded-full">
                                <button className="text-white font-medium hover:underline text-sm">Choose</button>
                            </div>
                            <div
                                className="w-[302px] h-[48px] border border-gray-500 flex items-center justify-center  mt-5 rounded">
                                <button className="text-black font-medium hover:underline text-sm">Website without shop
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            className=" m-auto w-[312px]  min-h-[686px] rounded-xl overflow-hidden group  transition-all">
                            <div
                                className="border  border-slate-400 w-full h-[426px] group-hover:h-[550px] group-focus:h-[550px] transition-all text-black group-hover:bg-[#086B68] group-focus:bg-[#086B68] text-white px-5 py-6 flex  flex-col justify-between rounded-xl">
                                {/* Header */}
                                <div
                                    className="flex flex-col items-center  text-[#090909] group-hover:text-[#EDE9C4] group-focus:text-[#EDE9C4]">
                                    <h3 className="text-xl font-semibold mb-2 ">Plus</h3>
                                    <p className="text-sm opacity-80 ">
                                        Global virtual teamwork has emerged as a cornerstone of
                                    </p>
                                </div>

                                {/* Included Services */}
                                <div
                                    className="mt-5 flex items-center border-b border-b-[#EDE9C4] pb-2 text-[#090909] group-hover:text-[#EDE9C4] group-focus:text-[#EDE9C4]">
                                    <div className=" text-[25px] mr-0 ">
                                        <CiCircleChevDown/>
                                    </div>
                                    <p className="text-[12px] font-medium mb-1  ml-1">All services of the starter
                                        package
                                        included</p>

                                </div>

                                {/* Features List */}
                                <div
                                    className="mt-4 text-[#090909] group-hover:text-[#EDE9C4] group-focus:text-[#EDE9C4]">
                                    <p className="font-semibold mb-3">Also included:</p>
                                    <div className="flex flex-col gap-3 text-sm">
                                        {[...Array(4)].map((_, i) => (
                                            <div key={i} className="flex items-start gap-2 ">
                                                <p>.Create text and images with AI</p>
                                                <span
                                                    className="text-lg mt-1 ml-10"><IoIosInformationCircleOutline/></span>

                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Price Section */}
                                <div
                                    className="mt-6 flex items-center text-[#090909] group-hover:text-[#EDE9C4] group-focus:text-[#EDE9C4]">
                                    <div
                                        className="text-[12px] flex items-center justify-center rounded font-bold w-[69px] h-[22px] bg-[#9D915F]">Save
                                        25%
                                    </div>
                                    <div className="text-2xl font-bold ml-3">12 €/month</div>
                                </div>

                                {/* Optional */}
                                <div
                                    className="mt-2 mb-5 text-xl opacity-80 text-[#090909] group-hover:text-[#EDE9C4] group-focus:text-[#EDE9C4]">6$
                                </div>
                            </div>

                            <div
                                className="w-[302px] h-[48px] border-t border-gray-100 flex items-center justify-center bg-[#086B68] mt-5 rounded-full">
                                <button className="text-white font-medium hover:underline text-sm">Choose</button>
                            </div>
                            <div
                                className="w-[302px] h-[48px] border border-gray-500 flex items-center justify-center  mt-5 rounded">
                                <button className="text-black font-medium hover:underline text-sm">Website without shop
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            className=" m-auto w-[312px]  min-h-[686px] rounded-xl overflow-hidden group  transition-all">
                            <div
                                className="border  border-slate-400 w-full h-[426px] group-hover:h-[550px] group-focus:h-[550px] transition-all text-black group-hover:bg-[#086B68] group-focus:bg-[#086B68] text-white px-5 py-6 flex  flex-col justify-between rounded-xl">
                                {/* Header */}
                                <div
                                    className="flex flex-col items-center  text-[#090909] group-hover:text-[#EDE9C4] group-focus:text-[#EDE9C4]">
                                    <h3 className="text-xl font-semibold mb-2 ">Plus</h3>
                                    <p className="text-sm opacity-80 ">
                                        Global virtual teamwork has emerged as a cornerstone of
                                    </p>
                                </div>

                                {/* Included Services */}
                                <div
                                    className="mt-5 flex items-center border-b border-b-[#EDE9C4] pb-2 text-[#090909] group-hover:text-[#EDE9C4] group-focus:text-[#EDE9C4]">
                                    <div className=" text-[25px] mr-0 ">
                                        <CiCircleChevDown/>
                                    </div>
                                    <p className="text-[12px] font-medium mb-1  ml-1">All services of the starter
                                        package
                                        included</p>

                                </div>

                                {/* Features List */}
                                <div
                                    className="mt-4 text-[#090909] group-hover:text-[#EDE9C4] group-focus:text-[#EDE9C4]">
                                    <p className="font-semibold mb-3">Also included:</p>
                                    <div className="flex flex-col gap-3 text-sm">
                                        {[...Array(4)].map((_, i) => (
                                            <div key={i} className="flex items-start gap-2 ">
                                                <p>.Create text and images with AI</p>
                                                <span
                                                    className="text-lg mt-1 ml-10"><IoIosInformationCircleOutline/></span>

                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Price Section */}
                                <div
                                    className="mt-6 flex items-center text-[#090909] group-hover:text-[#EDE9C4] group-focus:text-[#EDE9C4]">
                                    <div
                                        className="text-[12px] flex items-center justify-center rounded font-bold w-[69px] h-[22px] bg-[#9D915F]">Save
                                        25%
                                    </div>
                                    <div className="text-2xl font-bold ml-3">12 €/month</div>
                                </div>

                                {/* Optional */}
                                <div
                                    className="mt-2 mb-5 text-xl opacity-80 text-[#090909] group-hover:text-[#EDE9C4] group-focus:text-[#EDE9C4]">6$
                                </div>
                            </div>

                            <div
                                className="w-[302px] h-[48px] border-t border-gray-100 flex items-center justify-center bg-[#086B68] mt-5 rounded-full">
                                <button className="text-white font-medium hover:underline text-sm">Choose</button>
                            </div>
                            <div
                                className="w-[302px] h-[48px] border border-gray-500 flex items-center justify-center  mt-5 rounded">
                                <button className="text-black font-medium hover:underline text-sm">Website without shop
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>


                </Swiper>
            </div>
        </>
    )
        ;
}

export default CartPage;
