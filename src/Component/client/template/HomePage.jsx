"use client";

import React, {useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination, Mousewheel} from "swiper/modules";
import {motion} from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";

import Banner from "@/Component/client/template/Banner";
import Business from "@/Component/client/template/Business";
import Managers from "@/Component/client/template/Managers";
import AllProduct from "@/Component/client/template/AllProduct";
import UiProducts from "@/Component/client/template/UiProducts";
import Video from "@/Component/client/template/Video";
import Discounted from "@/Component/client/template/Discounted";
import Blog from "@/Component/client/template/Blog";
import Footer from "@/Component/client/layout/Footer";

const slideVariants = {
    hidden: {opacity: 0, y: 100,},
    visible: {opacity: 1, y: 0,},
};

function AnimatedSlide({children, isActive}) {
    return (
        <motion.div
            initial="hidden"
            animate={isActive ? "visible" : "hidden"}
            variants={slideVariants}
            transition={{duration: 0.8, ease: "easeOut"}}
            className="h-full w-full flex items-start justify-center"
        >
            {children}
        </motion.div>
    );
}

const bgGradients = [
    "bg-gradient-to-t from-white to-[#B3E8F3]",
    "bg-gradient-to-t from-white to-[#8ED6F5]",
    "bg-gradient-to-t from-white to-[#5CC2F2]",
    "bg-gradient-to-t from-white to-[#36AEEB]",
    "bg-gradient-to-t from-white to-[#1293E0]",
    "bg-gradient-to-t from-white to-[#007ACC]",
];

function HomePage() {
    const [activeIndex, setActiveIndex] = useState(0);


    return (
        <>
        <div
            className={`transition-all duration-1000 ease-in-out h-screen w-screen bg-gradient-to-b ${bgGradients[activeIndex % bgGradients.length]}`}
        >
            <Swiper
                direction="vertical"
                modules={[Pagination, Mousewheel]}
                pagination={{clickable: true}}
                mousewheel
                loop={false}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                style={{height: "100vh"}}
                className="w-full h-full"
            >
                <SwiperSlide>
                    <AnimatedSlide isActive={activeIndex === 0}>
                        <Banner/>
                    </AnimatedSlide>
                </SwiperSlide>

                <SwiperSlide>
                    <AnimatedSlide isActive={activeIndex === 1}>
                        <Business/>
                    </AnimatedSlide>
                </SwiperSlide>

                <SwiperSlide>
                    <AnimatedSlide isActive={activeIndex === 2}>
                        <Managers/>
                    </AnimatedSlide>
                </SwiperSlide>

                <SwiperSlide>
                    <AnimatedSlide isActive={activeIndex === 3}>
                        <AllProduct/>
                    </AnimatedSlide>
                </SwiperSlide>

                <SwiperSlide>
                    <AnimatedSlide isActive={activeIndex === 4}>
                        <UiProducts/>
                    </AnimatedSlide>
                </SwiperSlide>

                <SwiperSlide>
                    <AnimatedSlide isActive={activeIndex === 5}>
                        <Video/>
                    </AnimatedSlide>
                </SwiperSlide>
                <SwiperSlide>
                    <AnimatedSlide isActive={activeIndex === 6}>
                        <Discounted image="“Discounted Price”.svg"/>
                    </AnimatedSlide>
                </SwiperSlide>
                <SwiperSlide className="">
                    <AnimatedSlide isActive={activeIndex === 7}>
                        <Blog setActiveIndex={setActiveIndex}/>
                    </AnimatedSlide>
                </SwiperSlide>
            </Swiper>

        </div>

        </>
    );
}

export default HomePage;
