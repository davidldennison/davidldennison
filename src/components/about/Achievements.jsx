import React from "react";

const achievementsContent = [
  { title: "14", subTitle1: "years of", subTitle2: "Experience" },
  { title: "97", subTitle1: "Completed", subTitle2: "Projects" },
  { title: "81", subTitle1: "Happy", subTitle2: "Customers" },
  { title: "53", subTitle1: "Most awards ", subTitle2: "Winner" },
];

const Achievements = () => {
  return (
    <div className="row">
      {achievementsContent.map((val, i) => (
        <div className="col-6" key={i}>
          <div className="box-stats with-margin">
            <h3 className="poppins-font position-relative">{val.title}</h3>
            <p className="open-sans-font m-0 position-relative text-uppercase">
              {val.subTitle1} <span className="d-block">{val.subTitle2}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Achievements;
