import React, { useState } from "react";
import ModalVideo from "react-modal-video";

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

          <h3 className="text">
            I am delivering beautiful digital products for my clients
          </h3>

          <div className="shane_tm_video_button">
            <button className="popup-youtube" onClick={() => setOpen(true)}>
              Watch Video
            </button>
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
