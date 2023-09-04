import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
// import { useMediaQuery } from "react-responsive";

function CardCarousel({ cards }) {
  const [centeredCardIndex, setCenteredCardIndex] = useState(0);

  // Track the position of the carousel
  const x = useMotionValue(0);

  // Define the drag constraints
  const dragConstraints = { left: -600, right: 600 };

  // Update the centered card index based on the x position
  const updateCenteredCard = (x) => {
    const newIndex = Math.round(x / 300); // Adjust this value based on your card width
    console.log(newIndex);
    setCenteredCardIndex(newIndex);
  };

  return (
    <div className=" card-carousel-container">
      <motion.div
        className="card-carousel"
        style={{ x }}
        drag="x"
        dragConstraints={dragConstraints}
        dragElastic={1}
        onDrag={(_, { point }) => updateCenteredCard(point.x)}
      >
        {cards.map((card, index) => (
          <motion.div key={index} className="relative card h-full w-full">
            <Image
              src={card.imgSrc}
              alt="card"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="card-og"
            />
            {/* <h3 className="text-xl font-semibold text-slate-700">
              {card.title}
            </h3>
            <p className="text-gray-600">{card.description}</p> */}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default CardCarousel;
