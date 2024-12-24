import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import { Modal } from 'react-bootstrap';

const CharityWrapper = () => {
  return (
    <div className="ibadat-home-sec-charity-wrapper">
  <div className="container custom-container">
    <div className="home-sec-charity-wrapper">
      <div className="charity-sldier-wrapper">
      <OwlCarousel
              className="owl-carousel owl-theme"
              items={1}
              autoplay
              loop
              margin={10}
              nav
            >
          <div className="item">
            <img src="images/home2/charity-slide.png" alt="img" />
          </div>
          <div className="item">
            <img src="images/home2/charity-slide1.png" alt="img" />
          </div>
          <div className="item">
            <img src="images/home2/charity-slide2.png" alt="img" />
          </div>
          </OwlCarousel>
      </div>
      <div className="charity-content-wrapper">
        <div className="home-sec-title">
          <h4>Charity</h4>
          <h2>Helping Hands For Poors</h2>
        </div>
        <form>
          <div className="form-box">
            <input
              type="text"
              className="form-control"
              placeholder="Your Name"
            />
            <input
              type="email"
              className="form-control"
              placeholder="Your Email"
            />
          </div>
          <div className="form-box">
            <input
              type="number"
              className="form-control"
              placeholder="Your Phone"
            />
            <input
              type="text"
              className="form-control"
              placeholder="Your amount here"
            />
          </div>
          <a
            className="redButton"
            href="javascript:;"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <span>Donate Now</span>
          </a>
        </form>
      </div>
    </div>
  </div>
</div>

  );
};

export default CharityWrapper;
