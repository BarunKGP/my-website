import { useState } from "react";
import { easeInOut, motion, Variants } from "framer-motion";

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
      delayChildren: 0.2,
    },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.4 } },
};

const bulletVariants = {
  closed: {
    opacity: 0,
    x: 10,
    rotate: 180,
    transition: { duration: 0.3 },
  },
  open: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
    },
  },
};
function CollapsibleMenu({ name }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="menu "
    >
      <motion.button
        className="collapsible-button"
        whileTap={{ scale: 0.97 }}
        whileHover={{
          "background-image":
            "linear-gradient( 249.6deg,  rgba(238,113,113,1) 1%, rgba(246,215,148,1) 58% )",
          transition: { duration: 1, ease: easeInOut },
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {name}
        <motion.div
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 },
          }}
          transition={{ duration: 0.2 }}
          style={{ originY: 0.55 }}
        >
          <svg width="15" height="15" viewBox="0 0 20 20">
            <path d="M0 7 L 20 7 L 10 16" />
          </svg>
        </motion.div>
      </motion.button>
      <motion.ul
        variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05,
            },
          },
          closed: {
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3,
            },
          },
        }}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
        className="flex flex-col gap-2 "
      >
        <motion.li variants={itemVariants} className="collapsible-items">
          <motion.span variants={bulletVariants}>
            <img
              src="/icons/list_bullet.svg"
              height="20px"
              width="20px"
              alt="list-bullet"
            ></img>
          </motion.span>
          <span className="text-justify border-red-500 flex-1">
            Developed a novel approach for action recognition, using RGB, flow
            and narration data from video clips
          </span>
        </motion.li>
        <motion.li variants={itemVariants} className="collapsible-items">
          <motion.span variants={bulletVariants}>
            <img
              src="/icons/list_bullet.svg"
              height="20px"
              width="20px"
              alt="list-bullet"
            ></img>
          </motion.span>
          <span className="text-justify border-red-500 flex-1">
            Devised a multimodal attention mechanism to identify relevant action
            frames based on the narration in the video, thereby enhancing action
            recognition accuracy compared to baselines using a single data
            stream
          </span>
        </motion.li>
        <motion.li variants={itemVariants} className="collapsible-items">
          <motion.span variants={bulletVariants}>
            <img
              src="/icons/list_bullet.svg"
              height="20px"
              width="20px"
              alt="list-bullet"
            ></img>
          </motion.span>
          <span className="text-justify border-red-500 flex-1">
            Replaced expensive frame-level annotations with self-supervised
            learning for a very cost-effective training process
          </span>
        </motion.li>
        <motion.li variants={itemVariants} className="collapsible-items">
          <motion.span variants={bulletVariants}>
            <img
              src="/icons/list_bullet.svg"
              height="20px"
              width="20px"
              alt="list-bullet"
            ></img>
          </motion.span>
          <span className="text-justify border-red-500 flex-1">
            Spearheaded the design and implementation of scalable data pipelines
            and infrastructure to support feature extraction and model training
            from over 100 hours of 1080p video comprising of 20 million RGB
            frames
          </span>
        </motion.li>
        <motion.li variants={itemVariants} className="collapsible-items">
          <motion.span variants={bulletVariants}>
            <img
              src="/icons/list_bullet.svg"
              height="20px"
              width="20px"
              alt="list-bullet"
            ></img>
          </motion.span>
          <span className="text-justify border-red-500 flex-1">
            Accelerated distributed model training by streamlining
            infrastructure utilization on a multi-GPU cluster
          </span>
        </motion.li>
      </motion.ul>
    </motion.nav>
  );
}

export default CollapsibleMenu;
