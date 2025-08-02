import React from 'react';
import '../../../app/Video.css';



function Video() {
    return (
        <div className="relative w-screen h-screen">
            {/* متن با افکت تایپ و طراحی جذاب */}
            <div className=" absolute top-24 left-1/2 transform -translate-x-1/2 z-20 bg-white/20 backdrop-blur-md px-8 py-4 rounded-xl shadow-lg">
        <span className="text-white text-[20px] md:text-[40px] font-bold whitespace-nowrap border-r-2 border-white pr-2 animate-typing overflow-hidden">
          Full-Stack Development Team
        </span>
            </div>

            {/* ویدیو پس‌زمینه تمام‌صفحه */}
            <video
                src="/video/268230_small.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="md:w-full h-full object-cover"
            />
        </div>
    );
}

export default Video;
