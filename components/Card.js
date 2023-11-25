import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

function Card({ imgSrc, twClassNames, onDirectionLock, onDragEnd }) {
  const _classNames = twClassNames + "relative h-full p-10 w-full ";
  return (
    <motion.div
      className={_classNames}
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragDirectionLock
      onDirectionLock={onDirectionLock}
      onDragEnd={onDragEnd}
      animate={animate}
      transition={{ ease: [0.6, 0.05, -0.01, 0.9] }}
      whileTap={{ scale: 0.85 }}
    >
      <Image
        src={imgSrc}
        alt="card logo"
        draggable={false}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="card-og"
      />
    </motion.div>
  );
}

export default Card;
