"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaChevronRight, FaChevronDown } from "react-icons/fa6";
import CardTemplate from "@/Component/client/module/CardTemplate";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import {
    FaBook,
    FaBuilding,
    FaFileAlt,
    FaNewspaper,
    FaRocket,
    FaShoppingCart,
    FaSmile,
    FaTachometerAlt,
    FaUser,
} from "react-icons/fa";

function AllProduct() {
    const data = [
        { id: 1, image: "/image/image1.png", off: true, description: "Global virtual teamwork", star: 3, price: "79", offprice: "49" },
        { id: 2, image: "/image/image2.png", description: "Global virtual teamwork", star: 5, price: "79" },
        { id: 3, image: "/image/image3.png", description: "Global virtual teamwork", star: 2, price: "79" },
        { id: 4, image: "/image/image1.png", description: "Global virtual teamwork", star: 5, price: "79" },
        { id: 5, image: "/image/image2.png", description: "Global virtual teamwork", star: 3, price: "79" },
        { id: 6, image: "/image/image3.png", description: "Global virtual teamwork", star: 5, price: "79" },
        { id: 7, image: "/image/image3.png", description: "Global virtual teamwork", star: 5, price: "79" },
        { id: 8, image: "/image/image3.png", description: "Global virtual teamwork", star: 5, price: "79" },
        { id: 9, image: "/image/image3.png", description: "Global virtual teamwork", star: 5, price: "79" },
        { id: 10, image: "/image/image3.png", description: "Global virtual teamwork", star: 5, price: "79" },
        { id: 11, image: "/image/image3.png", description: "Global virtual teamwork", star: 5, price: "79" },
        { id: 12, image: "/image/image3.png", description: "Global virtual teamwork", star: 5, price: "79" },
    ];

    const menuItems = [
        { icon: <FaBuilding />, labelEn: "Corporate" },
        { icon: <FaShoppingCart />, labelEn: "E-commerce" },
        { icon: <FaTachometerAlt />, labelEn: "Admin Dashboard" },
        { icon: <FaFileAlt />, labelEn: "One Page" },
        { icon: <FaUser />, labelEn: "Personal" },
        { icon: <FaBook />, labelEn: "Educational" },
        { icon: <FaRocket />, labelEn: "Landing Page" },
        { icon: <FaNewspaper />, labelEn: "News" },
        { icon: <FaSmile />, labelEn: "Entertainment" },
    ];

    const chunkArray = (array, size) => {
        const result = [];
        for (let i = 0; i < array.length; i += size) {
            result.push(array.slice(i, i + size));
        }
        return result;
    };

    const desktopSlides = chunkArray(data, 6); // 3 بالا و 3 پایین

    return (
        <div className="bg-white w-full">
            <div className="container m-auto flex items-center justify-center flex-col">
                <div className="mt-32">
                    <Image src="/image/“All product”.svg" className="hidden md:block" alt="image" width={320} height={84} />
                    <Image src="/image/All product.svg" className="block md:hidden" alt="image" width={122} height={34} />
                </div>

                <div className="flex items-center md:w-full justify-around md:justify-end">
                    <div className="hidden md:flex h-[48px] bg-[#C2BB87] mt-10 mr-72 rounded items-center justify-between">
                        <ul className="flex items-center justify-around w-[610px] cursor-pointer">
                            {["HTML Template", "Script", "Best Sellers", "More", "WordPress Theme"].map((label, idx) => (
                                <li key={idx} className="relative group">
                                    <div className="flex items-center justify-center text-black text-[14px] font-medium py-2 px-4 rounded-md hover:bg-[#b9b274] transition-all duration-300 cursor-pointer select-none shadow-sm hover:shadow-md">
                                        <span className="mr-2 text-[12px]">{label}</span>
                                        <FaChevronDown className="transition-transform duration-300 group-hover:rotate-180" />
                                    </div>
                                    <div className="absolute top-full mt-2 left-0 w-[500px] bg-white text-black rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-20 p-5">
                                        <div className="grid grid-cols-3 gap-6 w-full overflow-x-auto no-scrollbar">
                                            {menuItems.map((item, index) => (
                                                <Link key={index} href="#" className="flex items-center gap-2 text-[13px] font-semibold hover:text-[#C2BB87] transition-colors duration-200 p-2 rounded-md whitespace-nowrap">
                                                    <span>{item.labelEn}</span>
                                                    <span className="text-[#b9b274]">{item.icon}</span>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <Link href="#" className="text-black flex items-center justify-center mt-10">
                        <span>View More</span>
                        <FaChevronRight />
                    </Link>
                </div>
            </div>

            <div className="relative mb-28 mt-10 container mx-auto">
                {/* اسلایدر دسکتاپ و تبلت */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="relative w-full m-auto hidden md:block"
                >
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        loop={true}
                        navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
                        className="mySwiper"
                    >
                        {desktopSlides.map((group, index) => (
                            <SwiperSlide key={index} className="ml-10">
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {group.map((item) => (
                                        <CardTemplate key={item.id} data={item} />
                                    ))}
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* دکمه‌ها برای دسکتاپ */}
                    <div className="custom-prev absolute top-1/2 -translate-y-1/2 left-0 z-10 cursor-pointer p-2 bg-white shadow-md rounded-full hover:bg-gray-100 transition-all">
                        <FaChevronRight className="rotate-180 text-gray-600 w-5 h-5" />
                    </div>
                    <div className="custom-next absolute top-1/2 -translate-y-1/2 right-0 z-10 cursor-pointer p-2 bg-white shadow-md rounded-full hover:bg-gray-100 transition-all">
                        <FaChevronRight className="text-gray-600 w-5 h-5" />
                    </div>
                </motion.div>

                {/* اسلایدر موبایل */}
                <div className="block md:hidden mt-10">
                    <Swiper
                        modules={[Autoplay]}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        loop={true}
                        spaceBetween={20}
                        slidesPerView={1}
                    >
                        {data.map((item) => (
                            <SwiperSlide key={item.id} className="ml-1 ">
                                <CardTemplate data={item} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default AllProduct;
