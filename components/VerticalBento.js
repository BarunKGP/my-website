import React from "react";
import { experienceData } from "./data/experience-data";
import ExperienceCard from "./ExperienceCard";

const VerticalBento = () => {
  return (
    <div className="flex justify-center p-4">
      <div className="grid gap-6 md:grid-cols-2">
        {experienceData.map((exp, i) => (
          <ExperienceCard
            key={i}
            experience={exp}
            width={i === 0 || i === 3 ? "full" : "half"}
            height={i === 3 ? "full" : "half"}
          />
        ))}
      </div>
    </div>
  );
};

export default VerticalBento;
