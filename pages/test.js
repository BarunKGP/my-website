import React from "react";
import favicon from "@/public/favicon.png";
import MainLogo from "@/components/MainLogo";

function test() {
  return (
    <div className="mt-28 px-20 h-[1300px] w-full grid grid-cols-2 test-div-2 gap-4 p-5">
      <div className="test-div-1 bg-purple-950 min-h-[200px] h-full w-full col-span-2"></div>
      <div className="test-div-1 bg-purple-950 min-h-[200px] h-full w-full"></div>
      <div className="test-div-1 bg-purple-950 min-h-[200px] h-full w-full"></div>
      <div className="test-div-1 bg-purple-950 min-h-[200px] h-full w-full row-span-2 col-span-2"></div>
      <div className="test-div-1 bg-purple-950 min-h-[200px] h-full w-full"></div>
      <div className="test-div-1 bg-purple-950 min-h-[200px] h-full w-full"></div>
    </div>
    // <div
    //   className="w-[500px] bg-lime-300 h-64 m-14 outline-dotted outline-slate-100
    // flex justify-center items-center gap-4"
    // >
    //   <div className="w-16 h-16 rounded-[50%] bg-slate-200 p-1.5"></div>
    // </div>
  );
}

export default test;
