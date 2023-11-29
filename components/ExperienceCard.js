import { Cantarell, Quicksand } from "next/font/google";
import React from "react";

const qs = Quicksand({
  weight: ["300"],
  subsets: ["latin"],
  variable: "--font-qs",
});

const cantarell = Cantarell({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-cantarell",
});

function ExperienceCard({ experience, width = "full", height = "half" }) {
  const widthVariants = {
    full: "w-full col-span-2",
    half: "w-full",
  };
  const heightVariants = {
    full: "h-full row-span-2",
    half: "h-full",
  };
  const expVariants = {
    work: "exp-card-work dark:dark-card-work",
    education: "exp-card-education dark:dark-card-education",
  };
  const dates = experience.date.split(" - ");
  console.log(heightVariants[height], experience.id);
  return (
    <div
      className={`min-h-[200px] ${heightVariants[height]} ${
        widthVariants[width]
      } ${
        expVariants[experience.type.toLowerCase()]
      } rounded-2xl border-none p-4 flex justify-between shadow-xl`}
    >
      <div className=" flex flex-col gap-2">
        <h2
          className={`${cantarell.variable} font-cantarell dark:text-slate-300
          text-stone-900 text-4xl`}
        >
          {experience.type == "work" ? experience.position : experience.school}
        </h2>
        <h3
          className={`${cantarell.variable} font-cantarell dark:text-slate-400
           text-stone-800 text-2xl font-cantarell-400`}
        >
          {experience.type == "work" ? experience.company : experience.degree}
        </h3>
        <p className="dark:text-slate-400 text-stone-800 text-xl font-noto">
          {experience.location}
        </p>
      </div>
      <div
        className="flex flex-col justify-between h-full px-4 text-right
       border-r-slate-800 dark:border-r-slate-200 border-r-4 rounded-r-sm "
      >
        <p
          className={`${qs.variable} font-qs dark:text-slate-200 text-indigo-950
          text-lg`}
        >
          {dates[1]}
        </p>
        <p
          className={`${qs.variable} font-qs dark:text-slate-200 text-indigo-950
          text-lg`}
        >
          {dates[0]}
        </p>
      </div>
    </div>
  );
}

export default ExperienceCard;
