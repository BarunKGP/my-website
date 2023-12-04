import React, { useState } from "react";
import { Cantarell } from "next/font/google";

const cantarell = Cantarell({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-cantarell",
});
function _Cep() {
  const [data, setData] = useState({});

  function handleName(e) {
    const updatedData = data;
    console.log(e);
    // updatedData['name'] = e.target.name
    // setData(updatedData)
  }

  function handleEnd(e) {
    console.log("Shutting down");
    console.log(data);
  }

  return (
    <div className="mt-28 my-auto translate-y-[30vh] w-full">
      <div>
        <div className="flex gap-4 justify-center p-5">
          <label
            htmlFor="name"
            className={`text-2xl ${cantarell.variable} font-cantarell p-2`}
          >
            Enter name
          </label>
          <input
            type="text"
            id="name"
            name="username"
            placeholder="Name"
            className="w-[500px] p-2 rounded-lg"
          />
          <span>
            <button
              className={`bg-green-700 rounded-lg text-2xl p-2 ${cantarell.variable} font-cantarell`}
              onClick={(e) => handleName(e)}
            >
              Submit
            </button>
          </span>
        </div>
      </div>
      <div className="flex justify-center gap-4">
        <button
          className={`bg-gradient-to-tr from-blue-900 to-pink-600
          rounded-lg text-2xl text-stone-300 p-2 
          ${cantarell.variable} font-cantarell`}
          onClick={() => {}}
        >
          Log time
        </button>
        <button
          className={`bg-orange-700 rounded-lg text-2xl p-2 ${cantarell.variable} font-cantarell`}
          onClick={() => {}}
        >
          End test
        </button>
      </div>
    </div>
  );
}

export default _Cep;
