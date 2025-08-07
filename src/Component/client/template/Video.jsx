import React from 'react';
import { FaPlay } from 'react-icons/fa';

function Video() {
    return (
        <section className="">
            <div className="">
                <video
                    src="/video/268230_small.mp4"
                    muted
                    autoPlay
                    loop
                    className="w-screen h-screen object-cover"
                />


                <div className="absolute inset-0 flex items-center justify-center">
                    <button className="bg-white text-blue-500 p-5 rounded-full shadow-lg hover:scale-110 transition">
                        <FaPlay size={24} />
                    </button>
                </div>



            </div>
        </section>
    );
}

export default Video;
