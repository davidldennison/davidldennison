import React, { useState } from "react";
import Modal from "react-modal";
import Tilt from "react-parallax-tilt";
import ModalFour from "./modal/ModalFour";
import ModalOne from "./modal/ModalOne";
import ModalThree from "./modal/ModalThree";
import ModalTwo from "./modal/ModalTwo";
import ModalFive from "./modal/ModalFive";
import ModalSix from "./modal/ModalSix";
import ModalSeven from "./modal/ModalSeven";
import ModalEight from "./modal/ModalEight";

Modal.setAppElement("#root");

const Service = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen7, setIsOpen7] = useState(false);
  const [isOpen8, setIsOpen8] = useState(false);

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }
  function toggleModalTwo() {
    setIsOpen2(!isOpen2);
  }
  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }
  function toggleModalFour() {
    setIsOpen4(!isOpen4);
  }
  function toggleModalFive() {
    setIsOpen5(!isOpen5);
  }
  function toggleModalSix() {
    setIsOpen6(!isOpen6);
  }
  function toggleModalSeven() {
    setIsOpen7(!isOpen7);
  }
  function toggleModalEight() {
    setIsOpen8(!isOpen8);
  }

  return (
    <div className="service_list">
      <ul>
        {/* Start Service Motion & Web Graphy */}
        <li data-aos="fade-right" data-aos-duration="1200">
          <Tilt>
            <div className="list_inner" onClick={toggleModalOne}>
              <div className="hover">
                <img className="svg custom" src="img/svg/1.png" alt="" />
                <div className="service_title">
                  <h3>Social Media Marketing</h3>
                </div>
                <div className="learn_more">
                  Learn More<span></span>
                </div>
              </div>
            </div>
          </Tilt>
        </li>
        {/* End Service Motion & Web Graphy */}

        {/* Start Service Ui/Ux Consultancy */}
        <li data-aos="fade-right" data-aos-duration="1200" data-aos-delay="100">
          <Tilt>
            <div className="list_inner" onClick={toggleModalTwo}>
              <div className="hover">
                <img className="svg custom" src="img/svg/2.png" alt="" />
                <div className="service_title">
                  <h3>Search Engine Optimization</h3>
                </div>
                <div className="learn_more">
                  Learn More<span></span>
                </div>
              </div>
            </div>{" "}
          </Tilt>
        </li>
        {/* End Service Ui/Ux Consultancy */}

        {/* Start Service Branding & Design */}
        <li data-aos="fade-right" data-aos-duration="1200" data-aos-delay="200">
          <Tilt>
            <div className="list_inner" onClick={toggleModalThree}>
              <div className="hover">
                <img className="svg custom" src="img/svg/3.png" alt="" />
                <div className="service_title">
                  <h3>Search Engine Marketing</h3>
                </div>
                <div className="learn_more">
                  Learn More<span></span>
                </div>
              </div>
            </div>
          </Tilt>
        </li>
        {/* End Service Branding & Design */}

        {/* Start Service Mobile App Design */}
        <li data-aos="fade-right" data-aos-duration="1200" data-aos-delay="300">
          <Tilt>
            <div className="list_inner" onClick={toggleModalFour}>
              <div className="hover">
                <img className="svg custom" src="img/svg/4.png" alt="" />
                <div className="service_title">
                  <h3>Content Marketing</h3>
                </div>
                <div className="learn_more">
                  Learn More<span></span>
                </div>
              </div>
            </div>
          </Tilt>
        </li>
        {/* End Service Mobile App Design */}

        {/* Start Service Mobile App Design */}
        <li data-aos="fade-right" data-aos-duration="1200" data-aos-delay="300">
          <Tilt>
            <div className="list_inner" onClick={toggleModalFive}>
              <div className="hover">
                <img className="svg custom" src="img/svg/5.png" alt="" />
                <div className="service_title">
                  <h3>Lead Generation</h3>
                </div>
                <div className="learn_more">
                  Learn More<span></span>
                </div>
              </div>
            </div>
          </Tilt>
        </li>
        {/* End Service Mobile App Design */}

        {/* Start Service Mobile App Design */}
        <li data-aos="fade-right" data-aos-duration="1200" data-aos-delay="300">
          <Tilt>
            <div className="list_inner" onClick={toggleModalSix}>
              <div className="hover">
                <img className="svg custom" src="img/svg/6.png" alt="" />
                <div className="service_title">
                  <h3>
                    Website <br /> Copy
                  </h3>
                </div>
                <div className="learn_more">
                  Learn More<span></span>
                </div>
              </div>
            </div>
          </Tilt>
        </li>
        {/* End Service Mobile App Design */}

        {/* Start Service Mobile App Design */}
        <li data-aos="fade-right" data-aos-duration="1200" data-aos-delay="300">
          <Tilt>
            <div className="list_inner" onClick={toggleModalSeven}>
              <div className="hover">
                <img className="svg custom" src="img/svg/7.png" alt="" />
                <div className="service_title">
                  <h3>
                    Case <br /> Studies
                  </h3>
                </div>
                <div className="learn_more">
                  Learn More<span></span>
                </div>
              </div>
            </div>
          </Tilt>
        </li>
        {/* End Service Mobile App Design */}

        {/* Start Service Mobile App Design */}
        <li data-aos="fade-right" data-aos-duration="1200" data-aos-delay="300">
          <Tilt>
            <div className="list_inner" onClick={toggleModalEight}>
              <div className="hover">
                <img className="svg custom" src="img/svg/8.png" alt="" />
                <div className="service_title">
                  <h3>Press / News Releases</h3>
                </div>
                <div className="learn_more">
                  Learn More<span></span>
                </div>
              </div>
            </div>
          </Tilt>
        </li>
        {/* End Service Mobile App Design */}
      </ul>

      {/* Start Modal Motion Graphy */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModalOne}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div className="edina_tm_modalbox">
          <button className="close-modal" onClick={toggleModalOne}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner">
            <div className="description_wrap ">
              <ModalOne />
            </div>
          </div>
          {/* End box inner */}
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End Modal Motion Graphy */}

      {/* Start Modal Branding & Design */}
      <Modal
        isOpen={isOpen2}
        onRequestClose={toggleModalTwo}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div className="edina_tm_modalbox">
          <button className="close-modal" onClick={toggleModalTwo}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner">
            <div className="description_wrap ">
              <ModalTwo />
            </div>
          </div>
          {/* End box inner */}
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End Modal Branding & Design */}

      {/* Start Modal Mobile App Design */}
      <Modal
        isOpen={isOpen3}
        onRequestClose={toggleModalThree}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div className="edina_tm_modalbox">
          <button className="close-modal" onClick={toggleModalThree}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner">
            <div className="description_wrap ">
              <ModalThree />
            </div>
          </div>
          {/* End box inner */}
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End Modal Mobile App Design*/}

      {/* Start Modal Modal Ui/Ux Consultancy */}
      <Modal
        isOpen={isOpen4}
        onRequestClose={toggleModalFour}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div className="edina_tm_modalbox">
          <button className="close-modal" onClick={toggleModalFour}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner">
            <div className="description_wrap">
              <ModalFour />
            </div>
          </div>
          {/* End box inner */}
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End Modal Ui/Ux Consultancy*/}

      {/* Start Modal Modal Ui/Ux Consultancy */}
      <Modal
        isOpen={isOpen5}
        onRequestClose={toggleModalFive}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div className="edina_tm_modalbox">
          <button className="close-modal" onClick={toggleModalFive}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner">
            <div className="description_wrap">
              <ModalFive />
            </div>
          </div>
          {/* End box inner */}
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End Modal Ui/Ux Consultancy*/}

      {/* Start Modal Modal Ui/Ux Consultancy */}
      <Modal
        isOpen={isOpen6}
        onRequestClose={toggleModalSix}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div className="edina_tm_modalbox">
          <button className="close-modal" onClick={toggleModalSix}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner">
            <div className="description_wrap">
              <ModalSix />
            </div>
          </div>
          {/* End box inner */}
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End Modal Ui/Ux Consultancy*/}

      {/* Start Modal Modal Ui/Ux Consultancy */}
      <Modal
        isOpen={isOpen7}
        onRequestClose={toggleModalSeven}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div className="edina_tm_modalbox">
          <button className="close-modal" onClick={toggleModalSeven}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner">
            <div className="description_wrap">
              <ModalSeven />
            </div>
          </div>
          {/* End box inner */}
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End Modal Ui/Ux Consultancy*/}

      {/* Start Modal Modal Ui/Ux Consultancy */}
      <Modal
        isOpen={isOpen8}
        onRequestClose={toggleModalEight}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div className="edina_tm_modalbox">
          <button className="close-modal" onClick={toggleModalEight}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner">
            <div className="description_wrap">
              <ModalEight />
            </div>
          </div>
          {/* End box inner */}
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End Modal Ui/Ux Consultancy*/}
    </div>
  );
};

export default Service;
