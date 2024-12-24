import React from "react";

export default function GalleryWrapper() {
  return (
    <div>
      <div className="ibadat-home-sec-gallery-main-wrapper">
        <div className="container custom-container">
          <div className="gallery-tabs-wrapper">
            <div className="home-sec-title">
              <h4>Gallery</h4>
              <h2>Our Photo Gallery</h2>
            </div>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#home-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="home-tab-pane"
                  aria-selected="true"
                >
                  All
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#profile-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="profile-tab-pane"
                  aria-selected="false"
                >
                  Eid - Ul Adha
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="contact-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#contact-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="contact-tab-pane"
                  aria-selected="false"
                >
                  Eid - Ul Fitr
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="ramdan-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#ramdan-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="ramdan-tab-pane"
                  aria-selected="false"
                >
                  Ramdan
                </button>
              </li>
            </ul>
          </div>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="home-tab-pane"
              role="tabpanel"
              aria-labelledby="home-tab"
              tabIndex={0}
            >
              <div className="gallery-main-wrapper">
                <div className="portfolio_img_wrapper small-portfolio">
                  <div className="portfolio_img">
                    <img
                      src="images/home/gallery1.png"
                      className="img-responsive"
                      alt="team1_img"
                    />
                    <div className="portfolio_img_text">
                      <a
                        href="images/home/gallery1.png"
                        className="search img-link"
                        title="image1"
                      >
                        <span>
                          <svg
                            width={59}
                            height={59}
                            viewBox="0 0 59 59"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M40.3019 37.2102C44.0176 32.7002 45.8553 26.9337 45.4337 21.1058C45.0121 15.2777 42.364 9.83526 38.0379 5.90716C33.7123 1.97893 28.0407 -0.134058 22.199 0.00659738C16.3575 0.147292 10.7938 2.53038 6.6625 6.66249C2.53038 10.7941 0.147388 16.3577 0.00660085 22.199C-0.134094 28.0409 1.97893 33.7125 5.90716 38.0379C9.83539 42.364 15.2778 45.0121 21.1058 45.4337C26.934 45.8553 32.7005 44.0176 37.2102 40.3019L55.9082 58.9999L59 55.9081L40.3019 37.2102ZM22.7817 41.0383C17.9441 41.0188 13.312 39.0799 9.90283 35.6476C6.49318 32.2155 4.58619 27.5705 4.59894 22.7328C4.61177 17.8952 6.54458 13.2609 9.97211 9.84683C13.3996 6.43311 18.0422 4.5194 22.8797 4.52598C27.7173 4.53214 32.3541 6.45874 35.7729 9.88166C39.1912 13.3046 41.1111 17.9445 41.1111 22.7821C41.0916 27.6305 39.1522 32.274 35.7164 35.6954C32.2811 39.1172 27.6299 41.0383 22.7816 41.0383H22.7817Z"
                              fill="white"
                            />
                            <path
                              d="M24.8429 13.6538H20.4258V20.4263H13.6533V24.8434H20.4258V31.6893H24.8429V24.8434H31.6888V20.4263H24.8429V13.6538Z"
                              fill="white"
                            />
                          </svg>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="portfolio_img_wrapper">
                  <div className="portfolio_img">
                    <img
                      src="images/home/gallery2.png"
                      className="img-responsive"
                      alt="team1_img"
                    />
                    <div className="portfolio_img_text">
                      <a
                        href="images/home/gallery2.png"
                        className="search img-link"
                        title="image1"
                      >
                        <span>
                          <svg
                            width={59}
                            height={59}
                            viewBox="0 0 59 59"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M40.3019 37.2102C44.0176 32.7002 45.8553 26.9337 45.4337 21.1058C45.0121 15.2777 42.364 9.83526 38.0379 5.90716C33.7123 1.97893 28.0407 -0.134058 22.199 0.00659738C16.3575 0.147292 10.7938 2.53038 6.6625 6.66249C2.53038 10.7941 0.147388 16.3577 0.00660085 22.199C-0.134094 28.0409 1.97893 33.7125 5.90716 38.0379C9.83539 42.364 15.2778 45.0121 21.1058 45.4337C26.934 45.8553 32.7005 44.0176 37.2102 40.3019L55.9082 58.9999L59 55.9081L40.3019 37.2102ZM22.7817 41.0383C17.9441 41.0188 13.312 39.0799 9.90283 35.6476C6.49318 32.2155 4.58619 27.5705 4.59894 22.7328C4.61177 17.8952 6.54458 13.2609 9.97211 9.84683C13.3996 6.43311 18.0422 4.5194 22.8797 4.52598C27.7173 4.53214 32.3541 6.45874 35.7729 9.88166C39.1912 13.3046 41.1111 17.9445 41.1111 22.7821C41.0916 27.6305 39.1522 32.274 35.7164 35.6954C32.2811 39.1172 27.6299 41.0383 22.7816 41.0383H22.7817Z"
                              fill="white"
                            />
                            <path
                              d="M24.8429 13.6538H20.4258V20.4263H13.6533V24.8434H20.4258V31.6893H24.8429V24.8434H31.6888V20.4263H24.8429V13.6538Z"
                              fill="white"
                            />
                          </svg>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="gallery-main-wrapper">
                <div className="portfolio_img_wrapper">
                  <div className="portfolio_img">
                    <img
                      src="images/home/gallery3.png"
                      className="img-responsive"
                      alt="team1_img"
                    />
                    <div className="portfolio_img_text">
                      <a
                        href="images/home/gallery1.png"
                        className="search img-link"
                        title="image1"
                      >
                        <span>
                          <svg
                            width={59}
                            height={59}
                            viewBox="0 0 59 59"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M40.3019 37.2102C44.0176 32.7002 45.8553 26.9337 45.4337 21.1058C45.0121 15.2777 42.364 9.83526 38.0379 5.90716C33.7123 1.97893 28.0407 -0.134058 22.199 0.00659738C16.3575 0.147292 10.7938 2.53038 6.6625 6.66249C2.53038 10.7941 0.147388 16.3577 0.00660085 22.199C-0.134094 28.0409 1.97893 33.7125 5.90716 38.0379C9.83539 42.364 15.2778 45.0121 21.1058 45.4337C26.934 45.8553 32.7005 44.0176 37.2102 40.3019L55.9082 58.9999L59 55.9081L40.3019 37.2102ZM22.7817 41.0383C17.9441 41.0188 13.312 39.0799 9.90283 35.6476C6.49318 32.2155 4.58619 27.5705 4.59894 22.7328C4.61177 17.8952 6.54458 13.2609 9.97211 9.84683C13.3996 6.43311 18.0422 4.5194 22.8797 4.52598C27.7173 4.53214 32.3541 6.45874 35.7729 9.88166C39.1912 13.3046 41.1111 17.9445 41.1111 22.7821C41.0916 27.6305 39.1522 32.274 35.7164 35.6954C32.2811 39.1172 27.6299 41.0383 22.7816 41.0383H22.7817Z"
                              fill="white"
                            />
                            <path
                              d="M24.8429 13.6538H20.4258V20.4263H13.6533V24.8434H20.4258V31.6893H24.8429V24.8434H31.6888V20.4263H24.8429V13.6538Z"
                              fill="white"
                            />
                          </svg>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="portfolio_img_wrapper small-portfolio">
                  <div className="portfolio_img">
                    <img
                      src="images/home/gallery4.png"
                      className="img-responsive"
                      alt="team1_img"
                    />
                    <div className="portfolio_img_text">
                      <a
                        href="images/home/gallery2.png"
                        className="search img-link"
                        title="image1"
                      >
                        <span>
                          <svg
                            width={59}
                            height={59}
                            viewBox="0 0 59 59"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M40.3019 37.2102C44.0176 32.7002 45.8553 26.9337 45.4337 21.1058C45.0121 15.2777 42.364 9.83526 38.0379 5.90716C33.7123 1.97893 28.0407 -0.134058 22.199 0.00659738C16.3575 0.147292 10.7938 2.53038 6.6625 6.66249C2.53038 10.7941 0.147388 16.3577 0.00660085 22.199C-0.134094 28.0409 1.97893 33.7125 5.90716 38.0379C9.83539 42.364 15.2778 45.0121 21.1058 45.4337C26.934 45.8553 32.7005 44.0176 37.2102 40.3019L55.9082 58.9999L59 55.9081L40.3019 37.2102ZM22.7817 41.0383C17.9441 41.0188 13.312 39.0799 9.90283 35.6476C6.49318 32.2155 4.58619 27.5705 4.59894 22.7328C4.61177 17.8952 6.54458 13.2609 9.97211 9.84683C13.3996 6.43311 18.0422 4.5194 22.8797 4.52598C27.7173 4.53214 32.3541 6.45874 35.7729 9.88166C39.1912 13.3046 41.1111 17.9445 41.1111 22.7821C41.0916 27.6305 39.1522 32.274 35.7164 35.6954C32.2811 39.1172 27.6299 41.0383 22.7816 41.0383H22.7817Z"
                              fill="white"
                            />
                            <path
                              d="M24.8429 13.6538H20.4258V20.4263H13.6533V24.8434H20.4258V31.6893H24.8429V24.8434H31.6888V20.4263H24.8429V13.6538Z"
                              fill="white"
                            />
                          </svg>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="profile-tab-pane"
              role="tabpanel"
              aria-labelledby="profile-tab"
              tabIndex={0}
            >
              <div className="gallery-main-wrapper">
                <div className="portfolio_img_wrapper small-portfolio">
                  <div className="portfolio_img">
                    <img
                      src="images/home/gallery1.png"
                      className="img-responsive"
                      alt="team1_img"
                    />
                    <div className="portfolio_img_text">
                      <a
                        href="images/home/gallery1.png"
                        className="search img-link"
                        title="image1"
                      >
                        <span>
                          <svg
                            width={59}
                            height={59}
                            viewBox="0 0 59 59"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M40.3019 37.2102C44.0176 32.7002 45.8553 26.9337 45.4337 21.1058C45.0121 15.2777 42.364 9.83526 38.0379 5.90716C33.7123 1.97893 28.0407 -0.134058 22.199 0.00659738C16.3575 0.147292 10.7938 2.53038 6.6625 6.66249C2.53038 10.7941 0.147388 16.3577 0.00660085 22.199C-0.134094 28.0409 1.97893 33.7125 5.90716 38.0379C9.83539 42.364 15.2778 45.0121 21.1058 45.4337C26.934 45.8553 32.7005 44.0176 37.2102 40.3019L55.9082 58.9999L59 55.9081L40.3019 37.2102ZM22.7817 41.0383C17.9441 41.0188 13.312 39.0799 9.90283 35.6476C6.49318 32.2155 4.58619 27.5705 4.59894 22.7328C4.61177 17.8952 6.54458 13.2609 9.97211 9.84683C13.3996 6.43311 18.0422 4.5194 22.8797 4.52598C27.7173 4.53214 32.3541 6.45874 35.7729 9.88166C39.1912 13.3046 41.1111 17.9445 41.1111 22.7821C41.0916 27.6305 39.1522 32.274 35.7164 35.6954C32.2811 39.1172 27.6299 41.0383 22.7816 41.0383H22.7817Z"
                              fill="white"
                            />
                            <path
                              d="M24.8429 13.6538H20.4258V20.4263H13.6533V24.8434H20.4258V31.6893H24.8429V24.8434H31.6888V20.4263H24.8429V13.6538Z"
                              fill="white"
                            />
                          </svg>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="portfolio_img_wrapper">
                  <div className="portfolio_img">
                    <img
                      src="images/home/gallery2.png"
                      className="img-responsive"
                      alt="team1_img"
                    />
                    <div className="portfolio_img_text">
                      <a
                        href="images/home/gallery2.png"
                        className="search img-link"
                        title="image1"
                      >
                        <span>
                          <svg
                            width={59}
                            height={59}
                            viewBox="0 0 59 59"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M40.3019 37.2102C44.0176 32.7002 45.8553 26.9337 45.4337 21.1058C45.0121 15.2777 42.364 9.83526 38.0379 5.90716C33.7123 1.97893 28.0407 -0.134058 22.199 0.00659738C16.3575 0.147292 10.7938 2.53038 6.6625 6.66249C2.53038 10.7941 0.147388 16.3577 0.00660085 22.199C-0.134094 28.0409 1.97893 33.7125 5.90716 38.0379C9.83539 42.364 15.2778 45.0121 21.1058 45.4337C26.934 45.8553 32.7005 44.0176 37.2102 40.3019L55.9082 58.9999L59 55.9081L40.3019 37.2102ZM22.7817 41.0383C17.9441 41.0188 13.312 39.0799 9.90283 35.6476C6.49318 32.2155 4.58619 27.5705 4.59894 22.7328C4.61177 17.8952 6.54458 13.2609 9.97211 9.84683C13.3996 6.43311 18.0422 4.5194 22.8797 4.52598C27.7173 4.53214 32.3541 6.45874 35.7729 9.88166C39.1912 13.3046 41.1111 17.9445 41.1111 22.7821C41.0916 27.6305 39.1522 32.274 35.7164 35.6954C32.2811 39.1172 27.6299 41.0383 22.7816 41.0383H22.7817Z"
                              fill="white"
                            />
                            <path
                              d="M24.8429 13.6538H20.4258V20.4263H13.6533V24.8434H20.4258V31.6893H24.8429V24.8434H31.6888V20.4263H24.8429V13.6538Z"
                              fill="white"
                            />
                          </svg>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="gallery-main-wrapper">
                <div className="portfolio_img_wrapper">
                  <div className="portfolio_img">
                    <img
                      src="images/home/gallery3.png"
                      className="img-responsive"
                      alt="team1_img"
                    />
                    <div className="portfolio_img_text">
                      <a
                        href="images/home/gallery1.png"
                        className="search img-link"
                        title="image1"
                      >
                        <span>
                          <svg
                            width={59}
                            height={59}
                            viewBox="0 0 59 59"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M40.3019 37.2102C44.0176 32.7002 45.8553 26.9337 45.4337 21.1058C45.0121 15.2777 42.364 9.83526 38.0379 5.90716C33.7123 1.97893 28.0407 -0.134058 22.199 0.00659738C16.3575 0.147292 10.7938 2.53038 6.6625 6.66249C2.53038 10.7941 0.147388 16.3577 0.00660085 22.199C-0.134094 28.0409 1.97893 33.7125 5.90716 38.0379C9.83539 42.364 15.2778 45.0121 21.1058 45.4337C26.934 45.8553 32.7005 44.0176 37.2102 40.3019L55.9082 58.9999L59 55.9081L40.3019 37.2102ZM22.7817 41.0383C17.9441 41.0188 13.312 39.0799 9.90283 35.6476C6.49318 32.2155 4.58619 27.5705 4.59894 22.7328C4.61177 17.8952 6.54458 13.2609 9.97211 9.84683C13.3996 6.43311 18.0422 4.5194 22.8797 4.52598C27.7173 4.53214 32.3541 6.45874 35.7729 9.88166C39.1912 13.3046 41.1111 17.9445 41.1111 22.7821C41.0916 27.6305 39.1522 32.274 35.7164 35.6954C32.2811 39.1172 27.6299 41.0383 22.7816 41.0383H22.7817Z"
                              fill="white"
                            />
                            <path
                              d="M24.8429 13.6538H20.4258V20.4263H13.6533V24.8434H20.4258V31.6893H24.8429V24.8434H31.6888V20.4263H24.8429V13.6538Z"
                              fill="white"
                            />
                          </svg>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="portfolio_img_wrapper small-portfolio">
                  <div className="portfolio_img">
                    <img
                      src="images/home/gallery4.png"
                      className="img-responsive"
                      alt="team1_img"
                    />
                    <div className="portfolio_img_text">
                      <a
                        href="images/home/gallery2.png"
                        className="search img-link"
                        title="image1"
                      >
                        <span>
                          <svg
                            width={59}
                            height={59}
                            viewBox="0 0 59 59"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M40.3019 37.2102C44.0176 32.7002 45.8553 26.9337 45.4337 21.1058C45.0121 15.2777 42.364 9.83526 38.0379 5.90716C33.7123 1.97893 28.0407 -0.134058 22.199 0.00659738C16.3575 0.147292 10.7938 2.53038 6.6625 6.66249C2.53038 10.7941 0.147388 16.3577 0.00660085 22.199C-0.134094 28.0409 1.97893 33.7125 5.90716 38.0379C9.83539 42.364 15.2778 45.0121 21.1058 45.4337C26.934 45.8553 32.7005 44.0176 37.2102 40.3019L55.9082 58.9999L59 55.9081L40.3019 37.2102ZM22.7817 41.0383C17.9441 41.0188 13.312 39.0799 9.90283 35.6476C6.49318 32.2155 4.58619 27.5705 4.59894 22.7328C4.61177 17.8952 6.54458 13.2609 9.97211 9.84683C13.3996 6.43311 18.0422 4.5194 22.8797 4.52598C27.7173 4.53214 32.3541 6.45874 35.7729 9.88166C39.1912 13.3046 41.1111 17.9445 41.1111 22.7821C41.0916 27.6305 39.1522 32.274 35.7164 35.6954C32.2811 39.1172 27.6299 41.0383 22.7816 41.0383H22.7817Z"
                              fill="white"
                            />
                            <path
                              d="M24.8429 13.6538H20.4258V20.4263H13.6533V24.8434H20.4258V31.6893H24.8429V24.8434H31.6888V20.4263H24.8429V13.6538Z"
                              fill="white"
                            />
                          </svg>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="contact-tab-pane"
              role="tabpanel"
              aria-labelledby="contact-tab"
              tabIndex={0}
            >
              <div className="gallery-main-wrapper">
                <div className="portfolio_img_wrapper small-portfolio">
                  <div className="portfolio_img">
                    <img
                      src="images/home/gallery1.png"
                      className="img-responsive"
                      alt="team1_img"
                    />
                    <div className="portfolio_img_text">
                      <a
                        href="images/home/gallery1.png"
                        className="search img-link"
                        title="image1"
                      >
                        <span>
                          <svg
                            width={59}
                            height={59}
                            viewBox="0 0 59 59"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M40.3019 37.2102C44.0176 32.7002 45.8553 26.9337 45.4337 21.1058C45.0121 15.2777 42.364 9.83526 38.0379 5.90716C33.7123 1.97893 28.0407 -0.134058 22.199 0.00659738C16.3575 0.147292 10.7938 2.53038 6.6625 6.66249C2.53038 10.7941 0.147388 16.3577 0.00660085 22.199C-0.134094 28.0409 1.97893 33.7125 5.90716 38.0379C9.83539 42.364 15.2778 45.0121 21.1058 45.4337C26.934 45.8553 32.7005 44.0176 37.2102 40.3019L55.9082 58.9999L59 55.9081L40.3019 37.2102ZM22.7817 41.0383C17.9441 41.0188 13.312 39.0799 9.90283 35.6476C6.49318 32.2155 4.58619 27.5705 4.59894 22.7328C4.61177 17.8952 6.54458 13.2609 9.97211 9.84683C13.3996 6.43311 18.0422 4.5194 22.8797 4.52598C27.7173 4.53214 32.3541 6.45874 35.7729 9.88166C39.1912 13.3046 41.1111 17.9445 41.1111 22.7821C41.0916 27.6305 39.1522 32.274 35.7164 35.6954C32.2811 39.1172 27.6299 41.0383 22.7816 41.0383H22.7817Z"
                              fill="white"
                            />
                            <path
                              d="M24.8429 13.6538H20.4258V20.4263H13.6533V24.8434H20.4258V31.6893H24.8429V24.8434H31.6888V20.4263H24.8429V13.6538Z"
                              fill="white"
                            />
                          </svg>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="portfolio_img_wrapper">
                  <div className="portfolio_img">
                    <img
                      src="images/home/gallery2.png"
                      className="img-responsive"
                      alt="team1_img"
                    />
                    <div className="portfolio_img_text">
                      <a
                        href="images/home/gallery2.png"
                        className="search img-link"
                        title="image1"
                      >
                        <span>
                          <svg
                            width={59}
                            height={59}
                            viewBox="0 0 59 59"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M40.3019 37.2102C44.0176 32.7002 45.8553 26.9337 45.4337 21.1058C45.0121 15.2777 42.364 9.83526 38.0379 5.90716C33.7123 1.97893 28.0407 -0.134058 22.199 0.00659738C16.3575 0.147292 10.7938 2.53038 6.6625 6.66249C2.53038 10.7941 0.147388 16.3577 0.00660085 22.199C-0.134094 28.0409 1.97893 33.7125 5.90716 38.0379C9.83539 42.364 15.2778 45.0121 21.1058 45.4337C26.934 45.8553 32.7005 44.0176 37.2102 40.3019L55.9082 58.9999L59 55.9081L40.3019 37.2102ZM22.7817 41.0383C17.9441 41.0188 13.312 39.0799 9.90283 35.6476C6.49318 32.2155 4.58619 27.5705 4.59894 22.7328C4.61177 17.8952 6.54458 13.2609 9.97211 9.84683C13.3996 6.43311 18.0422 4.5194 22.8797 4.52598C27.7173 4.53214 32.3541 6.45874 35.7729 9.88166C39.1912 13.3046 41.1111 17.9445 41.1111 22.7821C41.0916 27.6305 39.1522 32.274 35.7164 35.6954C32.2811 39.1172 27.6299 41.0383 22.7816 41.0383H22.7817Z"
                              fill="white"
                            />
                            <path
                              d="M24.8429 13.6538H20.4258V20.4263H13.6533V24.8434H20.4258V31.6893H24.8429V24.8434H31.6888V20.4263H24.8429V13.6538Z"
                              fill="white"
                            />
                          </svg>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="gallery-main-wrapper">
                <div className="portfolio_img_wrapper">
                  <div className="portfolio_img">
                    <img
                      src="images/home/gallery3.png"
                      className="img-responsive"
                      alt="team1_img"
                    />
                    <div className="portfolio_img_text">
                      <a
                        href="images/home/gallery1.png"
                        className="search img-link"
                        title="image1"
                      >
                        <span>
                          <svg
                            width={59}
                            height={59}
                            viewBox="0 0 59 59"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M40.3019 37.2102C44.0176 32.7002 45.8553 26.9337 45.4337 21.1058C45.0121 15.2777 42.364 9.83526 38.0379 5.90716C33.7123 1.97893 28.0407 -0.134058 22.199 0.00659738C16.3575 0.147292 10.7938 2.53038 6.6625 6.66249C2.53038 10.7941 0.147388 16.3577 0.00660085 22.199C-0.134094 28.0409 1.97893 33.7125 5.90716 38.0379C9.83539 42.364 15.2778 45.0121 21.1058 45.4337C26.934 45.8553 32.7005 44.0176 37.2102 40.3019L55.9082 58.9999L59 55.9081L40.3019 37.2102ZM22.7817 41.0383C17.9441 41.0188 13.312 39.0799 9.90283 35.6476C6.49318 32.2155 4.58619 27.5705 4.59894 22.7328C4.61177 17.8952 6.54458 13.2609 9.97211 9.84683C13.3996 6.43311 18.0422 4.5194 22.8797 4.52598C27.7173 4.53214 32.3541 6.45874 35.7729 9.88166C39.1912 13.3046 41.1111 17.9445 41.1111 22.7821C41.0916 27.6305 39.1522 32.274 35.7164 35.6954C32.2811 39.1172 27.6299 41.0383 22.7816 41.0383H22.7817Z"
                              fill="white"
                            />
                            <path
                              d="M24.8429 13.6538H20.4258V20.4263H13.6533V24.8434H20.4258V31.6893H24.8429V24.8434H31.6888V20.4263H24.8429V13.6538Z"
                              fill="white"
                            />
                          </svg>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="portfolio_img_wrapper small-portfolio">
                  <div className="portfolio_img">
                    <img
                      src="images/home/gallery4.png"
                      className="img-responsive"
                      alt="team1_img"
                    />
                    <div className="portfolio_img_text">
                      <a
                        href="images/home/gallery2.png"
                        className="search img-link"
                        title="image1"
                      >
                        <span>
                          <svg
                            width={59}
                            height={59}
                            viewBox="0 0 59 59"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M40.3019 37.2102C44.0176 32.7002 45.8553 26.9337 45.4337 21.1058C45.0121 15.2777 42.364 9.83526 38.0379 5.90716C33.7123 1.97893 28.0407 -0.134058 22.199 0.00659738C16.3575 0.147292 10.7938 2.53038 6.6625 6.66249C2.53038 10.7941 0.147388 16.3577 0.00660085 22.199C-0.134094 28.0409 1.97893 33.7125 5.90716 38.0379C9.83539 42.364 15.2778 45.0121 21.1058 45.4337C26.934 45.8553 32.7005 44.0176 37.2102 40.3019L55.9082 58.9999L59 55.9081L40.3019 37.2102ZM22.7817 41.0383C17.9441 41.0188 13.312 39.0799 9.90283 35.6476C6.49318 32.2155 4.58619 27.5705 4.59894 22.7328C4.61177 17.8952 6.54458 13.2609 9.97211 9.84683C13.3996 6.43311 18.0422 4.5194 22.8797 4.52598C27.7173 4.53214 32.3541 6.45874 35.7729 9.88166C39.1912 13.3046 41.1111 17.9445 41.1111 22.7821C41.0916 27.6305 39.1522 32.274 35.7164 35.6954C32.2811 39.1172 27.6299 41.0383 22.7816 41.0383H22.7817Z"
                              fill="white"
                            />
                            <path
                              d="M24.8429 13.6538H20.4258V20.4263H13.6533V24.8434H20.4258V31.6893H24.8429V24.8434H31.6888V20.4263H24.8429V13.6538Z"
                              fill="white"
                            />
                          </svg>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="ramdan-tab-pane"
              role="tabpanel"
              aria-labelledby="ramdan-tab"
              tabIndex={0}
            >
              <div className="gallery-main-wrapper">
                <div className="portfolio_img_wrapper small-portfolio">
                  <div className="portfolio_img">
                    <img
                      src="images/home/gallery1.png"
                      className="img-responsive"
                      alt="team1_img"
                    />
                    <div className="portfolio_img_text">
                      <a
                        href="images/home/gallery1.png"
                        className="search img-link"
                        title="image1"
                      >
                        <span>
                          <svg
                            width={59}
                            height={59}
                            viewBox="0 0 59 59"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M40.3019 37.2102C44.0176 32.7002 45.8553 26.9337 45.4337 21.1058C45.0121 15.2777 42.364 9.83526 38.0379 5.90716C33.7123 1.97893 28.0407 -0.134058 22.199 0.00659738C16.3575 0.147292 10.7938 2.53038 6.6625 6.66249C2.53038 10.7941 0.147388 16.3577 0.00660085 22.199C-0.134094 28.0409 1.97893 33.7125 5.90716 38.0379C9.83539 42.364 15.2778 45.0121 21.1058 45.4337C26.934 45.8553 32.7005 44.0176 37.2102 40.3019L55.9082 58.9999L59 55.9081L40.3019 37.2102ZM22.7817 41.0383C17.9441 41.0188 13.312 39.0799 9.90283 35.6476C6.49318 32.2155 4.58619 27.5705 4.59894 22.7328C4.61177 17.8952 6.54458 13.2609 9.97211 9.84683C13.3996 6.43311 18.0422 4.5194 22.8797 4.52598C27.7173 4.53214 32.3541 6.45874 35.7729 9.88166C39.1912 13.3046 41.1111 17.9445 41.1111 22.7821C41.0916 27.6305 39.1522 32.274 35.7164 35.6954C32.2811 39.1172 27.6299 41.0383 22.7816 41.0383H22.7817Z"
                              fill="white"
                            />
                            <path
                              d="M24.8429 13.6538H20.4258V20.4263H13.6533V24.8434H20.4258V31.6893H24.8429V24.8434H31.6888V20.4263H24.8429V13.6538Z"
                              fill="white"
                            />
                          </svg>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="portfolio_img_wrapper">
                  <div className="portfolio_img">
                    <img
                      src="images/home/gallery2.png"
                      className="img-responsive"
                      alt="team1_img"
                    />
                    <div className="portfolio_img_text">
                      <a
                        href="images/home/gallery2.png"
                        className="search img-link"
                        title="image1"
                      >
                        <span>
                          <svg
                            width={59}
                            height={59}
                            viewBox="0 0 59 59"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M40.3019 37.2102C44.0176 32.7002 45.8553 26.9337 45.4337 21.1058C45.0121 15.2777 42.364 9.83526 38.0379 5.90716C33.7123 1.97893 28.0407 -0.134058 22.199 0.00659738C16.3575 0.147292 10.7938 2.53038 6.6625 6.66249C2.53038 10.7941 0.147388 16.3577 0.00660085 22.199C-0.134094 28.0409 1.97893 33.7125 5.90716 38.0379C9.83539 42.364 15.2778 45.0121 21.1058 45.4337C26.934 45.8553 32.7005 44.0176 37.2102 40.3019L55.9082 58.9999L59 55.9081L40.3019 37.2102ZM22.7817 41.0383C17.9441 41.0188 13.312 39.0799 9.90283 35.6476C6.49318 32.2155 4.58619 27.5705 4.59894 22.7328C4.61177 17.8952 6.54458 13.2609 9.97211 9.84683C13.3996 6.43311 18.0422 4.5194 22.8797 4.52598C27.7173 4.53214 32.3541 6.45874 35.7729 9.88166C39.1912 13.3046 41.1111 17.9445 41.1111 22.7821C41.0916 27.6305 39.1522 32.274 35.7164 35.6954C32.2811 39.1172 27.6299 41.0383 22.7816 41.0383H22.7817Z"
                              fill="white"
                            />
                            <path
                              d="M24.8429 13.6538H20.4258V20.4263H13.6533V24.8434H20.4258V31.6893H24.8429V24.8434H31.6888V20.4263H24.8429V13.6538Z"
                              fill="white"
                            />
                          </svg>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="gallery-main-wrapper">
                <div className="portfolio_img_wrapper">
                  <div className="portfolio_img">
                    <img
                      src="images/home/gallery3.png"
                      className="img-responsive"
                      alt="team1_img"
                    />
                    <div className="portfolio_img_text">
                      <a
                        href="images/home/gallery1.png"
                        className="search img-link"
                        title="image1"
                      >
                        <span>
                          <svg
                            width={59}
                            height={59}
                            viewBox="0 0 59 59"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M40.3019 37.2102C44.0176 32.7002 45.8553 26.9337 45.4337 21.1058C45.0121 15.2777 42.364 9.83526 38.0379 5.90716C33.7123 1.97893 28.0407 -0.134058 22.199 0.00659738C16.3575 0.147292 10.7938 2.53038 6.6625 6.66249C2.53038 10.7941 0.147388 16.3577 0.00660085 22.199C-0.134094 28.0409 1.97893 33.7125 5.90716 38.0379C9.83539 42.364 15.2778 45.0121 21.1058 45.4337C26.934 45.8553 32.7005 44.0176 37.2102 40.3019L55.9082 58.9999L59 55.9081L40.3019 37.2102ZM22.7817 41.0383C17.9441 41.0188 13.312 39.0799 9.90283 35.6476C6.49318 32.2155 4.58619 27.5705 4.59894 22.7328C4.61177 17.8952 6.54458 13.2609 9.97211 9.84683C13.3996 6.43311 18.0422 4.5194 22.8797 4.52598C27.7173 4.53214 32.3541 6.45874 35.7729 9.88166C39.1912 13.3046 41.1111 17.9445 41.1111 22.7821C41.0916 27.6305 39.1522 32.274 35.7164 35.6954C32.2811 39.1172 27.6299 41.0383 22.7816 41.0383H22.7817Z"
                              fill="white"
                            />
                            <path
                              d="M24.8429 13.6538H20.4258V20.4263H13.6533V24.8434H20.4258V31.6893H24.8429V24.8434H31.6888V20.4263H24.8429V13.6538Z"
                              fill="white"
                            />
                          </svg>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="portfolio_img_wrapper small-portfolio">
                  <div className="portfolio_img">
                    <img
                      src="images/home/gallery4.png"
                      className="img-responsive"
                      alt="team1_img"
                    />
                    <div className="portfolio_img_text">
                      <a
                        href="images/home/gallery2.png"
                        className="search img-link"
                        title="image1"
                      >
                        <span>
                          <svg
                            width={59}
                            height={59}
                            viewBox="0 0 59 59"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M40.3019 37.2102C44.0176 32.7002 45.8553 26.9337 45.4337 21.1058C45.0121 15.2777 42.364 9.83526 38.0379 5.90716C33.7123 1.97893 28.0407 -0.134058 22.199 0.00659738C16.3575 0.147292 10.7938 2.53038 6.6625 6.66249C2.53038 10.7941 0.147388 16.3577 0.00660085 22.199C-0.134094 28.0409 1.97893 33.7125 5.90716 38.0379C9.83539 42.364 15.2778 45.0121 21.1058 45.4337C26.934 45.8553 32.7005 44.0176 37.2102 40.3019L55.9082 58.9999L59 55.9081L40.3019 37.2102ZM22.7817 41.0383C17.9441 41.0188 13.312 39.0799 9.90283 35.6476C6.49318 32.2155 4.58619 27.5705 4.59894 22.7328C4.61177 17.8952 6.54458 13.2609 9.97211 9.84683C13.3996 6.43311 18.0422 4.5194 22.8797 4.52598C27.7173 4.53214 32.3541 6.45874 35.7729 9.88166C39.1912 13.3046 41.1111 17.9445 41.1111 22.7821C41.0916 27.6305 39.1522 32.274 35.7164 35.6954C32.2811 39.1172 27.6299 41.0383 22.7816 41.0383H22.7817Z"
                              fill="white"
                            />
                            <path
                              d="M24.8429 13.6538H20.4258V20.4263H13.6533V24.8434H20.4258V31.6893H24.8429V24.8434H31.6888V20.4263H24.8429V13.6538Z"
                              fill="white"
                            />
                          </svg>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="center-btn">
            <a className="redButton" href="gallery-2.html">
              <span>View All</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
