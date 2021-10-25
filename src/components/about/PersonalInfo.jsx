import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "David" },
  { meta: "last name", metaInfo: "Dennison" },
  { meta: "Age", metaInfo: "32 Years" },
  { meta: "Nationality", metaInfo: "USA" },
  { meta: "Freelance", metaInfo: "Available" },
  { meta: "Address", metaInfo: "Las Vegas" },
  { meta: "phone", metaInfo: "702-556-5602" },
  { meta: "Email", metaInfo: "david@daviddennison.com" },
  { meta: "Skype", metaInfo: "davidleedennison" },
  { meta: "langages", metaInfo: "English" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
