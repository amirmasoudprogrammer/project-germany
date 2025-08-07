"use client";

import React from "react";

import Banner from "@/Component/client/template/Banner";
import Business from "@/Component/client/template/Business";
import Managers from "@/Component/client/template/Managers";
import AllProduct from "@/Component/client/template/AllProduct";
import UiProducts from "@/Component/client/template/UiProducts";
import Video from "@/Component/client/template/Video";
import Discounted from "@/Component/client/template/Discounted";
import Blog from "@/Component/client/template/Blog";
import Footer from "@/Component/client/layout/Footer"; // اضافه شده
import AnimatedSection from "@/Component/client/layout/AnimatedSection";

const sections = [
    { component: <Banner />, key: "banner" },
    { component: <Business />, key: "business" },
    { component: <Managers />, key: "managers" },
    { component: <AllProduct />, key: "all-product" },
    { component: <UiProducts />, key: "ui-products" },
    { component: <Video />, key: "video" },
    { component: <Discounted image="Discounted Price.svg" />, key: "discounted" },
    { component: <Blog />, key: "blog" },
];

const HomePage = () => {
    return (
        <div className="relative scroll-smooth snap-y snap-mandatory w-full bg-gradient-to-t from-white to-[#B3E8F3] text-white">
            <div className="relative">
                {sections.map((section, index) => (
                    <AnimatedSection key={section.key} delay={index * 0.15}>
                        <div className="snap-start min-h-screen overflow-hidden flex items-center justify-center backdrop-blur-md bg-white/5  ">
                            {section.component}
                        </div>
                    </AnimatedSection>
                ))}
            </div>
        </div>
    );
};

export default HomePage;
