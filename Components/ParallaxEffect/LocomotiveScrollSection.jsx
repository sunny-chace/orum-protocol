import { useState, useEffect } from "react";
import ContentSection from "./ContentSection";
import ImageSection from "./ImageSection";
import { useMediaQuery } from "react-responsive";

const LocomotiveScrollSection = ({snapFlag, setSnapFlag}) => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [visibleSection, setVisibleSection] = useState(0);
    const [screenTop, setScreenTop] = useState(0)
    const isDesktop = useMediaQuery({
        query: '(min-width: 1024px)'
    })
    const handleScroll = () => {
        const position = window.pageYOffset;
        const windowTop = window.top;
        setScrollPosition(position);
        setScreenTop(windowTop);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        if (scrollPosition === 0) {
            setVisibleSection(0)
        } else if (scrollPosition > 0 && scrollPosition <= (window.innerHeight * 2.5)) {
            setVisibleSection(1)
        } else if (scrollPosition > window.innerHeight) {
            setVisibleSection(2)
        }
    }, [scrollPosition])

    return (<div className={`flex flex-col lg:flex-row bg-neutral-60 transiton duration-500 dark:bg-neutral-860 px-[9%]`}>

        <div className="right-section w-fit">
            <ContentSection setSnapFlag={setSnapFlag} snapFlag={snapFlag} />
        </div>

        {isDesktop && <div className="left-section lg:h-screen w-full sticky top-0">
            <ImageSection visibleSection={visibleSection} />
        </div>}
    </div>)
}

export default LocomotiveScrollSection;