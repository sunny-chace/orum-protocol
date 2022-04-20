import { React, useState } from "react"
import Image from "next/image";
import styles from "../styles/index.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
import { useTheme } from "next-themes";

const Navbar = () => {
    const router = useRouter();
    const { systemTheme, theme, setTheme } = useTheme();

    return (
        <div className="py-6 px-[9%]">
            <div className="flex justify-between items-center">
                <div>
                    <Image
                        src={theme === "dark" ? "/Logo/OrumLogo.svg" : "/Logo/OrumDarkLogo.svg"}
                        width={"90px"}
                        height={"20px"}
                    />
                </div>

                <div className="flex space-x-2 lg:space-x-5">

                    <div className={`${theme === "dark" ? "bg-neutral-50 fill-neutral-900 hover:fill-[#8247E5]" : "bg-neutral-900 fill-neutral-50 hover:fill-[#8247E5]"} rounded-[12px] cursor-pointer py-[12px] pr-[15px] pl-[11px] transiton duration-500 text-neutral-50 dark:text-neutral-900 md:px-[16px] hover:text-[#8247E5] hover:border-[#8247E5] hover:fill-[#8247E5] hover:transition hover:duration-300`}>
                        <Link
                            href={"https://twitter.com/orumdollar"}
                            passHref
                        >
                            <a target={"_blank"}>
                                <div className="flex items-center w-fit space-x-[6px]">
                                    <div className={`${styles.gradientButton} font-bold font-poppins hidden sm:block`}>
                                        Twitter
                                    </div>
                                    <div>
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M20 3.79858C19.2477 4.12671 18.452 4.34478 17.6375 4.44608C18.4958 3.93687 19.1376 3.13054 19.4412 2.17983C18.6375 2.6565 17.7582 2.99218 16.8412 3.17233C16.2791 2.57206 15.5493 2.15473 14.7469 1.97458C13.9444 1.79442 13.1063 1.85976 12.3415 2.16211C11.5766 2.46446 10.9204 2.98985 10.458 3.67C9.99566 4.35016 9.74853 5.15365 9.74875 5.97608C9.74875 6.30108 9.77625 6.61358 9.84375 6.91108C8.2126 6.83111 6.6167 6.40777 5.16038 5.66873C3.70406 4.92969 2.42012 3.8916 1.3925 2.62233C0.866024 3.52466 0.703261 4.59372 0.937354 5.61184C1.17145 6.62996 1.78479 7.52057 2.6525 8.10233C2.00345 8.08493 1.36809 7.91173 0.8 7.59733V7.64233C0.801087 8.58912 1.12833 9.50663 1.72665 10.2404C2.32496 10.9742 3.15781 11.4794 4.085 11.6711C3.73423 11.7635 3.37273 11.8089 3.01 11.8061C2.74949 11.8107 2.48923 11.7872 2.23375 11.7361C2.49868 12.5499 3.00936 13.2615 3.69549 13.773C4.38162 14.2845 5.20945 14.5708 6.065 14.5923C4.61367 15.7274 2.82372 16.3431 0.98125 16.3411C0.645 16.3411 0.3225 16.3261 0 16.2848C1.87485 17.493 4.05959 18.1321 6.29 18.1248C13.835 18.1248 17.96 11.8748 17.96 6.45733C17.96 6.27608 17.9538 6.10108 17.945 5.92733C18.7537 5.34857 19.4501 4.62719 20 3.79858Z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </a>
                        </Link>
                    </div>

                    <div className={`${theme === "dark" ? "bg-neutral-50 fill-neutral-900 hover:fill-[#8247E5]" : "bg-neutral-900 fill-neutral-50 hover:fill-[#8247E5]"} rounded-[12px] cursor-pointer py-[12px] pr-[15px] pl-[11px] text-neutral-50 dark:text-neutral-900 md:px-[16px] transiton duration-500 hover:text-[#8247E5] hover:border-[#8247E5] hover:fill-[#8247E5] hover:transition hover:duration-300`}>
                        <Link
                            href={"https://discord.gg/MEuW3gtKQu"}
                            passHref
                        >
                            <a target={"_blank"}>
                                <div className="flex items-center w-fit space-x-[6px]">
                                    <div
                                        className={`${styles.gradientButton} font-bold font-poppins hidden sm:block`}
                                    >
                                        Discord
                                    </div>
                                    <div>
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M16.9308 3.68453C15.6561 3.10372 14.2892 2.6758 12.8599 2.43072C12.8339 2.42599 12.8079 2.43781 12.7945 2.46145C12.6187 2.77194 12.4239 3.177 12.2876 3.49538C10.7503 3.26685 9.22099 3.26685 7.71527 3.49538C7.57887 3.16993 7.37707 2.77194 7.20048 2.46145C7.18707 2.4386 7.16107 2.42677 7.13504 2.43072C5.70659 2.67502 4.33963 3.10293 3.06411 3.68453C3.05307 3.68926 3.04361 3.69714 3.03732 3.70738C0.444493 7.55393 -0.265792 11.3059 0.0826501 15.0114C0.0842267 15.0295 0.0944749 15.0469 0.108665 15.0579C1.81934 16.3054 3.47642 17.0627 5.10273 17.5647C5.12876 17.5726 5.15634 17.5632 5.1729 17.5419C5.55761 17.0202 5.90054 16.4701 6.19456 15.8917C6.21192 15.8578 6.19535 15.8176 6.15989 15.8042C5.61594 15.5993 5.098 15.3495 4.59977 15.0658C4.56037 15.0429 4.55721 14.987 4.59347 14.9602C4.69831 14.8822 4.80318 14.801 4.9033 14.719C4.92141 14.7041 4.94665 14.7009 4.96794 14.7103C8.24107 16.1943 11.7846 16.1943 15.0191 14.7103C15.0404 14.7001 15.0657 14.7033 15.0846 14.7182C15.1847 14.8002 15.2895 14.8822 15.3952 14.9602C15.4314 14.987 15.4291 15.0429 15.3897 15.0658C14.8914 15.355 14.3735 15.5993 13.8288 15.8034C13.7933 15.8168 13.7775 15.8578 13.7949 15.8917C14.0952 16.4693 14.4381 17.0194 14.8157 17.5411C14.8315 17.5632 14.8599 17.5726 14.8859 17.5647C16.5201 17.0627 18.1772 16.3054 19.8879 15.0579C19.9028 15.0469 19.9123 15.0303 19.9139 15.0122C20.3309 10.7282 19.2154 7.00702 16.9568 3.70816C16.9513 3.69714 16.9419 3.68926 16.9308 3.68453ZM6.68335 12.7552C5.69792 12.7552 4.88594 11.8568 4.88594 10.7535C4.88594 9.65018 5.68217 8.7518 6.68335 8.7518C7.69239 8.7518 8.49651 9.65807 8.48073 10.7535C8.48073 11.8568 7.68451 12.7552 6.68335 12.7552ZM13.329 12.7552C12.3435 12.7552 11.5316 11.8568 11.5316 10.7535C11.5316 9.65018 12.3278 8.7518 13.329 8.7518C14.338 8.7518 15.1421 9.65807 15.1264 10.7535C15.1264 11.8568 14.338 12.7552 13.329 12.7552Z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </a>
                        </Link>
                    </div>

                    <div
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="border border-[1px] border-neutral-900 transiton duration-500 dark:border-neutral-50 rounded-[12px] w-[44px] h-[44px] lg:w-[46px] lg:h-[46px] flex items-center justify-center cursor-pointer">
                        <Image
                            src={theme === "dark" ? "/Icons/Sun.svg" : "/Icons/Moon.svg"}
                            width={"20px"}
                            height={"20px"}
                            alt={theme === "dark" ? "Dark mode" : "Light mode"}
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Navbar;