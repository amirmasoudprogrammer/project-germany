import React from 'react';
import Image from "next/image";

function Managers(props) {
    return (
     <>
         <div className="hidden md:flex bg-white w-full  flex-col items-center justify-center">
             <div className="mt-28">
                 <Image src="/image/“Managers”.svg" alt="image" width={320} height={84}/>
             </div>
             <div className="flex items-center justify-center">
                 <div>
                     <div className="mt-10 z-10 ml-0 w-[100px] relative " style={{
                         backgroundImage: 'url("/image/Rectangle 5 (1).svg")',
                         backgroundSize: 'cover',       // یا contain
                         backgroundPosition: 'center',
                         backgroundRepeat: 'no-repeat',
                         height: '461px',
                         width: "808px"// ارتفاع الزامی است که تصویر دیده شود
                     }}>
                         <div className="absolute text-center  w-[590px] h-[300px] flex items-center justify-center flex-col top-5 left-28 right-0">
                             <span className="text-white text-[30px] font-bold p-5">About  Us</span>
                             <div className="">
                                 <p className="text-[17px]">Global virtual teamwork has emerged as a cornerstone of collaborative teamwork in today’s work landscape, characterized by cross-border collaboration using digital technologies. Although research has started to investigate the mechanisms underlying effective teamwork through.</p>
                                 <p className="text-[17px]">Global virtual teamwork has emerged as a cornerstone of collaborative teamwork in today’s work landscape, characterized by cross-border collaboration using digital technologies. Although research has started to investigate the mechanisms underlying effective teamwork through.</p>
                             </div>
                         </div>
                     </div>
                     <div className="-mt-10 flex items-center justify-center">
                         <div className="flex items-center">
                             <div className="-ml-3 w-[50px] h-[50px] bg-[#CAACF2] rounded-full flex items-center justify-center text-[12px] text-white">
                                 +1000
                             </div>
                             <Image className="rounded-full w-[50px] h-[50px] -ml-3" src="/image/profile1.png" alt="image" width={50} height={50} />
                             <Image className="rounded-full w-[50px] h-[50px] -ml-3" src="/image/profile2.png" alt="image" width={50} height={50} />
                             <Image className="rounded-full w-[50px] h-[50px] -ml-3" src="/image/profile3.png" alt="image" width={50} height={50} />
                             <Image className="rounded-full w-[50px] h-[50px] -ml-3" src="/image/profile4.png" alt="image" width={50} height={50} />
                         </div>
                     </div>
                 </div>
                 <div className="flex items-center justify-center relative right-28 -top-10">
                     <Image src="/image/portrait-joyful-young-man-white-shirt 1.svg" alt="image" className="mb-20"
                            width={400} height={100}/>
                 </div>
             </div>
         </div>


         <div className="flex md:hidden bg-white w-full  flex-col items-center justify-center">
             <div className="mt-28">
                 <Image src="/image/Managers1.svg" alt="image" width={110} height={34}/>
             </div>
             <div className="flex items-center justify-center relative top-3">
                 <Image src="/image/imagep.svg" alt="image" className=""
                        width={312} height={388}/>
             </div>
             <div>
                 <div className="w-[100px] relative" style={{
                     backgroundImage: 'url("/image/Rectangle 6.svg")',
                     backgroundSize: 'cover',
                     backgroundPosition: 'center',
                     backgroundRepeat: 'no-repeat',
                     height: '272px',
                     width: "312px",
                     borderRadius:"10px"
                 }}>
                     <div className="text-center flex items-center justify-center flex-col w-[250px] p-2 text-center m-auto mt-2 rounded overflow-hidden">
                         <span className="text-white text-[20px] font-bold ">About  Us</span>
                         <div className="">
                             <p className="text-[9px]">Global virtual teamwork has emerged as a cornerstone of collaborative teamwork in today’s work landscape, characterized by cross-border collaboration using digital technologies. Although research has started to investigate the mechanisms underlying effective teamwork through.</p>
                             <p className="text-[9px]">Global virtual teamwork has emerged as a cornerstone of collaborative teamwork in today’s work landscape, characterized by cross-border collaboration using digital technologies. Although research has started to investigate the mechanisms underlying effective teamwork through.</p>
                         </div>
                     </div>
                 </div>
                 <div className="-mt-10 flex items-center justify-center">
                     <div className="flex items-center">
                         <div className="-ml-3 w-[50px] h-[50px] bg-[#CAACF2] rounded-full flex items-center justify-center text-[12px] text-white">
                             +1000
                         </div>
                         <Image className="rounded-full w-[50px] h-[50px] -ml-3" src="/image/profile1.png" alt="image" width={50} height={50} />
                         <Image className="rounded-full w-[50px] h-[50px] -ml-3" src="/image/profile2.png" alt="image" width={50} height={50} />
                         <Image className="rounded-full w-[50px] h-[50px] -ml-3" src="/image/profile3.png" alt="image" width={50} height={50} />
                         <Image className="rounded-full w-[50px] h-[50px] -ml-3" src="/image/profile4.png" alt="image" width={50} height={50} />
                     </div>
                 </div>
             </div>
         </div>
     </>
    );
}

export default Managers;