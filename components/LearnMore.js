import React from "react";

const swipeBackground = () => {};
function LearnMore({ text }) {
  return (
    <div>
      <button class="group relative scale-100 transition-transform h-12 w-32 overflow-hidden rounded-md bg-amber-400 text-md shadow hover:scale-125">
        <div class="absolute inset-0 w-3  transition-all duration-[250ms] ease-out group-hover:w-full"></div>
        <span class="relative text-black group-hover:text-white">
          Learn more
        </span>
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
