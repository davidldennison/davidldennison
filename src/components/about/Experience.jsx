import React from "react";

const experienceContent = [
  {
    year: "2019 - Present",
    position: "Director of Social Media, Content, and SEO Marketing",
    compnayName: "K2 Analytics Digital Marketing Agency",
    details: `As an expert in the digital world, I believe content marketing, social media, and SEO are essential pieces to every brand’s marketing plan. I thrive in developing and implementing marketing strategies that aligned with brand goals and objectives.`,
  },
  {
    year: "November 2008 - December 2019",
    position: " Small Business Owner",
    compnayName: "Self-employment",
    details: `Starting my own social media marketing business gave me extensive
    knowledge in networking, business development, client relations, lead
    generation, and many more areas of expertise within a business.
    `,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <img src="img/about/briefcase.png" alt="icon" />
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
