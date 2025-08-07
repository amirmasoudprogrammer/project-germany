import React from 'react';
import HeaderComponent from "@/Component/client/layout/HeaderComponent";
import CardTemplate from "@/Component/client/module/CardTemplate";
import { FaAngleLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";
import Footer from "@/Component/client/layout/Footer";



function ProductPage(props) {
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
        { id: 13, image: "/image/image3.png", description: "Global virtual teamwork", star: 5, price: "79" },
        { id: 14, image: "/image/image3.png", description: "Global virtual teamwork", star: 5, price: "79" },
        { id: 16, image: "/image/image3.png", description: "Global virtual teamwork", star: 5, price: "79" },
    ];


    return (
        <>
            <HeaderComponent/>
            <div className="container m-auto ">
                <div className="flex items-center justify-center flex-col md:flex-row">
                    <div className="flex items-center justify-center m-auto text-black ">
                        <span className='text-[50px] mr- mt-16 font-bold '>Products</span>
                    </div>

                    <div className="mt-16 ">
                        <span className="text-black font-bold mr-2"> sortBy:</span>
                        <select name="" id="" className="text-black">
                            <option value="">Trending</option>
                            <option value="">Popular</option>
                            <option value="">Best sellers</option>
                            <option value="">Lowest-priced</option>
                            <option value="">Highest-priced</option>
                        </select>
                    </div>

                </div>
                <div className="flex items-center justify-center md:justify-between flex-wrap mt-10 mb-10">
                    {
                        data.map((item) =><CardTemplate key={item.id} data={item}/>)
                    }
                </div>
                <div className="flex items-center justify-center mt-10 mb-10">
                    <span className="text-[#086B68] cursor-pointer"><FaAngleLeft /></span>
                    <p className="text-black pr-5 text-[#086B68]">1</p>
                    <p className="text-black pr-5 text-[#0000004D]">2</p>
                    <p className="text-black pr-5 text-[#0000004D]">3</p>
                    <p className="text-black pr-5 text-[#0000004D]">4</p>
                    <p className="text-black pr-5 text-[#0000004D]">5</p>
                    <span className="text-[#086B68] cursor-pointer"><FaChevronRight /></span>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default ProductPage;