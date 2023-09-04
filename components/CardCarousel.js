// "use-client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useAnimate,
  easeIn,
  easeInOut,
} from "framer-motion";

function getWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    // Call event listener right away to initialize windowSize
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

function CardCarousel({ cards }) {
  const winSize = getWindowSize(),
    screenCenter = { x: winSize.width / 2, y: winSize.height / 2 };
  //   console.log(screenCenter);
  //   const cardSize = useRef();
  const carousel = useRef(null);
  const { scrollXProgress } = useScroll({ container: carousel });
  const [hoverCardIndex, setHoverCardIndex] = useState(0);
  let projectTitle = cards[hoverCardIndex].title;

  useEffect(() => {
    projectTitle = cards[hoverCardIndex].title;
  }, [hoverCardIndex]);

  const projNameVariant = {
    initial: {
      x: 0,
    },
    enter: {
      y: 50,
      //   x: [50, 100],
      //   scale: [1.5, 1],
    },
  };

  return (
    <div className="grid gap-6 grid-cols-1 justify-items-center align-middle ">
      <svg
        viewBox="0 0 100 100"
        width="100"
        height="100"
        className="-rotate-90 "
      >
        <circle cx="50" cy="50" r="30" pathLength="1" className="circle-bg" />
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          pathLength="1"
          strokeDashoffset="0"
          className="stroke-lime-100 stroke-[15px] scale-90"
          style={{ pathLength: scrollXProgress }}
        />
      </svg>
      <motion.div
        ref={carousel}
        className="flex flex-col overflow-x-scroll no-scrollbar 
        gap-10 p-5 grow-0 shrink-0 w-full min-h-[870px] flex-1
        md:flex-row"
      >
        {cards.map((card, i) => {
          return (
            <div
              key={i}
              className="card-div grow-0 shrink-0"
              onMouseEnter={(e) => setHoverCardIndex(i)}
            >
              <Image
                src={card.imgSrc}
                draggable={false}
                alt="card-1"
                fill
                className="object-cover rounded-md"
              />
            </div>
          );
        })}
      </motion.div>
      <motion.div
        key={projectTitle}
        animate={{ x: 50 }}
        transition={{ type: "spring", damping: 30, bounce: 0.3 }}
        className="min-w-[300px]"
      >
        <div>
          <h2 className="text-lime-100 text-2xl text-center ">
            {projectTitle}
          </h2>
        </div>
      </motion.div>
    </div>
  );
}

export default CardCarousel;
