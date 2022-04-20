import { useEffect, useState } from "react";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

const ImageAnimation = () => {
    const [counter, setCounter] = useState(0);
    const [showImageNum, setShowImageNum] = useState(0);
    const isDesktop = useMediaQuery({
        query: '(min-width: 1024px)'
    })

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(prevState => prevState + 1)
        }, 24);
        return () => clearInterval(interval);
    }, [])

    useEffect(() => {
        setShowImageNum(counter % 6)
    }, [counter])

    return (
        <div className={`h-screen w-full bg-neutral-850 ${isDesktop && "snap-child-start"}`}>
            <div className="ConcaveImageBg relative z-0">
                <div className="absolute z-0">
                    <Image
                        width="1920px"
                        height="768px"
                        preserveAspectRatio="xMidYMid slice"
                        src={"/ConcaveImageAnimation/ParticleWave_bg.jpg"}
                    />
                </div>
                <g className="bg-black absolute z-1 mixBlend">

                    <g
                        className="jpg"
                        transform="matrix(1,0,0,1,0,0)"
                        opacity="1"
                        style={showImageNum === 0 ? { display: "block" } : { display: "none" }}>
                        <Image
                            width="1920px"
                            height="768px"
                            preserveAspectRatio="xMidYMid slice"
                            src={"/ConcaveImageAnimation/ParticleWave_1.jpg"}
                        />
                    </g>

                    <g
                        className="jpg"
                        transform="matrix(1,0,0,1,0,0)"
                        opacity="1"
                        style={showImageNum === 1 ? { display: "block" } : { display: "none" }}>
                        <Image
                            width="1920px"
                            height="768px"
                            preserveAspectRatio="xMidYMid slice"
                            src={"/ConcaveImageAnimation/ParticleWave_2.jpg"}
                        />
                    </g>

                    <g
                        className="jpg"
                        transform="matrix(1,0,0,1,0,0)"
                        opacity="1"
                        style={showImageNum === 2 ? { display: "block" } : { display: "none" }}>
                        <Image
                            width="1920px"
                            height="768px"
                            preserveAspectRatio="xMidYMid slice"
                            src={"/ConcaveImageAnimation/ParticleWave_3.jpg"}
                        />
                    </g>

                    <g
                        className="jpg"
                        transform="matrix(1,0,0,1,0,0)"
                        opacity="1"
                        style={showImageNum === 3 ? { display: "block" } : { display: "none" }}>
                        <Image
                            width="1920px"
                            height="768px"
                            preserveAspectRatio="xMidYMid slice"
                            src={"/ConcaveImageAnimation/ParticleWave_4.jpg"}
                        />
                    </g>

                    <g
                        className="jpg"
                        transform="matrix(1,0,0,1,0,0)"
                        opacity="1"
                        style={showImageNum === 4 ? { display: "block" } : { display: "none" }}>
                        <Image
                            width="1920px"
                            height="768px"
                            preserveAspectRatio="xMidYMid slice"
                            src={"/ConcaveImageAnimation/ParticleWave_5.jpg"}
                        />
                    </g>

                    <g
                        className="jpg"
                        transform="matrix(1,0,0,1,0,0)"
                        opacity="1"
                        style={showImageNum === 5 ? { display: "block" } : { display: "none" }}>
                        <Image
                            width="1920px"
                            height="768px"
                            preserveAspectRatio="xMidYMid slice"
                            src={"/ConcaveImageAnimation/ParticleWave_6.jpg"}
                        />
                    </g>
                </g>
            </div>
        </div>)
}

export default ImageAnimation;