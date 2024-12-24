import React from "react";

export default function Community() {
  return (
    <div>
      <div className="ibadat-home-sec-community-wrapper">
        <div className="container custom-container">
          <div className="home-sec-title">
            <h4>Stay Connected</h4>
            <h2>Stay With Us And Join Our Community</h2>
            <p>
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
          <div className="home-sec-community-wrapper">
            <div className="community-box">
              <div className="community-img">
                <img src="images/home2/comunity1.png" alt="img" />
              </div>
              <div className="community-text">
                <h4>
                  <a href="javascript;;">Join Our You Tube Channel</a>
                </h4>
                <p>It has survived not only five centuries, but also.</p>
                <a className="redButton" href="javascript:;">
                  <span>Learn More</span>
                </a>
              </div>
            </div>
            <div className="community-box">
              <div className="community-img">
                <img src="images/home2/comunity2.png" alt="img" />
              </div>
              <div className="community-text">
                <h4>
                  <a href="javascript:;">Join Our Community</a>
                </h4>
                <p>It has survived not only five centuries, but also.</p>
                <a className="redButton" href="javascript:;">
                  <span>Learn More</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
