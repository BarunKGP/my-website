import React, { useState } from "react";
import { motion } from "framer-motion";

function ProjectName({ projName }) {
  return (
    <motion.div
      className="border-gray-600 border-b-2 border-t-2 p-2 m-2 translate-y-1/2` h-fit w-fit text-center"
      whileHover={{
        scale: 1.1,
        borderColor: "#d1d5db",
      }}
    >
      <motion.h2
        className="text-2xl text-gray-400"
        whileHover={{
          color: "#d1d5db",
        }}
      >
        {projName.toUpperCase()}
      </motion.h2>
    </motion.div>
  );
}

export default ProjectName;
