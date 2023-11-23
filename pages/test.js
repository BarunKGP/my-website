import React from "react";
import favicon from "@/public/favicon.png";
import MainLogo from "@/components/MainLogo";
import VerticalBento from "@/components/VerticalBento";

function test() {
  return (
    <div className="mt-28 w-[50vw] mx-auto p-5 grid gap-6">
      <div>
        <h2 className="font-aileron-light text-indigo-950 dark:text-lime-100 px-4 text-8xl inline-block">
          About
        </h2>
        <div className="bg-slate-900 dark:bg-lime-100 h-[1.5px] ml-[265px] max-w-full overflow-hidden"></div>
        <div className="text-slate-900 dark:text-slate-300 font-mplus1 text-2xl p-4">
          I am an engineering generalist who enjoys tinkering on the backend and
          across machine learning, software engineering and data science. I am
          currently enthralled with multimodality and spend a lot of time
          devising effective multimodal AI, that helps generate unique
          data-driven insights.
        </div>
      </div>
      <div>
        <h2 className="font-aileron-light text-indigo-950 px-4 text-8xl inline-block">
          Journey
        </h2>
        <div className="bg-slate-900 h-[1.5px] ml-[310px] max-w-full overflow-hidden"></div>
        <VerticalBento />
      </div>
    </div>
    // <div className="mt-28 px-20 h-[1300px] w-full grid grid-cols-2 test-div-2 gap-4 p-5">
    //   <div className="test-div-1 bg-purple-950 min-h-[200px] h-full w-full col-span-2"></div>
    //   <div className="test-div-1 bg-purple-950 min-h-[200px] h-full w-full"></div>
    //   <div className="test-div-1 bg-purple-950 min-h-[200px] h-full w-full"></div>
    //   <div className="test-div-1 bg-purple-950 min-h-[200px] h-full w-full row-span-2 col-span-2"></div>
    //   <div className="test-div-1 bg-purple-950 min-h-[200px] h-full w-full"></div>
    //   <div className="test-div-1 bg-purple-950 min-h-[200px] h-full w-full"></div>
    // </div>
    // <div
    //   className="w-[500px] bg-lime-300 h-64 m-14 outline-dotted outline-slate-100
    // flex justify-center items-center gap-4"
    // >
    //   <div className="w-16 h-16 rounded-[50%] bg-slate-200 p-1.5"></div>
    // </div>
  );
}

export default test;
