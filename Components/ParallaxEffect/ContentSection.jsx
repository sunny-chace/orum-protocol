import { React } from "react"
import { useRef, createRef, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";

const ContentSection = ({ snapFlag, setSnapFlag }) => {
    const lendRef = createRef();
    const isDesktop = useMediaQuery({
        query: '(min-width: 1024px)'
    })

    return (
        <div className="flex flex-col" ref={lendRef}>
            <div className={`flex flex-col justify-center py-[120px] lg:w-max termina ${isDesktop && "h-screen snap-child-start"}`}>
                <div className="text-neutral-900 transiton duration-500 dark:text-neutral-50 text-32 lg:text-[40px] font-semibold termina">
                    Lend USDC and <br /> earn through <br /> staking rewards
                </div>
                <div className="text-neutral-700 transiton duration-500 dark:text-neutral-300 lato mt-5 lg:mt-7">
                    Staking rewards get distributed among depositors <br className="hidden lg:block" /> according to the proportion of their deposits
                </div>
                {!isDesktop && <div className="mt-16">
                    <Image
                        src={"/LendingDiagram.png"}
                        width={"620px"}
                        height={"300px"}
                    />
                </div>}
            </div>

            <div className={`flex flex-col justify-center py-[120px] lg:w-max termina ${isDesktop && "h-screen snap-child-start"}`}>
                <div className="text-neutral-900 transiton duration-500 dark:text-neutral-50 text-32 lg:text-[40px] font-semibold termina">
                    Borrow USDC <br /> with MATIC <br /> as collateral
                </div>
                <div className="text-neutral-700 dark:text-neutral-300 lato mt-7">
                    USDC loans need to maintain a maximum loan-to-<br className="hidden lg:block" />value (LTV) ratio of 74%
                </div>
                {!isDesktop && <div className="mt-16">
                    <Image
                        src={"/BorrowerDiagram.png"}
                        width={"620px"}
                        height={"300px"}
                    />
                </div>}
            </div>
        </div>
    )
}

export default ContentSection;