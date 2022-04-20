import { React, useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useMediaQuery } from 'react-responsive'
import { useTheme } from "next-themes";

const OrumAim = () => {
    const containerRef = useRef();
    const [isVisible, setIsVisible] = useState(false);
    const isDesktop = useMediaQuery({
        query: '(min-width: 1024px)'
    })
    const { systemTheme, theme, setTheme } = useTheme();

    // const callbackFunction = (entries) => {
    //     const [entry] = entries;
    //     setIsVisible(entry.isIntersecting)
    //     containerRef.current.scrollIntoView({ behavior: 'smooth' })
    // }

    // const options = {
    //     root: null,
    //     rootMargin: '0px',
    //     threshold: '0.5'
    // }

    // useEffect(() => {
    //     const observer = new IntersectionObserver(callbackFunction, options);
    //     if (containerRef.current) {
    //         observer.observe(containerRef.current)
    //     }

    //     return () => {
    //         if (containerRef.current) {
    //             observer.unobserve(containerRef.current)
    //         }
    //     }

    // }, [containerRef, options])

    return (
        <div className={`flex flex-col items-center justify-center bg-neutral-60 transiton duration-500 dark:bg-neutral-860 py-[120px] ${isDesktop ? "h-screen snap-child-start" : ""}`} ref={containerRef}>
            <div className="lato text-neutral-900 dark:text-neutral-50 text-24 lg:text-[40px] mx-5 lg:mx-0 text-center font-extrabold slide-up">
                Orum is a decentralized passive income <br className="hidden lg:block" /> and interest-free borrowing protocol
            </div>

            <div className="flex flex-col lg:flex-row gap-y-8 mt-12 lg:gap-x-[84px]">
                <div className="flex justify-center items-center">
                    <div className="text-neutral-600 dark:text-neutral-350 lato text-16 mr-4">
                        Built on
                    </div>
                    <Image
                        src={theme === "dark" ? "/Logo/Polygon.svg" : "/Logo/PolygonDark.svg"}
                        width={isDesktop ? "171px" : "114px"}
                        height={isDesktop ? "36px" : "24px"}
                    />
                </div>

                <div className="flex items-center justify-center">
                    <div className="text-neutral-600 dark:text-neutral-350 lato text-16 mr-4">
                        Powered By
                    </div>
                    <div className="mr-3">
                        <Image
                            src={"/Logo/USDCLogo.png"}
                            width={isDesktop ? "36px" : "24px"}
                            height={isDesktop ? "36px" : "24px"}
                        />
                    </div>
                    <Image
                        src={theme === "dark" ? "/Logo/USDC.svg" : "/Logo/USDCDark.svg"}
                        width={isDesktop ? "64.17px" : "42.78px"}
                        height={isDesktop ? "18px" : "12px"}
                    />
                </div>
            </div>
        </div>
    )
}

export default OrumAim;