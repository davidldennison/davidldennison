import React from "react";
import ReactTooltip from "react-tooltip";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Portfolio = () => {
  var settings = {
    dots: false,
    arrow: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    draggable: false,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          arrow: false,
          autoplay: false,
          draggable: true,
          speed: 300,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="portfolio_inner my_carousel gallery_zoom">
      <ul data-aos="fade-right" data-aos-duration="1200">
        <Slider {...settings}>
          <li>
            <div className="list_inner">
              <div className="image">
                <a
                  href="https://www.wordstream.com/blog/ws/2016/12/28/best-seo-posts-of-the-year"
                  target="_blank"
                  rel="noreferrer"
                  className="details"
                >
                  <img
                    src="img/portfolio/1.jpg"
                    data-tip
                    data-for="product"
                    alt="portfolio"
                  />
                  <ReactTooltip
                    id="product"
                    place="bottom"
                    type="light"
                    effect="float"
                    className="tooltip-wrapper"
                  >
                    <div>
                      <h5>SEO Marketing</h5>
                      <span>Product</span>
                    </div>
                  </ReactTooltip>
                </a>
              </div>
            </div>
          </li>
          {/* End li */}

          <li>
            <div className="list_inner">
              <div className="image">
                <a
                  href="https://www.investopedia.com/terms/s/social-media-marketing-smm.asp"
                  target="_blank"
                  rel="noreferrer"
                  className="details"
                >
                  <img
                    src="img/portfolio/2.jpg"
                    data-tip
                    data-for="dribbble"
                    alt="portfolio"
                  />
                  <ReactTooltip
                    id="dribbble"
                    place="bottom"
                    type="light"
                    effect="float"
                    className="tooltip-wrapper"
                  >
                    <div>
                      <h5>SMM Marketing</h5>
                      <span>Product</span>
                    </div>
                  </ReactTooltip>
                </a>
              </div>
            </div>
          </li>
          {/* End li */}

          <li>
            <div className="list_inner">
              <div className="image">
                <a
                  href="https://www.wordstream.com/blog/ws/2016/03/08/facebook-marketing-ideas"
                  target="_blank"
                  rel="noreferrer"
                  className="details"
                >
                  <img
                    src="img/portfolio/3.jpg"
                    data-tip
                    data-for="facebook"
                    alt="portfolio"
                  />
                  <ReactTooltip
                    id="facebook"
                    place="bottom"
                    type="light"
                    effect="float"
                    className="tooltip-wrapper"
                  >
                    <div>
                      <h5>Facebook Marketing</h5>
                      <span>Facebbok</span>
                    </div>
                  </ReactTooltip>
                </a>
              </div>
            </div>
          </li>
          {/* End li */}

          <li>
            <div className="list_inner">
              <div className="image">
                <a
                  href="https://youtu.be/0IR-cmCX85M"
                  target="_blank"
                  rel="noreferrer"
                  className="details"
                >
                  <img
                    src="img/portfolio/4.jpg"
                    data-tip
                    data-for="youtube"
                    alt="portfolio"
                  />
                  <ReactTooltip
                    id="youtube"
                    place="bottom"
                    type="light"
                    effect="float"
                    className="tooltip-wrapper"
                  >
                    <div>
                      <h5>Youtube Lead</h5>
                      <span>Youtube</span>
                    </div>
                  </ReactTooltip>
                </a>
              </div>
            </div>
          </li>
          {/* End li */}

          <li>
            <div className="list_inner">
              <div className="image">
                <a
                  href="https://www.adaptworldwide.com/insights/2021/5-tips-for-better-keyword-research"
                  target="_blank"
                  rel="noreferrer"
                  className="details"
                >
                  <img
                    src="img/portfolio/5.jpg"
                    data-tip
                    data-for="web"
                    alt="portfolio"
                  />
                  <ReactTooltip
                    id="web"
                    place="bottom"
                    type="light"
                    effect="float"
                    className="tooltip-wrapper"
                  >
                    <div>
                      <h5>Keyword Research</h5>
                      <span>Keyword</span>
                    </div>
                  </ReactTooltip>
                </a>
              </div>
            </div>
          </li>
          {/* End li */}
        </Slider>
      </ul>
    </div>
  );
};

export default Portfolio;
