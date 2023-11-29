import React, { useState, useEffect, useRef } from "react";
import { RxDoubleArrowRight } from "react-icons/rx";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import { Bayon } from "next/font/google";

const bayon = Bayon({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bayon",
});

function ScrollElem() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  const [showScroll, setShowScroll] = useState(undefined);
  const scrollRef = useRef();

  const handleScroll = () => {
    const scrollPosition = window.scrollX;
    console.log(scrollPosition);

    // if (scrollRef.target.scrollX > 0.75 * windowSize.width) {
    //   setShowScroll(2);
    // } else if (scrollRef.target.scrollX > 0.5 * windowSize.width) {
    //   setShowScroll(1);
    // } else {
    //   setShowScroll(0);
    // }
  };

  useEffect(() => {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/

    // only execute all the code below in client side
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    // Call handler right away so state gets updated with initial window size
    handleResize();
    handleScroll();

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty array ensures that effect is only run on mount

  if (windowSize.width < 768) {
    return null;
  }

  return (
    <div
      ref={scrollRef}
      className="p-4 bottom-[20vh] right-24 opacity-75 flex gap-4"
    >
      <motion.span
        className={`text-2xl font-bayon  ${bayon.variable} text-slate-800 dark:text-slate-300`}
      >
        Scroll
      </motion.span>
      <div>
        <RxDoubleArrowRight size={40} />
      </div>
    </div>
  );
}

export default ScrollElem;
