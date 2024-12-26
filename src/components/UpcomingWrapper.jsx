import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const UpcomingWrapper = () => {
  return (
    <div className="ibadat-home-sec-upcoming-wrapper">
      <div className="container custom-container">
        <div className="home-sec-title">
          <h4>Future Events</h4>
          <h2>Upcoming Events</h2>
        </div>
        <div className="home-sec-up-slider-wrapper">
          <OwlCarousel className="owl-carousel owl-theme" items={1} loop nav>
            
            <div className="item">
              <div className="upcoming-item">
                <div className="upcoming-img">
                  <img src="images/home2/upcoming1.png" alt="img" />
                </div>
                <div className="upcoming-content">
                  <h4>
                    <a href="javascript:;">Eid Al-Fitr</a>
                  </h4>
                  <p>
                    Proin gravida nibh vel velit auctor aliquet. Aenean
                    sollicitudin. This is Photoshop's version of Lorem Ipsum.
                    Proin gravida nibh vel velit auct aliquet. Aenean itudin.
                    This is Photoshop's sion of Lorem Ipsum Proin velit auctor
                    aliquet. This is Photoshop's to versionf Lorem Ipsum. Proin
                    nibh vel velit auctor.
                  </p>
                  <ul>
                    <li>
                      <span>
                        <svg
                          width="14"
                          height="16"
                          viewBox="0 0 14 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M2.6732 1.43297C2.46428 1.58919 2.26434 1.76262 2.07326 1.95277C0.69101 3.25907 -5.91504e-07 4.83328 -5.91504e-07 6.67646C-5.91504e-07 8.51134 0.691145 10.0772 2.07326 11.3751C2.09547 11.4046 2.11754 11.4448 2.14 11.4955C2.19339 11.525 2.24228 11.5672 2.28668 11.6221L6.24647 15.5846C6.75761 16.1385 7.26215 16.1385 7.75982 15.5846L11.86 11.4635C11.8822 11.434 11.9043 11.4045 11.9267 11.3749C13.3089 10.0769 14 8.5111 14 6.67632C14 4.8334 13.3089 3.25919 11.9267 1.95263C11.7355 1.76261 11.5312 1.58904 11.3134 1.43284C10.0911 0.477452 8.64906 0 6.98659 0C5.34202 0.000125669 3.90425 0.477581 2.67294 1.4331L2.6732 1.43297ZM0.926464 6.65728C0.926464 5.07236 1.52204 3.71329 2.71309 2.5806C3.90427 1.44787 5.33768 0.881556 7.01321 0.881556C8.68 0.881556 10.1089 1.44787 11.3001 2.5806C12.4912 3.71332 13.0868 5.07239 13.0868 6.65728C13.0868 8.24256 12.4912 9.60166 11.3001 10.7343C10.1091 11.8669 8.68004 12.4337 7.01321 12.4337C5.33758 12.4337 3.90441 11.867 2.71309 10.7343C1.52204 9.60156 0.926464 8.24262 0.926464 6.65728ZM6.23979 6.46726C6.1153 6.47983 5.93743 6.50936 5.70642 6.55586C4.07545 6.94471 2.98657 7.974 2.43974 9.64376C2.41754 9.7198 2.39085 9.78301 2.35979 9.83379L11.64 9.83391C11.5733 9.71577 11.509 9.56785 11.4468 9.39014C11.1445 8.58706 10.6934 7.9446 10.0932 7.4629C9.49763 6.94713 8.74211 6.63254 7.82647 6.51806C7.78656 6.50549 7.72657 6.48853 7.64675 6.46741C8.08231 6.14179 8.37331 5.79541 8.51986 5.4277C8.6532 5.04741 8.63536 4.66272 8.46661 4.27387C8.31107 3.98632 8.0978 3.75996 7.82648 3.59533C7.55108 3.42617 7.27306 3.36685 6.99328 3.418C7.42884 3.75997 7.70226 4.07077 7.81325 4.3499C7.92875 4.62464 7.89333 4.92703 7.70661 5.25668C7.52002 5.59903 7.26868 5.81443 6.95322 5.90317C6.63329 5.96262 6.15531 5.92856 5.51981 5.80175L6.23979 6.46726ZM6.37999 3.68375L6.13314 4.36229H5.36642L5.98646 4.81233L5.75982 5.52239L6.37972 5.10401L6.99302 5.52239L6.77313 4.81233L7.39303 4.36229H6.6329L6.37999 3.68375Z"
                            fill="#009146"
                          />
                        </svg>
                      </span>
                      AI Madina Mosque City New York
                    </li>
                    <li>
                      <span>
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.5 0C3.3641 0 0 3.3641 0 7.5C0 11.6359 3.3641 15 7.5 15C11.6359 15 15 11.6359 15 7.5C15 3.3641 11.6359 0 7.5 0ZM7.5 1.04657C11.0703 1.04657 13.9535 3.92965 13.9535 7.50006C13.9535 11.0703 11.0704 13.9536 7.5 13.9536C3.92959 13.9536 1.04651 11.0705 1.04651 7.50006C1.04651 3.92965 3.92959 1.04657 7.5 1.04657ZM7.5 3.4641C6.75609 3.4641 6.1327 3.97625 6.1327 4.74534C6.1327 5.51443 6.75609 6.02657 7.5 6.02657C8.24391 6.02657 8.8673 5.51443 8.8673 4.74534C8.8673 3.97625 8.24391 3.4641 7.5 3.4641ZM7.5 7.14842C7.03965 7.14842 6.6327 7.5553 6.6327 8.01565V9.75536H8.3673V8.01565C8.3673 7.5553 7.96035 7.14842 7.5 7.14842Z"
                            fill="#009146"
                          />
                        </svg>
                      </span>
                      10:00 AM to 12:30 PM
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Add more events here as needed */}
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
};

export default UpcomingWrapper;
