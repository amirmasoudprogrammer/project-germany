"use client"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Link from "next/link";
import {useRouter} from "next/navigation";

const MobileStepper = ({ steps, onBack, onNext, currentStep }) => {

    const router = useRouter();

    const handleNext = () => {
        if (currentStep < steps.length) {
            const nextStep = currentStep + 1;
            onNext();
            router.push(steps[nextStep - 1].route);
        }
    };

    const handleBack = () => {
        if (currentStep > 1) {
            const prevStep = currentStep - 1;
            onBack();
            router.push(steps[prevStep - 1].route);
        }
    };

    return (
        <div className="flex flex-col items-center md:hidden w-full max-w-[312px] px-4 py-4 bg-white rounded-xl shadow-md">

            <div className="flex items-center justify-between w-full mb-4">
                <button
                    onClick={handleBack}
                    disabled={currentStep === 1}
                    className="flex items-center text-sm font-medium text-gray-600 hover:text-[#2CBEE3] transition-all disabled:text-gray-300"
                >
                    <FaAngleLeft className="mr-1" />
                    Back
                </button>

                <button
                    onClick={handleNext}
                    disabled={currentStep === steps.length}
                    className="flex items-center text-sm font-medium text-gray-600 hover:text-[#2CBEE3] transition-all disabled:text-gray-300"
                >
                    Next
                    <FaAngleRight className="ml-1" />
                </button>
            </div>


            <div className="flex items-center justify-center gap-2 flex-wrap">
                {steps.map((item, index) => (
                    <Link href={item.route} key={item.id} className="flex items-center gap-1">
                        <span
                className={`text-[10px] font-medium ${
                    currentStep === item.id
                        ? "text-[#2CBEE3] font-bold"
                        : "text-gray-400"
                }`}
            >
              {item.label}
            </span>
                        {index < steps.length - 1 && (
                            <FaAngleRight className="text-gray-300 text-xs" />
                        )}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default MobileStepper;
