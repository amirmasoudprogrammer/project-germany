import React from 'react';
import Image from "next/image";

function UiProducts(props) {
    return (
        <div className=" bg-white h-full md:h-fit">
          <div className=" flex items-center justify-center flex-col ">
              <div className="mt-32  ">
                  <Image src="/image/“Ui product”.svg" className=" md:block" alt="image" width={320} height={84}/>
              </div>
              <div className=" p-10">
                  <p className="text-[20px] md:text-[40px] text-center text-black font-bold">
                      "Provide us with your business idea, and we will design and develop the entire concept from start to finish."
                  </p>
              </div>
              <div>
                  <Image src="/image/Group 1392.png" className=" md:block object-cover" alt="image" width={1334} height={662}/>
              </div>
          </div>
        </div>
    );
}

export default UiProducts;