import React from 'react';
import CharitySlider from './CharitySlider';

const CharityWrapper = () => {
  return (
    <div className="ibadat-home-sec-charity-wrapper">
      <div className="container custom-container">
        <div className="home-sec-charity-wrapper">
          <CharitySlider/>
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
