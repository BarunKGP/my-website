import React, { useEffect, useState } from "react";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
import CollapsibleMenu from "@/components/CollapsibleMenu";

function project1() {
  const variant = {
    initial: {
      x: "100%",
    },
    animate: {
      x: "25%",
      transition: {
        type: "spring",
        duration: 0.7,
        delayChildren: 0.08,
        staggerChildren: 0.05,
      },
    },
    exit: {
      x: "100%",
    },
  };
  const [headingHover, setHeadingHover] = useState(false);

  return (
    <div className="main-bg p-5">
      <AnimatePresence>
        <motion.div
          initial="initial"
          animate="animate"
          variants={variant}
          className="relative w-1/2 translate-x-1/2"
        >
          <motion.h1
            whileHover={{
              "background-image":
                "linear-gradient(240deg, #c71d6f 50%, #d09693 80%)",
              transition: {
                ease: [0.6, 0.5, -0.02, 0.01],
                duration: 2,
              },
            }}
            variants={variant}
            className="heading-font m-5 text-gradient"
          >
            Human-assisted Action Recognition (HAAR)
          </motion.h1>
          <div className=" text-gray-500 justify-between items-center translate-x-1/4">
            <ul className="flex gap-7 justify-center list-disc italic">
              <li>PyTorch</li>
              <li>Deepspeed</li>
              <li>Huggingface</li>
              <li>opencv</li>
              <li>BERT</li>
            </ul>
          </div>
          <section className="p-5 para-font">
            <motion.p variants={variant} className="py-2">
              We used multimodal approaches (involving video and narration) to
              identify actions in egocentric view. Our approach uses attention
              and weak labels to learn an action embedding space without the
              need for precise frame-level annotations. This results in a much
              simpler and cheaper data gathering phase, which allows us to
              easily adapt large pretrained models to newer datasets.
            </motion.p>
            <motion.p variants={variant}>
              Our model uses a self-supervised approach to learn labels using
              the narration as a guide. We use multimodal attention blocks to
              compute the degree of similarity between narrations and vision
              features extracted from the frames. This helps us to isolate
              actions corresponding to labels. Our experiments on the{" "}
              <a
                href="https://epic-kitchens.github.io/2022#challenge-action-recognition"
                target="_blank"
                className="link-font"
              >
                EPIC-Kitchens-100
              </a>{" "}
              dataset shows that our method outperforms state-of-the-art models
              in weakly supervised action recognition.
            </motion.p>
          </section>
          <motion.div className="font-mono text-gray-500 justify-between items-center translate-x-1/4">
            {/* <motion.div>
              <ul className="flex gap-10 justify-center list-disc italic">
                <li>PyTorch</li>
                <li>Deepspeed</li>
                <li>Huggingface</li>
                <li>opencv</li>
                <li>BERT</li>
              </ul>
            </motion.div> */}
            <motion.div className="flex-1">Links</motion.div>
          </motion.div>
          <motion.div variants={variant} className="w-full flex flex-col">
            <CollapsibleMenu name={"Milestones"} />
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default project1;
