import { useTheme } from "next-themes";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

const CommunitySection = () => {
    const isDesktop = useMediaQuery({
        query: '(min-width: 1024px)'
    })
    const { systemTheme, theme, setTheme } = useTheme();

    return (<div className={`lg:h-screen bg-neutral-60 dark:bg-neutral-860 flex items-center justify-center transition duration-500 ${isDesktop && "snap-child-start"}`}>
        <div className={`hidden lg:flex py-[120px] px-[9%] items-center w-screen justify-center`}>
            <div className={`${theme === "dark" ? "" : "community_lightmode_shadow"} flex w-full rounded-[36px] overflow-hidden padding-[1px] border-[1px] border dark:border-neutral-850`}>
                <div className="relative dark:bg-neutral-900 w-full rounded-[36px]">
                    <div className="absolute z-[0] right-0 top-0">
                        <img
                            src={theme === "dark" ? "/BackgroundImages/DarkOrum_Desktop.png" : "/BackgroundImages/LightOrum_Desktop.png"}
                            // height={"inherit"}
                            // width={"auto"}
                            // height={"auto"}
                            alt={"Orum"}

                        />
                    </div>
                    <div className="relative z-[10] flex flex-col rounded-[36px] w-full pt-[120px] pb-[140px]">

                        <div className="flex flex-col w-1/3 mx-[84px]">
                            <div className="text-40 text-neutral-900 dark:text-neutral-50 font-semibold mb-6 termina">
                                Join our community
                            </div>

                            <div className="dark:community-background-border rounded-[20px] w-full max-w-[320px] cursor-pointer">
                                <div className="flex space-x-5 items-center px-10 border border-[1px] border-neutral-200 dark:border-neutral-800 h-[100px] rounded-[20px] bg-[#ECEAF0] dark:bg-neutral-900">
                                    <Image
                                        src={theme === "dark" ? "/Icons/Discord.svg" : "/Icons/Discord_dark.svg"}
                                        width={'36px'}
                                        height={'36px'}
                                        alt={'discord'}
                                    />
                                    <div className="flex flex-col">
                                        <div className="lato font-extrabold text-neutral-900 dark:text-neutral-50 text-16">
                                            Discord
                                        </div>
                                        <div className="lato font-normal text-neutral-400 text-12">
                                            Ask all your questions
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="dark:community-background-border rounded-[20px] mt-5 w-full max-w-[320px] cursor-pointer">
                                <div className="flex space-x-5 items-center px-10 border border-[1px] border-neutral-200 dark:border-neutral-800 h-[100px] rounded-[20px] bg-[#ECEAF0] dark:bg-neutral-900">
                                    <Image
                                        src={theme === "dark" ? "/Icons/Twitter.svg" : "/Icons/Twitter_dark.svg"}
                                        width={'36px'}
                                        height={'36px'}
                                        alt={'Twitter'}
                                    />
                                    <div className="flex flex-col">
                                        <div className="lato font-extrabold text-neutral-900 dark:text-neutral-50 text-16">
                                            Twitter
                                        </div>
                                        <div className="lato font-normal text-neutral-400 text-12">
                                            Ask all your questions
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div >

        <div className="flex lg:hidden pt-[120px] bg-neutral-60 dark:bg-neutral-860">
            <div className="flex flex-col items-center rounded-[36px] w-screen mx-auto">

                <div className="text-32 text-neutral-900 dark:text-neutral-50 font-semibold text-center w-full  mb-[64px] termina">
                    Join the community
                </div>

                <div className="dark:community-background-border rounded-[20px] w-full max-w-[320px] cursor-pointer">
                    <div className="flex space-x-5 items-center px-10 border border-[1px] border-neutral-200 dark:border-neutral-800 h-[100px] rounded-[20px] bg-[#ECEAF0] dark:bg-neutral-900">
                        <Image
                            src={theme === "dark" ? "/Icons/Discord.svg" : "/Icons/Discord_dark.svg"}
                            width={'36px'}
                            height={'36px'}
                            alt={'discord'}
                        />
                        <div className="flex flex-col">
                            <div className="lato font-extrabold text-neutral-900 dark:text-neutral-50 text-16">
                                Discord
                            </div>
                            <div className="lato font-normal text-neutral-400 text-12">
                                Ask all your questions
                            </div>
                        </div>
                    </div>
                </div>

                <div className="dark:community-background-border rounded-[20px] mt-5 w-full max-w-[320px] cursor-pointer">
                    <div className="flex space-x-5 items-center px-10 border border-[1px] border-neutral-200 dark:border-neutral-800 h-[100px] rounded-[20px] bg-[#ECEAF0] dark:bg-neutral-900">
                        <Image
                            src={theme === "dark" ? "/Icons/Twitter.svg" : "/Icons/Twitter_dark.svg"}
                            width={'36px'}
                            height={'36px'}
                            alt={'Twitter'}
                        />
                        <div className="flex flex-col">
                            <div className="lato font-extrabold text-neutral-900 dark:text-neutral-50 text-16">
                                Twitter
                            </div>
                            <div className="lato font-normal text-neutral-400 text-12">
                                Ask all your questions
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-9">
                    <img src={theme === "dark" ? "/BackgroundImages/DarkOrum_Mobile.png" : "/BackgroundImages/LightOrum_Mobile.png"} />
                </div>
            </div>
        </div>
    </div >)
}

export default CommunitySection;
