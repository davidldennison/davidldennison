import React from "react";

const skillsContent = [
  {
    name: "Social Media Marketing",
    skillPercent: "95",
  },
  {
    name: "Search Engine Optimization",
    skillPercent: "80",
  },
  {
    name: "Search Engine Marketing",
    skillPercent: "90",
  },
  {
    name: "Content Marketing",
    skillPercent: "95",
  },
  {
    name: "Lead Generation",
    skillPercent: "80",
  },
  {
    name: "Website Copy",
    skillPercent: "90",
  },
  {
    name: "Case Studies",
    skillPercent: "88",
  },
  {
    name: "Press/News Release",
    skillPercent: "95",
  },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="progress_inner" key={i}>
          <span className="label">{val.name}</span>
          <div className="background">
            <div className="bar">
              <div
                className="bar_in"
                style={{ width: val.skillPercent + "%" }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Skills;
