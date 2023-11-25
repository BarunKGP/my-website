import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  motion,
  useScroll,
  useTransform,
  useAnimate,
  easeIn,
  easeInOut,
  AnimatePresence,
  spring,
} from "framer-motion";

const useWindowSize = () => {
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
    handleResize(); // Call event listener right away to initialize windowSize

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
};

function CardCarousel({ cards }) {
  const carousel = useRef(null);
  const { scrollXProgress } = useScroll({ container: carousel });
  const [hoverCardIndex, setHoverCardIndex] = useState(0);
  const [show, setShow] = useState(false);
  let projectTitle = cards[hoverCardIndex].title;
  let projectDesc = cards[hoverCardIndex].description;

  useEffect(() => {
    projectDesc = cards[hoverCardIndex].description;
    projectTitle = cards[hoverCardIndex].title;
  }, [hoverCardIndex]);

  const router = useRouter();
  const handleCardClick = (forwardLink) => {
    // console.log(cardTitle);
    // router.push("/project" + e.target.id);
    // TODO: Add zod validation
    router.push(forwardLink);
  };

  return (
    <AnimatePresence key="cards" mode="wait">
      <motion.div
        className="grid gap-8 grid-cols-1 justify-items-end align-middle max-w-screen"
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: "10px", opacity: 1 }}
        exit={{ x: "100%" }}
        transition={{
          duration: 1,
          type: "spring",
          stiffness: 70,
        }}
      >
        <svg
          viewBox="0 0 100 100"
          width="100"
          height="100"
          // className="-rotate-90 "
        >
          <circle cx="50" cy="50" r="35" pathLength="1" className="circle-bg" />
          <motion.circle
            cx="50"
            cy="50"
            r="35"
            pathLength="1"
            strokeDashoffset="0"
            className="stroke-[15px] scale-90 stroke-violet-900 dark:stroke-lime-200"
            fill={"none"}
            style={{ pathLength: scrollXProgress }}
            transition={{
              delay: 1,
            }}
          />
        </svg>
        <motion.div
          ref={carousel}
          className="flex flex-col overflow-x-scroll no-scrollbar 
        gap-28 p-4 grow-1 shrink-0 w-full flex-1
        md:flex-row"
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: "0%" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {cards.map((card, i) => {
            if (i === 0 || i >= cards.length - 1) {
              return (
                <motion.div
                  key={i}
                  className="card-div grow-0 shrink-0"
                  onMouseEnter={(e) => setHoverCardIndex(i)}
                ></motion.div>
              );
            }
            return (
              <motion.div
                key={i}
                className="card-div grow-0 shrink-0"
                onMouseEnter={(e) => setHoverCardIndex(i)}
                onMouseLeave={(e) => setHoverCardIndex(0)}
                onClick={() => handleCardClick(card.link)}
                whileHover={{
                  x: "4px",
                  scale: 1.07,
                  transition: { duration: 0.4, ease: [0.6, 0.01, -0.05, 0.9] },
                }}
              >
                <Image
                  src={card.imgSrc}
                  draggable={false}
                  alt={"card-" + i}
                  id={i}
                  fill={true}
                  style={{ aspectRatio: 1 / 1 }}
                  className="relative object-cover"
                ></Image>
              </motion.div>
            );
          })}
        </motion.div>
        <motion.div
          key={projectTitle}
          variants={{
            initial: { x: 0 },
            animate: {
              x: "-35vw",
              transition: {
                type: "spring",
                duration: 0.2,
                stiffness: 100,
                bounce: 0.15,
                staggerChildren: 0.05,
                // delayChildren: ,
              },
            },
            exit: {
              x: 0,
              opacity: 0,
              transition: {
                duration: 0.4,
                ease: [0.5, 0.3, -0.05, 0.01],
              },
            },
          }}
          animate="animate"
          initial="initial"
          exit="exit"
          className="w-[30vw]"
        >
          <motion.div className="text-center p-4">
            <h2>
              {projectTitle.split("").map((ch, chIndex) => {
                return (
                  <motion.span
                    key={chIndex}
                    className="font-akatab tracking-tighter text-slate-800 dark:text-purple-500 text-5xl font-semibold"
                    variants={{
                      initial: { x: 0, opacity: 0 },
                      animate: {
                        x: 3 + chIndex * 1.2,
                        opacity: 1,
                        transition: {
                          duration: 0.6,
                          type: "easeIn",
                        },
                      },
                    }}
                  >
                    {ch}
                  </motion.span>
                );
              })}
            </h2>
            <p>
              {projectDesc.split("").map((ch, index) => {
                return (
                  <motion.span
                    key={index}
                    className="tracking-tight font-akatab font-thin dark:text-stone-300 text-gray-600 text-lg"
                    variants={{
                      initial: { x: 0, opacity: 0 },
                      animate: {
                        x: 8 + index * 8,
                        opacity: 1,
                        transition: {
                          duration: 0.3,
                          type: "spring",
                        },
                      },
                    }}
                  >
                    {ch}
                  </motion.span>
                );
              })}
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default CardCarousel;
