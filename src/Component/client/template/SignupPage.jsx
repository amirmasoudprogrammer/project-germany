"use client"
import React, {useState} from 'react';
import Link from "next/link";
import OtpInput from 'react-otp-input';


function SignupPage(props) {
    const [otp, setOtp] = useState('');


    const handleChange = (value) => {
        setOtp(value);
        if (value.length === 5) {
            console.log(value)
        }
    };

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
                className="flex items-center md:items-start justify-center md:justify-start flex-col w-[350px] md:w-[592px] h-[740px] bg-white p-5 ml-16 top-60 mr-auto ml-auto md:ml-20 md:mr-0 md:right-0 relative md:top-5 border rounded-lg border-[#9D915F] ">
                <div>
                    <span className="text-[42px] text-black font-bold">Sign up</span>
                    <p className="text-[16px] text-[#1B1F26B8]">please enter log in details</p>
                </div>
                <form className="mt-10">
                    <div className="flex flex-col items-center md:items-start justify-start">
                        <label className="text-black font-bold">Name</label>
                        <input type="text" placeholder="enter your name "
                               className="pl-2 w-[280px] md:w-[528px] h-[56px] text-black mt-2 rounded border border-slate-300 outline-blue-300"/>
                    </div>
                    <div className="flex flex-col items-center md:items-start justify-start mt-5">
                        <label className="text-black font-bold">Email</label>
                        <input type="text" placeholder="enter your email "
                               className="pl-2 w-[280px] md:w-[528px] h-[56px] text-black mt-2 rounded border border-slate-300 outline-blue-300"/>
                    </div>
                    <div className="flex flex-col items-center md:items-start justify-start mt-10">
                        <label className="text-black font-bold">Password</label>
                        <input type="text" placeholder="enter your email "
                               className="pl-2 w-[280px] md:w-[528px] h-[56px] text-black mt-2 rounded border border-slate-300 outline-blue-300"/>
                    </div>
                    <div className="w-[280px] md:w-auto flex items-center justify-between">
                        <div className=" flex items-center justify-start ">
                            <input type="checkbox"
                                   className=" h-[20px] text-black  rounded border border-slate-300 outline-blue-300"/>
                            <label className="text-black font-bold ">remember me</label>
                        </div>
                        <Link className="text-[#090909] mt-1 font-medium" href="">forgot password?</Link>
                    </div>
                    <div className="flex items-start flex-col justify-between text-black font-thin ">
                        <span className="text-[12px] mt-1"> Enter the OTP send to -@gmail.com </span>
                        <div className="mt-3 flex items-center justify-between  flex-col md:flex-row">
                            <div className="">
                                <OtpInput
                                    value={otp}
                                    onChange={handleChange}
                                    numInputs={5}
                                    shouldAutoFocus
                                    inputType="tel"
                                    renderInput={(props) => (
                                        <input
                                            {...props}
                                            style={{
                                                width: "48px",
                                                height: "64px",
                                                margin: "0 4px",
                                                fontSize: "20px",
                                                fontWeight: "bold",
                                                borderRadius: "8px",
                                                border: "1px solid #CAACF2",
                                                color: "#000",
                                                textAlign: "center"
                                            }}
                                        />
                                    )}
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center text-[12px] md:ml-16">
                                <span className='text-[#9D915F]'>01:47 Sec</span>
                                <div className="flex mt-2">
                                    <span>You didn’t receive a coad? </span>
                                    <p className="font-bold">RESEND</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="w-[280px] rounded md:w-[528px] h-[56px] bg-[#9D915F] mt-10 font-medium">
                        Log in
                    </button>
                </form>
                <div className="flex items-center justify-center m-auto mt-2 mb-5">
                    <p className="text-black">
                        Don’t have an accout?
                    </p>
                    <Link href="" className="text-[#007AFF] font-bold ">Sign up </Link>
                </div>

            </div>
        </div>
    );
}

export default SignupPage;