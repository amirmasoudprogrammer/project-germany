import React from 'react';
import Image from "next/image";

function CardAbout({data}) {
    return (
        <div
            className="flex items-center shadow-xl md:flex-col justify-center  md:w-[384px] w-[312px] h-[112px] md:h-[345px] border border-[#24B8D2] mt-5 mb-5 rounded-xl bg-white">
            <Image src={data.image} alt="logo" className="md:w-[160px] md:h-[160px] w-[80px] h-[80px] rounded-full ml-10 md:ml-0" width={160} height={160}/>
           <div className="mr-auto text-black ml-5 md:mt-10">
               <span className="text-[22px]">{data.name}</span>
               <p className="text-[18px]">{data.job}</p>
           </div>
        </div>
    );
}

export default CardAbout;