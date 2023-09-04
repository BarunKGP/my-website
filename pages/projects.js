import React, { useState, useRef } from "react";
import { ThemeProvider } from "next-themes";
import CardCarousel from "@/components/CardCarousel";

export default function projects() {
  const cards = [
    {
      title: "HAAR",
      imgSrc: "/haar-2.jpg",
      description:
        "We used vision and narration signals in a multimodal transformer architecture to design a " +
        "self-supervised action recognition approach. Eliminating the need for precise frame-level" +
        " annotations were a major milestone, which proved that the cost of video data collection can be" +
        "significantly reduced if downstream tasks incorporate additional modalities, which are often " +
        "cheaper and easier to procure.",
      skills: "pytorch, accelerate, Transformers, DeepSpeed",
      start: "01-2022",
      end: "07-2023",
    },
    {
      title: "DoGe",
      imgSrc: "/doge-2.jpg",
      description:
        "Improved domain generalization (DG) robustness to distribution shifts on image datasets through" +
        " novel learning objectives designed on gradient muting an regularizatoin.",
      skills: "PyTorch, tensorboard, scikit-learn",
      start: "09-2022",
      end: "12-2022",
    },
    {
      title: "AI Storytelling",
      imgSrc: "/gen-storytell.jpg",
      description:
        "We used vision and narration signals in a multimodal transformer architecture to design a " +
        "self-supervised action recognition approach. Eliminating the need for precise frame-level" +
        " annotations were a major milestone, which proved that the cost of video data collection can be" +
        "significantly reduced if downstream tasks incorporate additional modalities, which are often " +
        "cheaper and easier to procure.",
      skills: "PyTorch, accelerate, Transformers, DeepSpeed",
      start: "01-2022",
      end: "07-2023",
    },
    {
      title: "Blockboard",
      imgSrc: "/blockboard.jpg",
      description:
        "Developed a multifunctional tool for Bitcoin (BTC) analysis and visualizations based on block time",
      skills: "Flask, Pandas, scikit, D3.js, MySQL",
      start: "08-2021",
      end: "12-2021",
    },
  ];

  return (
    <ThemeProvider attribute="class">
      <div className="main-bg flex gap-4 flex-col justify-evenly ">
        <div className=" grow-[3] shrink basis-3/4  w-full ">
          <CardCarousel cards={cards} />
        </div>
        <div className=" grow shrink basis-1/4 w-full"></div>
      </div>
    </ThemeProvider>
  );
}
