import { React } from "react";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { useTheme } from "next-themes";

const Footer = () => {
    const isDesktop = useMediaQuery({
        query: '(min-width: 1024px)'
    })
    const { systemTheme, theme, setTheme } = useTheme();

    return (
        <footer className={`${isDesktop && "snap-child-start"}`}>
            <div className="hidden lg:block bg-[#ECEAF0] dark:bg-neutral-850 pt-14 pb-12 px-[9%]">
                <div className="flex items-center justify-between mb-12">

                    <Image
                        src={theme === "dark" ? "/Logo/OrumLogo.svg" : "/Logo/OrumDarkLogo.svg"}
                        width={"90px"}
                        height={"20px"}
                        alt={"Orum"}
                    />

                    <div className="flex items-center gap-x-8">

                        <ul className="flex gap-5 text-neutral-700 dark:text-neutral-400">
                            <li className="lato text-16">Dashboard</li>
                            <li className="lato text-16">Docs</li>
                            <li className="lato text-16">Whitepaper</li>
                            <li className="lato text-16">FAQs</li>
                        </ul>

                        <button className="purple-gradient-button-background w-fit h-fit text-14 font-[800] lato text-neutral-50 px-4 py-3 rounded-[12px]">
                            Launch App
                        </button>
                    </div>
                </div>

                <div className="flex w-full justify-between items-center border-t-[1px] pt-12 border-neutral-200 dark:border-neutral-800">

                    <div className="text-neutral-400 text-14 lato">
                        &#169; 2022 Orum
                    </div>

                    <div className="flex gap-x-5">
                        <Image
                            src={"/Icons/Discord_grey.svg"}
                            width={"20px"}
                            height={"20px"}
                            alt={"Discord"}
                        />
                        <Image
                            src={"/Icons/Twitter_grey.svg"}
                            width={"20px"}
                            height={"20px"}
                            alt={"Discord"}
                        />
                    </div>
                </div>
            </div>

            <div className="block lg:hidden bg-[#ECEAF0] dark:bg-neutral-850 pt-14 px-5 pb-7">
                <div className="flex flex-col mb-12">
                    <div className="flex items-center justify-between">
                        <Image
                            src={theme === "dark" ? "/Logo/OrumLogo.svg" : "/Logo/OrumDarkLogo.svg"}
                            width={"90px"}
                            height={"20px"}
                            alt={"Orum"}
                        />

                        <button className="purple-gradient-button-background w-fit h-fit text-14 font-[800] lato text-neutral-50 px-4 py-3 rounded-[12px]">
                            Launch App
                        </button>
                    </div>

                    <div className="mt-12">
                        <ul className="flex flex-col gap-5 text-neutral-700 dark:text-neutral-400">
                            <li className="lato text-16">Dashboard</li>
                            <li className="lato text-16">Docs</li>
                            <li className="lato text-16">Whitepaper</li>
                            <li className="lato text-16">FAQs</li>
                        </ul>
                    </div>

                </div>

                <div className="flex w-full justify-between items-center border-t-[1px] pt-12 border-neutral-200 dark:border-neutral-800">

                    <div className="text-neutral-400 text-14 lato">
                        &#169; 2022 Orum
                    </div>

                    <div className="flex gap-x-5">
                        <Image
                            src={"/Icons/Discord_grey.svg"}
                            width={"20px"}
                            height={"20px"}
                            alt={"Discord"}
                        />
                        <Image
                            src={"/Icons/Twitter_grey.svg"}
                            width={"20px"}
                            height={"20px"}
                            alt={"Discord"}
                        />
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer;