import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import Reveal from "react-reveal/Reveal";

const Video = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="shane_tm_section">
      <div className="shane_tm_business_video">
        <div className="bg">
          <div
            className="image jarallax"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/video/1.jpg"
              })`,
            }}
          ></div>
          <div className="overlay"></div>
        </div>
        {/* End .bg */}

        <div className="content">
          <ModalVideo
            channel="youtube"
            autoplay
            isOpen={isOpen}
            videoId="ZOoVOfieAF8"
            onClose={() => setOpen(false)}
          />

          <span className="rounded" onClick={() => setOpen(true)}></span>
          <Reveal effect="fadeInUp">
            <h3 className="text">
              I am delivering beautiful digital products for my clients
            </h3>
          </Reveal>
          <div className="shane_tm_video_button">
            <Reveal effect="fadeInUp">
              <button className="popup-youtube" onClick={() => setOpen(true)}>
                Watch Video
              </button>
            </Reveal>
          </div>
        </div>
        {/* End .content */}
      </div>
      {/* End .shane_tm_business_video */}
    </div>
    // End .shane_tm_section
  );
};

export default Video;
