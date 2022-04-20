import { React, useState, useEffect, useRef } from "react";
import Navbar from "./Navbar";
import { useMediaQuery } from 'react-responsive'
import { useTheme } from "next-themes";

const HeroSection = () => {
    const [apyPercent, setApyPercent] = useState(0);
    const [aprPercent, setAprPercent] = useState(100);
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

    useEffect(() => {
        setTimeout(() => {
            if (apyPercent < 14) {
                setApyPercent(apyPercent + 1);
            }
        }, 50)
    }, [apyPercent])

    useEffect(() => {
        setTimeout(() => {
            if (aprPercent > 0) {
                setAprPercent(aprPercent - 1);
            }
        }, 5)
    }, [aprPercent])

    return (
        <div className={`${theme !== "dark" && "fadeInLess heroSectionBG"} dark:bg-neutral-860 transiton duration-500 pb-[140px] h-screen w-full max-w-screen ${isDesktop && "snap-child-start"}`} ref={containerRef}>
            <nav className={`backdrop-filter backdrop-blur-lg bg-opacity-90 lg:bg-transparent fixed z-[999] top-0 w-full max-w-screen`}>
                <Navbar />
            </nav>

            <div className="flex flex-col lg:flex-row items-center w-fit mx-auto h-screen justify-center termina slide-up">
                <div className="flex flex-col items-center w-[320px] lg:items-end lg:mt-5 lg:text-right">
                    <div className="flex flex-col w-fit">
                        <div className="text-neutral-700 transiton duration-500 dark:text-neutral-250 text-30 font-bold">Lend USDC at</div>
                        <div className="flex items-end termina">
                            <div className="gradient-font text-[72px] lg:text-[88px] font-extrabold leading-[140%] termina">{apyPercent}%&nbsp;</div>
                            <div className="text-neutral-600 transiton duration-500 dark:text-neutral-250 text-24 termina mb-7">APY</div>
                        </div>
                    </div>
                </div>

                <div className="hidden lg:block mx-[72px] h-[200px] w-[1px] bg-neutral-700"></div>
                <div className="lg:hidden w-full py-[0.5px] bg-neutral-700 my-8"></div>

                <div className="flex flex-col items-center lg:w-[350px] mt-4 lg:mt-5">
                    <div className="text-neutral-700 transiton duration-500 dark:text-neutral-250 text-30 font-bold">Borrow USDC at</div>
                    <div className="flex items-end">
                        <div className="gradient-font text-[72px] lg:text-[88px] font-extrabold leading-[140%] termina">{aprPercent}%&nbsp;</div>
                        <div className="text-neutral-600 transiton duration-500 dark:text-neutral-250 text-24 termina mb-7">APR</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;