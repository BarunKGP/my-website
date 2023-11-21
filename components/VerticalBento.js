import React from "react";
import { experienceData } from "./data/experience-data";
import ExperienceCard from "./ExperienceCard";

const VerticalBento = () => {
  return (
    <div className="w-full h-full flex justify-center p-4">
      <div className="grid gap-6 grid-cols-2">
        {experienceData.map(
          (exp, i) => (
            <ExperienceCard
              key={i}
              experience={exp}
              width={i === 0 || i === 3 ? "full" : "half"}
              height={i === 3 ? "full" : "half"}
            />
          )
          // <div className='h-screen test-div-2 grid-cols-2 gap-5 justify-between w-1/2' >
          //     <div className='relative test-div-1 h-1/3 w-full'></div>
          //     <div className='relative test-div-1 h-1/6 w-full flex gap-2'>
          //       <div className='test-div-2 h-full w-1/2'></div>
          //       <div className='test-div-2 h-full w-1/2'></div>
          //     </div>
          //     <div className='test-div-1  w-[400px]'></div>
          //     <div className='test-div-1 w-[400px]'></div>
          // </div>
        )}
      </div>
    </div>
  );
};

export default VerticalBento;
