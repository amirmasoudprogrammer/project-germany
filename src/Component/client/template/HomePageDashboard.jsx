import React from "react";
import Image from "next/image";
import Link from "next/link";
import {FaHeart, FaHome, FaShoppingCart, FaSignOutAlt, FaUserCog} from "react-icons/fa";
import {BsStarFill} from "react-icons/bs";
import {MdMessage} from "react-icons/md";


const dashboardStats = [
    {
        id: 1,
        icon: <FaShoppingCart />,
        label: "My Orders",
        value: 8,
        color: "bg-blue-100",
        href: "/dashboard/products",
    },
    {
        id: 2,
        icon: <FaHeart />,
        label: "Favorites",
        value: 5,
        color: "bg-pink-100",
        href: "/dashboard/Favorite",
    },
    {
        id: 3,
        icon: <MdMessage />,
        label: "Messages",
        value: 3,
        color: "bg-green-100",
        href: "/user/messages",
    },
    {
        id: 4,
        icon: <BsStarFill />,
        label: "Membership",
        value: "Gold",
        color: "bg-yellow-100",
        href: "/user/membership",
    },
];

function HomePageDashboard() {
    return (
        <div className="flex flex-col items-start">

            <div className="w-full h-[220px] bg-custom-gradient shadow-md"/>


            <div className="container m-auto pl-6 sm:pl-12  flex flex-col items-start text-black">
                <div className="md:ml-36 ml-10 -mt-6 md:-mt-24 bg-white  md:w-[160px] md:h-[160px] rounded-full shadow-lg flex items-center justify-center border-4 border-white">
                    <Link href="/dashboard/profile">
                        <Image
                            src="/image/profile4.png"
                            alt="User Profile"
                            className="rounded-full object-cover md:w-[140px] md:h-[140px] w-[44px] h-[44px]"
                            width={140}
                            height={140}
                        />
                    </Link>
                </div>


                <div className="mt-4 md:pl-36">
                    <h1 className="text-md font-semibold"> Jac@untitle.com 👋</h1>
                    <p className="text-gray-600 mt-1">Welcome to the user panel!</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 w-full justify-center items-center ">
                    {dashboardStats.map((item) => (
                        <Link href={item.href} key={item.id} className="w-full flex justify-center">
                            <div
                                className={`p-5 rounded-xl shadow-md ${item.color} w-full max-w-[220px] flex flex-col items-start hover:scale-105 transition-transform duration-300 cursor-pointer`}
                            >
                                <div className="text-2xl mb-2">{item.icon}</div>
                                <h3 className="text-sm font-semibold">{item.label}</h3>
                                <p className="text-lg font-bold">{item.value}</p>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className="flex gap-4 mt-20 items-center justify-center m-auto mb-20">
                    <Link
                        href="/dashboard/profile"
                        className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-sm rounded-md"
                    >
                        <FaUserCog /> Edit Profile
                    </Link>
                    <Link
                        href="/"
                        className="flex items-center justify-between gap-2 px-4 py-2 bg-gray-50 hover:bg-gray-100 text-sm font-medium rounded-md text-gray-700 transition-colors"
                    >
                        Go to Website
                        <FaHome className="text-lg" />
                    </Link>

                </div>
            </div>
        </div>
    );
}

export default HomePageDashboard;
