import React from 'react';
import Link from "next/link";
import Image from "next/image";
import CardDashboard from "@/Component/client/module/CardDashboard";


const data = [
    {id: 1, image: "/image/image1.png", off: true, description: "Global virtual teamwork has emerged as a crosghAbstract", star: 3, price: "79", offprice: "49"},
    {id: 2, image: "/image/image2.png", description: "Global virtual teamwork has emerged as a crosghAbstract", star: 5, price: "79"},
]

function FavoriteDashboard(props) {
    return (
        <div className="flex flex-col items-start">

            <div className="w-full h-[220px] bg-custom-gradient shadow-md"/>


            <div className="container m-auto  flex flex-col items-start text-black">
                <div className="md:ml-36 ml-10 -mt-6 md:-mt-24 bg-white w-[44px] h-[44px] md:w-[160px] md:h-[160px] rounded-full shadow-lg flex items-center justify-center border-4 border-white">
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

                <div className="mt-4 md:pl-36 ml-10">
                    <h1 className="text-md font-semibold"> Jac@untitle.com 👋</h1>
                    <p className="text-gray-600 mt-1">Welcome to the user panel!</p>
                </div>

               <div className="flex flex-col-reverse md:flex-row md:w-auto md:items-center justify-center md:justify-between ">
                   <div className="mt-10 mb-10 w-[312px] h-[327px] md:w-[500px] md:h-[350px] ml-5 md:ml-36">
                       {data.map((item) => <CardDashboard key={item.id} data={item}/>)}
                   </div>

                   <div className="ml-20 md:ml-36  mt-16">
                       <Image src="/image/Group 1421.svg" alt="web Profile" className="" width={204} height={168}/>

                   </div>
               </div>
            </div>
        </div>
    );
}

export default FavoriteDashboard;