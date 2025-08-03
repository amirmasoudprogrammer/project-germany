import React from 'react';
import HeaderComponent from "@/Component/client/layout/HeaderComponent";
import Link from "next/link";
import {
    FaBook,
    FaBuilding,
    FaFileAlt,
    FaNewspaper,
    FaRocket,
    FaShoppingCart, FaSmile,
    FaTachometerAlt,
    FaUser
} from "react-icons/fa";
import {FaChevronDown} from "react-icons/fa6";
import CardTemplate from "@/Component/client/module/CardTemplate";

function OrderTemplate(props) {
    const data = [
        {
            id: 1,
            image: "/image/image1.png",
            off: true,
            description: "Global virtual teamwork",
            star: 3,
            price: "79",
            offprice: "49"
        },
        {id: 2, image: "/image/image2.png", description: "Global virtual teamwork", star: 5, price: "79"},
        {id: 3, image: "/image/image3.png", description: "Global virtual teamwork", star: 2, price: "79"},
        {id: 4, image: "/image/image1.png", description: "Global virtual teamwork", star: 5, price: "79"},
        {id: 5, image: "/image/image2.png", description: "Global virtual teamwork", star: 3, price: "79"},
        {id: 6, image: "/image/image3.png", description: "Global virtual teamwork", star: 5, price: "79"}, ,

    ];
    const menuItems = [
        { icon: <FaBuilding />,  labelEn: "Corporate" },
        { icon: <FaShoppingCart />, labelEn: "E-commerce" },
        { icon: <FaTachometerAlt />,  labelEn: "Admin Dashboard" },
        { icon: <FaFileAlt />,  labelEn: "One Page" },
        { icon: <FaUser />,  labelEn: "Personal" },
        { icon: <FaBook />,  labelEn: "Educational" },
        { icon: <FaRocket />,  labelEn: "Landing Page" },
        { icon: <FaNewspaper />,  labelEn: "News" },
        { icon: <FaSmile />,  labelEn: "Entertainment" },
    ];
    return (
        <>
            <HeaderComponent/>
            <div className="container m-auto ">
                <div className="flex items-center justify-center flex-col md:flex-row">
                    <div className="flex items-center justify-center m-auto text-black ">
                        <span className='text-[24px] md:text-[50px] mr- mt-16 font-bold '>order registration</span>
                    </div>
                </div>

                <div className="flex items-center justify-around mt-20 border-b border-b-slate-400 pb-10">
                    <Link href="/order" className="flex items-center justify-center mr-2 md:mr-0 w-[138px] h-[38px] md:w-[273px] md:h-[60px] bg-[#9D915F] rounded-full text-black border border-slate-500 text-white ">Buy a template</Link>
                    <Link href="/order/registration" className="flex items-center justify-center w-[170px] h-[38px] md:w-[341px] md:h-[60px] bg-[#FFFFFF] rounded-full text-black border border-slate-500 font-bold">Project registration</Link>

                </div>
            </div>

            <div className="hidden md:flex h-[48px] w-[610px] m-auto bg-[#C2BB87] mt-10  rounded items-center justify-center">
                <ul className="flex items-center justify-around w-[610px] cursor-pointer">
                    <li className="relative group">
                        {/* دکمه منو */}
                        <div className="flex items-center justify-center text-black  font-medium py-2 px-4 rounded-md hover:bg-[#b9b274] transition-all duration-300 cursor-pointer select-none shadow-sm hover:shadow-md">
                            <span className="mr-2 text-[12px]">HTML Template</span>
                            <FaChevronDown className="transition-transform duration-300 group-hover:rotate-180" />
                        </div>

                        {/* زیرمنو */}
                        <div className="absolute top-full mt-2 left-0 w-[500px] bg-white text-black rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-20 p-5">
                            <div className="grid grid-cols-3 gap-6 w-full overflow-x-auto no-scrollbar">
                                {menuItems.map((item, index) => (
                                    <Link
                                        key={index}
                                        href="#"
                                        className="flex items-center gap-2 text-[13px] font-semibold hover:text-[#C2BB87] transition-colors duration-200 p-2 rounded-md whitespace-nowrap"
                                    >
                                        <span>{item.labelEn}</span>
                                        <span className="text-[#b9b274]">{item.icon}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </li>
                    <li className="relative group">
                        {/* دکمه منو */}
                        <div className="flex items-center justify-center text-black text-[14px] font-medium py-2 px-4 rounded-md hover:bg-[#b9b274] transition-all duration-300 cursor-pointer select-none shadow-sm hover:shadow-md">
                            <span className="mr-2 text-[12px]">Script</span>
                            <FaChevronDown className="transition-transform duration-300 group-hover:rotate-180" />
                        </div>

                        {/* زیرمنو */}
                        <div className="absolute top-full mt-2 left-0 w-[500px] bg-white text-black rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-20 p-5">
                            <div className="grid grid-cols-3 gap-6 w-full overflow-x-auto no-scrollbar">
                                {menuItems.map((item, index) => (
                                    <Link
                                        key={index}
                                        href="#"
                                        className="flex items-center gap-2 text-[13px] font-semibold hover:text-[#C2BB87] transition-colors duration-200 p-2 rounded-md whitespace-nowrap"
                                    >
                                        <span>{item.labelEn}</span>
                                        <span className="text-[#b9b274]">{item.icon}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </li>
                    <li className="relative group">
                        {/* دکمه منو */}
                        <div className="flex items-center justify-center text-black text-[14px] font-medium py-2 px-4 rounded-md hover:bg-[#b9b274] transition-all duration-300 cursor-pointer select-none shadow-sm hover:shadow-md">
                            <span className="mr-2 text-[12px]">Best Sellers</span>
                            <FaChevronDown className="transition-transform duration-300 group-hover:rotate-180" />
                        </div>

                        {/* زیرمنو */}
                        <div className="absolute top-full mt-2 left-0 w-[500px] bg-white text-black rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-20 p-5">
                            <div className="grid grid-cols-3 gap-6 w-full overflow-x-auto no-scrollbar">
                                {menuItems.map((item, index) => (
                                    <Link
                                        key={index}
                                        href="#"
                                        className="flex items-center gap-2 text-[13px] font-semibold hover:text-[#C2BB87] transition-colors duration-200 p-2 rounded-md whitespace-nowrap"
                                    >
                                        <span>{item.labelEn}</span>
                                        <span className="text-[#b9b274]">{item.icon}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </li>
                    <li className="relative group">
                        {/* دکمه منو */}
                        <div className="flex items-center justify-center text-black text-[14px] font-medium py-2 px-4 rounded-md hover:bg-[#b9b274] transition-all duration-300 cursor-pointer select-none shadow-sm hover:shadow-md">
                            <span className="mr-2 text-[12px]">More</span>
                            <FaChevronDown className="transition-transform duration-300 group-hover:rotate-180" />
                        </div>

                        {/* زیرمنو */}
                        <div className="absolute top-full mt-2 left-0 w-[500px] bg-white text-black rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-20 p-5">
                            <div className="grid grid-cols-3 gap-6 w-full overflow-x-auto no-scrollbar">
                                {menuItems.map((item, index) => (
                                    <Link
                                        key={index}
                                        href="#"
                                        className="flex items-center gap-2 text-[13px] font-semibold hover:text-[#C2BB87] transition-colors duration-200 p-2 rounded-md whitespace-nowrap"
                                    >
                                        <span>{item.labelEn}</span>
                                        <span className="text-[#b9b274]">{item.icon}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </li>
                    <li className="relative group">
                        {/* دکمه منو */}
                        <div className="flex items-center justify-center text-black text-[14px] font-medium py-2 px-4 rounded-md hover:bg-[#b9b274] transition-all duration-300 cursor-pointer select-none shadow-sm hover:shadow-md">
                            <span className="mr-2 text-[12px]">WordPress Theme</span>
                            <FaChevronDown className="transition-transform duration-300 group-hover:rotate-180" />
                        </div>

                        {/* زیرمنو */}
                        <div className="absolute top-full mt-2 left-0 w-[500px] bg-white text-black rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-20 p-5">
                            <div className="grid grid-cols-3 gap-6 w-full overflow-x-auto no-scrollbar">
                                {menuItems.map((item, index) => (
                                    <Link
                                        key={index}
                                        href="#"
                                        className="flex items-center gap-2 text-[13px] font-semibold hover:text-[#C2BB87] transition-colors duration-200 p-2 rounded-md whitespace-nowrap"
                                    >
                                        <span>{item.labelEn}</span>
                                        <span className="text-[#b9b274]">{item.icon}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </li>

                </ul>

            </div>

            <div className="container m-auto flex items-center justify-center md:justify-between flex-wrap mt-10 mb-10">
                {
                    data.map((item) =><CardTemplate key={item.id} data={item}/>)
                }
            </div>
        </>
    );
}

export default OrderTemplate;