import { ThemeProvider } from "next-themes";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

function Card({ imgSrc }) {
  return (
    <motion.div className="relative h-full p-10 w-full ">
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
