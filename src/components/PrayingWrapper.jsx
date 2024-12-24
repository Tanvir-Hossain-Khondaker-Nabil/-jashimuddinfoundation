import React from "react";

export default function PrayingWrapper() {
  return (
    <div>
      <div className="ibadat-islamic-praying-main-wrapper">
        <div className="container custom-container">
          <div className="home-sec-title text-center">
            <h4>Islamic Prayer</h4>
            <h2>Learn How to Pray Namazs</h2>
          </div>
          <div className="namaj-wrapper wow fadeInUp" data-wow-delay="500ms">
            <img src="images/home/nawaj.png" alt="img" />
            <a className="redButton" href="learn-pray.html">
              <span>Learn More</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
