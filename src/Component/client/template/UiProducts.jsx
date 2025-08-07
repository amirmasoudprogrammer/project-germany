"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { GoChevronRight } from "react-icons/go";

function UiProducts() {
    const imageRef = useRef(null);

    const handleMouseMove = (e) => {
        const el = imageRef.current;
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        const rotateX = -(y / 20).toFixed(2);
        const rotateY = (x / 20).toFixed(2);

        el.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    };

    const handleMouseLeave = () => {
        const el = imageRef.current;
        if (el) {
            el.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
        }
    };

    return (
        <div className="bg-white w-full mn py-20 px-4 h-[700px] ">

            <div className="flex justify-center mb-12 pb-20">
                <Image
                    src="/image/“Ui product”.svg"
                    alt="UI Product Title"
                    width={320}
                    height={84}
                    className="w-[180px] md:w-[320px] h-auto"
                />
            </div>


            <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10">

                <div className="w-full lg:w-1/2 flex justify-center">
                    <div
                        ref={imageRef}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        className="transition-transform duration-200 ease-out rounded-xl shadow-xl"
                        style={{
                            perspective: "1000px",
                            transformStyle: "preserve-3d",
                        }}
                    >
                        <Image
                            src="/image/Group 1392.png"
                            alt="UI Product"
                            width={800}
                            height={100}
                            className="rounded-xl select-none pointer-events-none"
                        />
                    </div>
                </div>


                <div className="w-full lg:w-1/2 flex flex-col gap-6 text-center lg:text-left md:ml-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 leading-relaxed">
                        Provide us with your business idea, and we will design and develop
                        the entire concept from start to finish.
                    </h2>
                    <Link
                        href="#"
                        className="inline-flex items-center gap-2 self-center lg:self-start bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg text-sm md:text-base transition-all duration-300 shadow-md"
                    >
                        <span>View More</span>
                        <GoChevronRight className="text-lg" />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default UiProducts;
