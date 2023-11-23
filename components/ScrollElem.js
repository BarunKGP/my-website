import React from "react";
import { RxDoubleArrowRight } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";

function ScrollElem() {
  return (
    <div className="absolute p-4 bottom-[20vh] right-24 opacity-75 flex gap-4">
      <motion.span className="text-2xl font-aileron-light  text-slate-800 dark:text-slate-300">
        Scroll
      </motion.span>
      <RxDoubleArrowRight size={40} />
    </div>
  );
}

export default ScrollElem;
