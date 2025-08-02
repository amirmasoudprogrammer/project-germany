import React, { useState } from 'react';
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import CardTemplate from "@/Component/client/module/CardTemplate";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";

function Discounted({image}) {
    const [activeIndex, setActiveIndex] = useState(0);
    const indicatorsCount = 5;


    const data = [
        {
            id: 1,
            image: "/image/image1.png",
            off: true,
            description: "Global virtual teamwork",
            star: 3,
            price: "79", offprice: "49"
        },
        { id: 2, image: "/image/image2.png", description: "Global virtual teamwork", star: 5, price: "79" },
        { id: 3, image: "/image/image3.png", description: "Global virtual teamwork", star: 2, price: "79" },
        { id: 4, image: "/image/image1.png", description: "Global virtual teamwork", star: 5, price: "79" },
        { id: 5, image: "/image/image2.png", description: "Global virtual teamwork", star: 3, price: "79" },
        { id: 6, image: "/image/image3.png", description: "Global virtual teamwork", star: 5, price: "79" },
    ];

    return (
        <div className="relative w-full max-w-screen-xl mx-auto px-4 py-12 md:mt-16">
            <div className="bg-custom-gradient w-full h-[600px] rounded-xl flex flex-col items-center justify-center p-6">
                <div>
                    <Image
                        src={`/image/${image}`}
                        alt="Discounted"
                        width={320}
                        height={84}
                        className="md:block"
                    />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="w-full mt-10"
                >
                    <Swiper
                        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex % indicatorsCount)}
                        slidesPerView={1}
                        centeredSlides={true}
                        freeMode={true}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        modules={[FreeMode, Autoplay]}
                        className=" w-[300px]  md:w-full "
                        breakpoints={{
                            320: { slidesPerView: 1, spaceBetween: 10 },
                            480: { slidesPerView: 1.2, spaceBetween: 10 },
                            640: { slidesPerView: 1.5, spaceBetween: 15 },
                            768: { slidesPerView: 2, spaceBetween: 20 },
                            1024: { slidesPerView: 3, spaceBetween: 30 },
                            1280: { slidesPerView: 4, spaceBetween: 30 },
                        }}
                    >
                        {data.map((item) => (
                            <SwiperSlide key={item.id} className="m-10 ">
                                <CardTemplate data={item} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>
            </div>
        </div>
    );
}

export default Discounted;
