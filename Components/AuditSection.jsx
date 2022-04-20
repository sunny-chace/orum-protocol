import { React } from "react";
import Image from "next/image";
import { useMediaQuery } from 'react-responsive'
import { useTheme } from "next-themes";

const AuditSection = () => {
    const isDesktop = useMediaQuery({
        query: '(min-width: 1024px)'
    })
    const { systemTheme, theme, setTheme } = useTheme();

    return (
        <div className={`transiton duration-500 flex w-full items-center justify-center bg-neutral-60 dark:bg-neutral-860 px-[9%] lg:min-h-screen h-fit py-[120px] lg:pb-0 ${isDesktop && "snap-child-start"}`}>
            <div className="flex flex-col lg:flex-row justify-between lg:space-x-[90px] w-full">
                <div className="flex flex-col mb-8">
                    <div className="transiton duration-500 text-neutral-900 dark:text-neutral-50 text-32 lg:text-40 font-semibold termina">
                        Audited &amp; <br /> Verified
                    </div>
                    <div className="transiton duration-500 text-neutral-800 dark:text-neutral-400 lato w-[272px] mt-6">
                        Orum&rsquo;s security has been audited by some of the world&apos;s premier security firms
                    </div>
                    <div className="transiton duration-500 text-neutral-800 dark:text-neutral-400 lato w-[272px] mt-3">
                        Orum also offers substantial rewards for discoveries that can prevent the loss of assets, the freezing of assets, or harm to a user
                    </div>
                </div>

                <div className="flex flex-col lg:grid lg:grid-cols-2 lg:grid-rows-2 gap-y-7 lg:gap-9 w-full">
                    <div className={`${theme === "dark" ? "black-gradient-background" : "light-mode-purple-background"} transiton duration-500 rounded-[12px] w-full max-w-[320px] lg:max-w-full rounded-[12px] w-full flex flex-col items-center justify-center`}>
                        <div className="lato text-14 text-neutral-500 mt-5 lg:mt-6">Security Audit</div>
                        <div className="text-30 text-neutral-100 mb-[34px] mt-3 lg:mb-10 lg:mt-5">
                            <Image
                                src={theme === "dark" ? "/Logo/Certik.svg" : "/Logo/CertikDark.svg"}
                                width={isDesktop ? "162.39px" : "134.4px"}
                                height={isDesktop ? "40px" : "32px"}
                                alt={"Certik"}
                            />
                        </div>
                    </div>

                    <div className={`${theme === "dark" ? "black-gradient-background" : "light-mode-purple-background"} transiton duration-500 rounded-[12px] w-full max-w-[320px] lg:max-w-full rounded-[12px] w-full flex flex-col items-center justify-center`}>
                        <div className="lato text-14 text-neutral-500 mt-5 lg:mt-6">Market Risk Assessment</div>
                        <div className="text-30 text-neutral-100 mb-[34px] mt-3 lg:mb-10 lg:mt-5">
                            <Image
                                src={theme === "dark" ? "/Logo/TrailOfBits.svg" : "/Logo/TrailOfBitsDark.svg"}
                                width={isDesktop ? "67.14px" : "53.71px"}
                                height={isDesktop ? "40px" : "32px"}
                                alt={"Trail of Bits"}
                            />
                        </div>
                    </div>

                    <div className={`col-span-2 ${theme === "dark" ? "black-gradient-background" : "light-mode-purple-background"} transiton duration-500 rounded-[12px] lg:pb-0 w-full max-w-[320px] lg:max-w-full flex flex-col items-center justify-center`}>
                        <div className="flex flex-col gap-3 h-full items-center justify-center z-[10] pb-[38px] lg:pb-[0px]">
                            <div className="lato text-14 text-neutral-500 mt-4 lg:mt-0 lg:mb-5">Bug Bounty</div>
                            <Image
                                src={theme === "dark" ? "/BountyReward.svg" : "/BountyRewardDark.svg"}
                                width={isDesktop ? "175.51px" : "140px"}
                                height={isDesktop ? "40px" : "32px"}
                                alt={"Bounty Reward"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuditSection;
