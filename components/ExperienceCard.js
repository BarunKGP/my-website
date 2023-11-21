import React from "react";

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
        <h2 className="dark:text-slate-300 text-stone-900 text-5xl font-quicksand-300">
          {experience.type == "work" ? experience.position : experience.school}
        </h2>
        <h3 className="dark:text-slate-400 text-stone-800 text-3xl font-cantarell-400">
          {experience.type == "work" ? experience.company : experience.degree}
        </h3>
        <p className="dark:text-slate-400 text-stone-800 text-xl font-noto">
          {experience.location}
        </p>
      </div>
      <div className="flex flex-col justify-between h-full px-4 text-right border-r-slate-800 border-r-4 rounded-r-sm ">
        <p className="dark:text-slate-200 text-indigo-950 font-noto text-lg w-full">
          {dates[1]}
        </p>
        <p className="dark:text-slate-200 text-indigo-950 font-noto text-lg w-full">
          {dates[0]}
        </p>
      </div>
    </div>
  );
}

export default ExperienceCard;
