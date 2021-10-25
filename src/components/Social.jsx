import React from "react";
import { FiTwitter, FiLinkedin, FiHexagon } from "react-icons/fi";

const SocialShare = [
  {
    iconName: <FiTwitter />,
    link: "https://www.linkedin.com/in/davidldennison/",
    title: "Twitter",
  },
  {
    iconName: <FiLinkedin />,
    link: "https://www.linkedin.com/in/davidldennison/",
    title: "Linkedin",
  },
  {
    iconName: <FiHexagon />,
    link: "https://community.hubspot.com/t5/user/viewprofilepage/user-id/204209",
    title: "HubSpot",
  },
];
const Social = () => {
  return (
    <ul>
      {SocialShare.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" title={val.title} rel="noreferrer">
            {val.iconName}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
