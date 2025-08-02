import React from 'react';
import Image from "next/image";
import Link from "next/link";

function CardBlog({data}) {
    return (
        <Link href={`/Blog/${data.id}`} className=" w-[384px] h-auto pb-10 pt-10 flex flex-col mt-10">
            <div>
                <Image src={data.image} alt="image"
                       className="w-[312px] h-[192px] m-auto md:w-[350px] md:h-[350px]  rounded-xl" width={384}
                       height={350}/>
            </div>
            <div className="pl-10 md:pl-7 mt-5 font-bold w-[350px] md:w-auto">
                <span className='text-[22px] md:text-[25px] text-black'>{data.title}</span>
                <p className='text-[#1B1F26B8] mt-2 text-[16px]'>{data.dec}</p>
            </div>
        </Link>
    );
}

export default CardBlog;