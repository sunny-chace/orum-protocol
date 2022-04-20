import { useTheme } from "next-themes";
import Image from "next/image";
import { useMediaQuery } from 'react-responsive'

const MoreFeatures = () => {
    const isDesktop = useMediaQuery({
        query: '(min-width: 1024px)'
    })
    const { systemTheme, theme, setTheme } = useTheme();

    return (
        <div className={`flex flex-col items-center justify-center min-h-fit py-[120px] lg:h-screen bg-[#ECEAF0] dark:bg-neutral-900 transition duration-500 lg:px-[9%] ${isDesktop && "snap-child-start"}`}>
            <div className="w-full flex flex-col px-5 lg:px-0 justify-start lg:flex-row lg:items-center">
                <div className="text-neutral-900 dark:text-neutral-50 text-32 lg:text-40 mr-4 termina slide-up font-semibold">Do more on</div>
                <div className="">
                    <Image
                        src={theme === "dark" ? "/Logo/OrumLogo.svg" : "/Logo/OrumDarkLogo.svg"}
                        width={isDesktop ? "126px" : "99px"}
                        height={isDesktop ? "28px" : "22px"}
                    />
                </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-between space-y-9 px-5 lg:px-0 lg:py-0 lg:space-y-0 lg:space-x-[152px] mt-14">
                <div className="flex lg:items-start lg:space-x-9">
                    <div className="flex-shrink-0">
                        <Image
                            src={theme === "dark" ? "/Icons/Liquidate.svg" : "/Icons/LiquidateDark.svg"}
                            width={'64px'}
                            height={'64px'}
                        />
                    </div>
                    <div className="flex flex-col ml-7 mb-14 lg:mb-0 lg:ml-0">
                        <div className="text-24 lg:text-32 font-semibold text-neutral-900 dark:text-neutral-50 mb-3 font-poppins">Liquidate</div>
                        <div className="text-neutral-700 dark:text-neutral-400 text-16 lato">
                            Liquidators can liquidate a Vault as soon as it drops below the Minimum Collateral Ratio
                        </div>
                    </div>
                </div>

                <div className="flex lg:items-start lg:space-x-9">
                    <div className="flex-shrink-0">
                        <Image
                            src={theme === "dark" ? "/Icons/Farm.svg" : "/Icons/FarmDark.svg"}
                            width={'64px'}
                            height={'64px'}
                        />
                    </div >
                    <div className="flex flex-col ml-7 mb-14 lg:mb-0 lg:ml-0">
                        <div className="text-24 lg:text-32 font-semibold text-neutral-900 dark:text-neutral-50 mb-3 font-poppins">Farm</div>
                        <div className="text-neutral-700 dark:text-neutral-400 text-16 lato">
                            Orum liquidity providers can farm their LP tokens in exchange for ORUM rewards
                        </div>
                    </div>
                </div >

                <div className="flex lg:items-start lg:space-x-9">
                    <div className="flex-shrink-0">
                        <Image
                            src={theme === "dark" ? "/Icons/Vest.svg" : "/Icons/VestDark.svg"}
                            width={'64px'}
                            height={'64px'}
                        />
                    </div>
                    <div className="flex flex-col ml-7 mb-14 lg:mb-0 lg:ml-0">
                        <div className="text-24 lg:text-32 font-semibold text-neutral-900 dark:text-neutral-50 mb-3 font-poppins">Vest</div>
                        <div className="text-neutral-700 dark:text-neutral-400 text-16 lato">
                            Holders can lock their ORUM tokens to receive veORUM, the protocol&rsquo;s governance token.
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default MoreFeatures;