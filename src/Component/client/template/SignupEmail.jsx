import React from 'react';
import Link from "next/link";

function SignupEmail({setItem}) {
    return (
        <div className="" style={{
            backgroundImage: 'url("/image/login.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '100vh',
            width: "100%"
        }}>
            <div
                className="flex items-center md:items-start justify-center md:justify-start flex-col w-[350px] md:w-[592px] h-[417px] bg-white p-5 ml-16 top-60 mr-auto ml-auto md:ml-20 md:mr-0 md:right-0 relative md:top-16 border rounded-lg border-[#9D915F] ">
                <div>
                    <span className="text-[42px] text-black font-bold">Sign up</span>
                    <p className="text-[16px] text-[#1B1F26B8]">please enter log in details</p>
                </div>
                <form className="mt-10">
                    <div className="flex flex-col items-center md:items-start justify-start mt-5">
                        <label className="text-black font-bold">Email</label>
                        <input type="text" placeholder="enter your email "
                               className="pl-2 w-[280px] md:w-[528px] h-[56px] text-black mt-2 rounded border border-slate-300 outline-blue-300"/>
                    </div>
                </form>
                <div onClick={() => setItem(2)} className="flex cursor-pointer items-center justify-center m-auto bg-[#9D915F] w-[312px] md:w-[528px] h-[56px]">
                    <Link href="" className="text-white font-bold">Sign Email </Link>
                </div>
            </div>
        </div>
    );
}

export default SignupEmail;