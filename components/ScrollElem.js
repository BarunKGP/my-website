import React from "react";
import { RxDoubleArrowRight } from "react-icons/rx";
import { motion, AnimatePresence, easeInOut } from "framer-motion";

function ScrollElem() {
  return (
    <div className="absolute p-4 bottom-[20vh] right-24 opacity-75 flex gap-4">
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
