import React, { useState } from "react";
import Skills from "../skills/Skills";
import Modal from "react-modal";
import ModalContent from "./modal/ModalContent";

Modal.setAppElement("#root");

const About = () => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleModalOne() {
    setIsOpen(!isOpen);
  }

  return (
    //    ABOUT
    <div className="edina_tm_about" id="about">
      <div className="container">
        <div className="about_title">
          <h3>About Me</h3>
        </div>
        <div className="content">
          <div
            className="leftpart"
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            <div className="info">
              <h3>
                Hi, I'm <span>David Dennison</span>
              </h3>
              <p>
                I'm a creative digital marketer that can help you attract more
                customers, improve conversions, and make your digital presence
                unforgettable. My passion for people and business is fueled by
                my experience as an entrepreneur and storyteller. I’m a marketer
                and a storyteller wrapped into one, able to create compelling
                marketing that will encourage your audience to take action.
              </p>
              <p>
                For businesses like yours, I will develop and execute a
                marketing strategy that motivates your customers and keeps them
                engaged. From your website to your social media platforms to
                your blog, I will help you tell stories in an engaging,
                inspiring way that establishes your brand and builds trust with
                your customers.
              </p>
              {/* <p>
                I’ll work with you to figure out your goals and come up with a
                strategy that fits your needs. I don’t believe in a one size
                fits all approach, but I do believe in marketing that connects
                your customers with your business.
              </p>
              <p>
                Whether you have a small business, are building an E-Commerce
                site, or are in the process of growing your brand, I can help
                breathe new life into your digital marketing.
              </p>
              <p>
                You have goals. I have the knowledge and expertise to help you
                reach them. Let's get to work!
              </p> */}
              <div className="my_skills">
                <h3>
                  {" "}
                  Let's break down some of the types of marketing I can help you
                  with various way:
                </h3>
              </div>
              <ul>
                <li>E-Mails & Newsletters</li>
                <li>
                  Website Content (Homepages & Landing Pages, Product Page &
                  Descriptions, Blogs, Articles, etc.)
                </li>
                <li>Ad Copy</li>
                <li>Social Media Posts</li>
                <li>Search Engine Optimization (SEO)</li>
                <li>Sales and/or Lead Generation</li>
                <li>Creative Content</li>
                <li>Case Studies</li>
                <li>Press / News Releases</li>
              </ul>
            </div>
            <div className="my_skills">
              <div className="edina_tm_button">
                <button
                  type="submit"
                  className="color"
                  onClick={toggleModalOne}
                >
                  More About Me
                </button>
              </div>
            </div>
          </div>
          {/* End leftpart */}

          <div className="rightpart">
            <div className="image">
              <img src="img/thumbs/26-35.jpg" alt="thumb" />

              <div
                className="main"
                style={{
                  backgroundImage: `url(${
                    process.env.PUBLIC_URL + "img/about/2.jpg"
                  })`,
                }}
                data-aos="fade-left"
                data-aos-duration="1200"
                data-aos-delay="200"
              ></div>

              <div
                className="experience"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                <div className="info">
                  <h3>14+ Years</h3>
                  <span>Of Experiance</span>
                </div>
              </div>
            </div>
          </div>
          {/* End righttpart */}
        </div>
      </div>

      {/* Start About Details Modal */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModalOne}
        contentLabel="My dialog"
        className="custom-modal about-popup-wrapper"
        overlayClassName="custom-overlay "
        closeTimeoutMS={500}
      >
        <div className="edina_tm_modalbox">
          <button className="close-modal" onClick={toggleModalOne}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner">
            <div className="description_wrap scrollable">
              <ModalContent />
            </div>
          </div>
          {/* End box inner */}
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End  About Details Modal */}
    </div>
    // /ABOUT
  );
};

export default About;
