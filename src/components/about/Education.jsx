import React from "react";

const educationContent = [
  {
    year: "2014-2019",
    degree: "Bachelor of Science in Hospitality Management",
    institute: "University of Nevada-Las Vegas",
    details: `Concentration in Meetings and Events & Food and Beverage`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <img src="img/about/book.png" alt="icon" />
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
