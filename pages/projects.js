import React, { useState, useRef } from "react";
import { ThemeProvider } from "next-themes";
import CardCarousel from "@/components/CardCarousel";
import Header from "@/components/Header";
import ScrollElem from "@/components/ScrollElem";

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
      link: "https://github.com/BarunKGP/HAAR",
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
      link: "https://github.com/ChayneThrash/DomainBed/tree/main",
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
      link: "https://github.com/BarunKGP/gpt-stories",
    },
    {
      title: "Blockboard",
      imgSrc: "/blocks.jpg",
      description:
        "    Multifunctional tool for Bitcoin analysis and visualizations based on block time ",
      skills: "Flask, Pandas, scikit, D3.js, MySQL",
      start: "08-2021",
      end: "12-2021",
      link: "https://github.com/Qblinx-BlockBoard/blockboard",
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
    <div className="grid grid-cols-1 gap-8 justify-items-center overflow-hidden mt-28 px-10">
      {/* <Header /> */}
      <div className="w-full">
        <CardCarousel cards={cards} />
      </div>
      <div className="max-h-[5rem] flex flex-row-reverse w-full absolute bottom-4">
        <ScrollElem />
      </div>
    </div>
  );
}
