import React from "react";
import { Link } from "react-router-dom";

const previewDemo = [
  {
    img: "2",
    title: "Light Demo",
    routerPath: "/home-light",
    delayAnimation: "",
  },
  {
    img: "3",
    title: "Dark Demo",
    routerPath: "/home-dark",
    delayAnimation: "50",
  },
];

const Preview = () => {
  document.body.classList.add("light");
  return (
    <div className="edina_tm_intro">
      <span className=" preview-sticker pos-sticker react-sticker">
        <h6>React</h6>
        <img src="img/intro/react.svg" alt="react krozo" />
      </span>
      {/* preview sticker */}

      <div className="mainpart" id="demos">
        <div className="container">
          <div className="main_title">
            <img src="img/intro/logo.png" alt="brand" />
            <p>Personal Portfolio React Template</p>
          </div>
          {/* End main_title */}

          <div className="demo_list">
            <ul>
              {previewDemo.map((val, i) => (
                <li
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay={val.delayAnimation}
                  key={i}
                >
                  <div className="list_inner">
                    <img src={`img/intro/${val.img}.jpg`} alt="demo" />
                    <h3>{val.title}</h3>
                    <Link
                      className="edina_tm_full_link"
                      to={val.routerPath}
                      target="_blank"
                      rel="noreferrer"
                    ></Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* End  .mainpart */}

      <div className="go_purchase">
        <h6 data-aos="fade-up" data-aos-duration="1200">
          You are at the right step now
        </h6>
        <h3 data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
          Purchase Edina and Build Your Super Fast{" "}
          <span className="theme-color">React JS</span> &amp;{" "}
          <span className="theme-color">Pure CSS </span> Based Portfolio
          Template.
        </h3>
        <div
          className="edina_tm_button intro"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="200"
        >
          <a
            href="https://themeforest.net/item/edina-personal-portfolio-react-template/34082686"
            target="_blank"
            rel="noreferrer"
          >
            Purchase Now
          </a>
        </div>
      </div>
      {/* End go_purchase */}

      <div className="copyright">
        <p>
          {" "}
          &copy; {new Date().getFullYear()} Edina by{" "}
          <a href="https://themeforest.net/user/ib-themes" target="_blank">
            ib-themes.
          </a>{" "}
          All Rights Reserved.
        </p>
      </div>
      {/* End .copyright */}
    </div>
  );
};

export default Preview;
