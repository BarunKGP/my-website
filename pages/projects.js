import React, { useState, useRef } from "react";
import { ThemeProvider } from "next-themes";
import CardCarousel from "@/components/CardCarousel";
import Header from "@/components/Header";

export default function projects() {
  const cards = [
    {
      title: "",
      imgSrc: "",
      description: "",
      skills: "",
      start: "01-2022",
      end: "07-2023",
      link: "",
    },
    {
      title: "HAAR",
      imgSrc: "/epic-kitchens.png",
      description:
        "    Multimodal transformers for human action recognition, learning actions from video narrations. " +
        "Trained using Deepspeed and accelerate to leverage the power of parallelized compute.",
      skills: "pytorch, accelerate, Transformers, DeepSpeed",
      start: "01-2022",
      end: "07-2023",
      link: "/",
    },
    {
      title: "DoGe",
      imgSrc: "/domainbed.jpg",
      description:
        "Improved domain generalization (DG) robustness to distribution shifts on image datasets through" +
        " novel learning objectives designed on gradient muting and regularization.",
      skills: "PyTorch, tensorboard, scikit-learn",
      start: "09-2022",
      end: "12-2022",
      link: "/",
    },
    {
      title: "AI Storytelling",
      imgSrc: "/gpt-stories.png",
      description:
        "    GPT based story generator from user prompts, with a focus on improving story coherence and structure",
      // "self-supervised action recognition approach. Eliminating the need for precise frame-level" +
      // " annotations were a major milestone, which proved that the cost of video data collection can be" +
      // "significantly reduced if downstream tasks incorporate additional modalities, which are often " +
      // "cheaper and easier to procure.",
      skills: "PyTorch, accelerate, Transformers, DeepSpeed",
      start: "01-2022",
      end: "07-2023",
    },
    {
      title: "Blockboard",
      imgSrc: "/blocks.jpg",
      description:
        "    Multifunctional tool for Bitcoin analysis and visualizations based on block time " +
        "(created back when Bitcoin was cool)",
      skills: "Flask, Pandas, scikit, D3.js, MySQL",
      start: "08-2021",
      end: "12-2021",
      link: "/",
    },
    {
      title: "",
      imgSrc: "",
      description: "",
      skills: "",
      start: "01-2022",
      end: "07-2023",
      link: "",
    },
    // {
    //   title: "",
    //   imgSrc: "",
    //   description: "",
    //   skills: "",
    //   start: "01-2022",
    //   end: "07-2023",
    // },
  ];
  return (
    <div className="flex gap-4 flex-col justify-evenly overflow-hidden mt-28 px-20">
      {/* <Header /> */}
      <div className=" grow-[3] shrink basis-3/4  w-full ">
        <CardCarousel cards={cards} />
      </div>
      <div className=" grow shrink basis-1/4 w-full"></div>
    </div>
  );
}
