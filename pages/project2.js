import CollapsibleMenu from "@/components/CollapsibleMenu";
import { AnimatePresence } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

function project2() {
  const parentRef = useRef();
  let translation = {};
  useEffect(() => {
    translation = {
      x: (window.innerWidth - parentRef.current.offsetWidth) / 2,
      y: (window.innerHeight - parentRef.current.offsetHeight) / 2,
    };
    console.log(translation);
  }, []);

  //   const parentClassName =
  //     "translate-x-[" +
  //     translation.x +
  //     "px] container min-h-screen flex-col gap-5 justify-between";

  //   console.log(parentClassName);

  return (
    <main className="main-bg absolute ">
      <AnimatePresence>
        <div ref={parentRef} className="project-parent">
          <div className="project-sections">
            <h2 className="heading-font m-5 text-gradient">
              Domain Generalization (DoGe)
            </h2>
          </div>
          <div className="project-sections"></div>
          <div className="project-sections">
            <CollapsibleMenu name={"Milestones"} />
          </div>
          <div className="project-sections"></div>
        </div>
      </AnimatePresence>
    </main>
  );
}

export default project2;
