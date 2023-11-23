import React from "react";

const swipeBackground = () => {};
function LearnMore({ text }) {
  return (
    <div>
      <button
        className="group relative scale-100 transition-transform overflow-hidden rounded-md text-md 
      shadow hover:scale-125 bg-gradient-to-r from-emerald-700 to-slate-900"
      >
        {/* <div className="absolute inset-0 w-3  transition-all duration-[250ms] ease-out group-hover:w-full"></div> */}
        <a
          className=" py-2 px-2 border-none rounded-md ml-3 text-stone-200 font-mono hover:text-white text-xl text-center inline-block"
          href="https://drive.google.com/file/d/18kfzzxiHuOqVZdCBnmUnr3cFvJ2KRdmI/view"
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>
        {/* <span className="relative text-black group-hover:text-white">
          Learn more
        </span> */}
      </button>

      {/* <button
        type="button"
        // className="btn-container font-mono p-2 text-md rounded-md bg-gradient-to-tr from-lime-300 to-blue-600
        // after:scale-0 after:rotate-0 after:transition-all after:ease-[cubic-bezier(0.680, -0.550, 0.265, 1.550)] duration-500
        // hover:scale-125"
        className="btn btn5"
      >
        {text}
      </button> */}
    </div>
  );
}

export default LearnMore;
