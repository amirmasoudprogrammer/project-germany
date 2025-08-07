import React from 'react';
import Image from "next/image";
import {CiBookmark} from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import Link from "next/link";


function CardTemplate({data}) {
    const {image, off, description, star, price, offprice} = data
    return (
        <div className=" relative mt-5 w-[312px] md:w-[280px] h-[350px] border rounded-2xl border-slate-200 hover:shadow-xl">
            <div>

                <div>
                    <Image src={image} className="w-[312px]  md:w-[300px] h-[200px] rounded-t-2xl" alt="image" width={300}
                           height={200}/>
                </div>

                <div className="absolute w-full h-auto top-0 mt-5 flex items-center justify-between">
                    <div
                        className="text-[20px] cursor-pointer ml-5 w-[34px] h-[34px] border border-slate-300 flex items-center justify-center rounded-full bg-[#FFFFFF] text-black">
                        <CiBookmark/>
                    </div>
                    {
                        off && (
                            <div
                                className="w-[67px] h-[29px] bg-red-600 -mt-11 rounded-tr-2xl rounded-bl-2xl flex items-center justify-center font-bold">
                                SALE
                            </div>
                        )
                    }
                </div>
            </div>
            <div className="w-[312px] md:w-[280px] h-[150px] bg-white shadow-md rounded-b-2xl p-5 flex flex-col items-start ">
                <p className="text-black font-medium text-[16px] ">{description}</p>
                <div className=" flex items-center  justify-between w-full">
                    <div className="flex items-center">
                        <div>
                            {Array.from({length: 5}, (_, i) => (
                                <span key={i} className="text-yellow-400 text-[20px]">
                           {i < star ? '★' : '☆'}
                           </span>
                            ))}
                        </div>
                        <div className="ml-2">
                            {
                                off && offprice ? (
                                        <div className="flex items-center justify-center">
                                            <p className="line-through text-gray-500">${price}</p>
                                            <p className="text-red-600 ml-2">$49</p>
                                        </div>
                                    )
                                    : (<p className="text-black">${price}</p>)
                            }

                        </div>
                    </div>
                    <div className="w-[36px] h-[36px] bg-[#086B68] text-[30px] flex items-center justify-center rounded cursor-pointer">
                        <CiShoppingCart />

                    </div>
                </div>
                <Link href={`/Products/${data.id}`} className="w-[270px] md:w-[240px] h-[36px] bg-[#086B68] mt-4 rounded flex items-center justify-center">
                    Live Demo
                </Link>
            </div>
        </div>
    );
}

export default CardTemplate;