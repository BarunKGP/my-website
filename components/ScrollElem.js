import React, { useState, useEffect } from "react";
import { RxDoubleArrowRight } from "react-icons/rx";
import { motion, AnimatePresence, easeInOut } from "framer-motion";

function ScrollElem() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

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

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  if (windowSize.width < 768) {
    return null;
  }

  return (
    <div className="p-4 bottom-[20vh] right-24 opacity-75 flex gap-4">
      <motion.span className="text-2xl font-aileron-light  text-slate-800 dark:text-slate-300">
        Scroll
      </motion.span>
      <motion.div
        initial={{ rotate: 0 }}
        animate={{
          rotate: "5deg",
          transition: { duration: 0.2, type: easeInOut },
        }}
      >
        <RxDoubleArrowRight size={40} />
      </motion.div>
    </div>
  );
}

export default ScrollElem;
