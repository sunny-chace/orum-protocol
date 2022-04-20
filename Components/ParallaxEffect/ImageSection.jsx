import { React, useState, useEffect } from "react"
import Image from "next/image";

const ImageSection = ({ visibleSection }) => {

    return (
        <div className="flex w-full lg:h-full items-center justify-end">
            <div>
                <div className={`transition duration-500 fadeIn ${visibleSection <= 1 ? "fadeIn" : "transition duration-500 fadeOut hidden"}`}>
                    <Image
                        src={"/LendingDiagram.png"}
                        width={"620px"}
                        height={"300px"}
                    />
                </div>

                <div className={`transition duration-500 ${visibleSection <= 1 ? "fadeOut transition duration-500 hidden" : "fadeIn"}`}>
                    <Image
                        src={"/BorrowerDiagram.png"}
                        width={"620px"}
                        height={"300px"}
                    />
                </div>
            </div>
        </div>
    )
}

export default ImageSection;