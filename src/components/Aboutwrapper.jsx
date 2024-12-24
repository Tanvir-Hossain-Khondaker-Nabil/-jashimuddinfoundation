import React from "react";

export default function Aboutwrapper() {
  return (
    <div>
      <div className="ibadat-home-sec-about-wrapper">
        <div className="container custom-container">
          <div className="home-about-inner-wrapper">
            <div className="home-about-content">
              <h4>About Us</h4>
              <h2>In The Name Of Allah The Beneficent The Merciful</h2>
              <p>
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin. This is Photoshop's version of Lorem Ipsum. Proin
                gravida nibh vel velit auct aliquet. Aenean itudin. This is
                Photoshop's sion of Lorem Ipsum Proin velit auctor aliquet. This
                is Photoshop's to versionf Lorem Ipsum. Proin nibh vel velit
                auctor.
              </p>
              {/* <a className="redButton" href="javascript:;">
                <span>Read More</span>
              </a> */}
              <div className="about-tag-wrapper">
                <img src="images/home2/dua.png" style={{width:"150px"}} alt="img" />
                <div className="tag-text">
                  <h2>Alhaz Jashim Uddin</h2>
                  <h4>Social Worker</h4>
                </div>
              </div>
            </div>
            <div className="home-about-img">
              <img src="images/home2/about.png" alt="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
