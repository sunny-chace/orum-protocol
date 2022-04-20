import AuditSection from "../Components/AuditSection";
import CommunitySection from "../Components/CommunitySection";
import Footer from "../Components/Footer";
import HeroSection from "../Components/HeroSection";
import MoreFeatures from "../Components/MoreFeatures";
import OrumAim from "../Components/OrumAim";
import LocomotiveScrollSection from "../Components/ParallaxEffect/LocomotiveScrollSection";
import { useRef, useState, useEffect } from "react";
import ImageAnimation from "../Components/ImageAnimation";

export default function Home() {

  const containerRef = useRef();
  const [isVisible, setIsVisible] = useState(false);
  const [scrollDirection, setScrollDirection] = useState();
  const [slideNum, setSlideNum] = useState(0);
  const slide0 = useRef();
  const slide1 = useRef();
  const slide2 = useRef();
  const slide3 = useRef();
  const slide4 = useRef();
  const slide5 = useRef();
  const slide6 = useRef();

  // useEffect(() => {
  //   if (window !== undefined) {
  //     let oldValue = 0
  //     let newValue = 0
  //     window.addEventListener('scroll', (e) => {
  //       newValue = window.pageYOffset;
  //       if (oldValue < newValue) {
  //         setScrollDirection("up");
  //       } else if (oldValue > newValue) {
  //       }
  //       oldValue = newValue;
  //     });
  //   }
  // }, [])

  // useEffect(() => {
  //   if (scrollDirection === "up") {
  //     setSlideNum(slideNum + 1)
  //   } else if (scrollDirection === "down") {
  //     setSlideNum(slideNum - 1);
  //   }
  // }, [scrollDirection])

  // useEffect(() => {
  //   const temp = "slide" + slideNum;
  //   // slide1.current.scrollIntoView({ behavior: 'smooth' })

  // }, [slideNum, scrollDirection])

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, [])

  return (

    !mounted
      ? null
      : <div className={`mandatory-snap`}>

        <div
          className="snap-parent"
          ref={slide0}
        >
          <HeroSection />
        </div>


        <div className="snap-parent" ref={slide1}>
          <OrumAim />
        </div>

        <div className="snap-parent" ref={slide2}>
          <LocomotiveScrollSection />
        </div>

        {/* <div className="snap-child-start"> */}
        {/* <div className="snap-parent" ref={containerRef} > */}

        <div className="snap-parent" ref={slide3}>
          <MoreFeatures />
        </div>

        <div className="snap-parent" ref={slide4}>
          <AuditSection />
        </div>

        <div className="snap-parent" ref={slide5}>
          <CommunitySection />
        </div>

        {/* <div className="snap-parent" ref={slide5}>
        <ImageAnimation />
      </div> */}

        <div className="snap-parent" ref={slide6}>
          <Footer />
        </div>
      </div >
  )
}