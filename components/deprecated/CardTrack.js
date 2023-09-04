import React, { useEffect, useRef, useState } from "react";
import Card from "../Card";
import { motion } from "framer-motion";

function CardTrack({ cards }) {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(1240);
  }, []);

  return (
    <div
      ref={carousel}
      className="carousel w-screen translate-x-1/2 overflow-hidden"
    >
      <motion.div
        className="inner-carousel p-5 flex justify-evenly gap-12 h-screen w-full overflow-hidden"
        drag="x"
        dragConstraints={{
          right: 0,
          left: -width,
        }}
      >
        {cards.map((card, i) => {
          return (
            <motion.div key={card.title} className="min-h-40r h-1/3 w-full">
              <Card imgSrc={card.imgSrc} />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}

export default CardTrack;
