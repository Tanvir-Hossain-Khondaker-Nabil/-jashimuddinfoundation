import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function AboutUs() {
    const [aboutData, setAboutData] = useState(null);

    useEffect(() => {
        axios
            .get('https://jashimuddinfoundation.com/admin/public/api/about_us')
            .then((response) => {
                setAboutData(response.data[0]); // Assuming the API returns an array and we want the first item
            })
            .catch((error) => {
                console.error('Error fetching About Us data:', error);
            });
    }, []);

    if (!aboutData) {
        return <div>Loading...</div>; // Loading state
    }

    return (
        <div>
            <div className="ibadat-about-text-main-wrapper">
                <div className="container custom-container">
                    <div className="about-inner-wrapper">
                        <div className="abt-img">
                            <img src={`https://jashimuddinfoundation.com/admin/public/${aboutData.photo}`} alt="About Us" />
                        </div>
                        <div className="about-text-wrappper">
                            <div
                                className="left-title wow fadeInUp"
                                data-wow-delay="100ms"
                                style={{
                                    visibility: "visible",
                                    animationDelay: "100ms",
                                    animationName: "fadeInUp"
                                }}
                            >
                                <h4 id="about-us">
                                    {aboutData.info_title}{" "}
                                    <span>
                                        {/* <img src="images/home/line.png" alt="line" /> */}
                                    </span>{" "}
                                </h4>
                                <h2 id="in-the-name-of-allah-the-beneficent-the-merciful">
                                    {aboutData.title}
                                </h2>
                            </div>
                            <div
                                className="about-mission-wrapper wow fadeInUp"
                                data-wow-delay="200ms"
                                style={{
                                    visibility: "visible",
                                    animationDelay: "200ms",
                                    animationName: "fadeInUp"
                                }}
                            >
                                <div className="about-mission">
                                    <div className="mission-icon-wrapper">
                                        <div className="mission-icon">
                                            <span>
                                                {/* Mission Icon */}
                                                <svg
                                                    width={32}
                                                    height={38}
                                                    viewBox="0 0 32 38"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M3.54559e-05 1.26728V36.7327C3.54559e-05 37.4308 0.552061 38 1.23227 38C1.91247 38 2.4645 37.4308 2.4645 36.7327V21.544H13.5363C13.8627 21.544 14.1758 21.6769 14.4073 21.9154C14.6378 22.1525 14.7685 22.4755 14.7685 22.8113V25.3496C14.7685 26.0491 15.3194 26.6169 16.0007 26.6169H30.7678C31.448 26.6169 32 26.0491 32 25.3496V6.34014C32 5.63945 31.448 5.07285 30.7678 5.07285H18.4652C18.1373 5.07285 17.8243 4.93848 17.5927 4.70143C17.3622 4.46324 17.2329 4.14133 17.2329 3.80556V3.80188C17.2329 2.79312 16.8435 1.82628 16.1498 1.11399C15.4561 0.400567 14.516 0 13.5362 0H1.23223C0.552025 0 3.54559e-05 0.567718 3.54559e-05 1.26728ZM14.7868 13.9402V3.80187C14.7868 3.46609 14.6377 3.14276 14.4072 2.906C14.1756 2.66781 13.8626 2.53458 13.5362 2.53458H2.46438V19.0094H13.5362C14.5159 19.0094 15.456 19.41 16.1497 20.1234C16.8434 20.8357 17.2328 21.8026 17.2328 22.8113V24.0823H29.5354V7.60745H18.4651C18.0473 7.60745 17.6383 7.53391 17.2513 7.39586V13.9402C17.2513 14.6398 16.6993 15.2075 16.0191 15.2075C15.3389 15.2075 14.7868 14.6398 14.7868 13.9402Z"
                                                        fill="white"
                                                    />
                                                </svg>
                                            </span>
                                        </div>
                                        <div className="mission-text">
                                            <h4 id="our-mission">{aboutData.mission_title}</h4>
                                        </div>
                                    </div>
                                    <div className="mission-content">
                                        <p>{aboutData.mission_description}</p>
                                    </div>
                                </div>
                                <div className="about-mission">
                                    <div className="mission-icon-wrapper">
                                        <div className="mission-icon">
                                            <span>
                                                {/* Vision Icon */}
                                                <svg
                                                    width={30}
                                                    height={26}
                                                    viewBox="0 0 42 26"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M21.0012 0.000888475C12.3635 0.00123846 4.39284 4.73538 0.158458 12.3782H0.158803C-0.0528192 12.7596 -0.0528192 13.2257 0.158113 13.6075C4.38852 21.2568 12.3601 25.9964 21.0009 26V25.9996H21.0023C29.64 25.9965 37.6098 21.2596 41.8415 13.6143C42.0528 13.2329 42.0528 12.7668 41.8415 12.3854C37.6097 4.74022 29.6396 0.00447901 21.0023 0H21.0012V0.000888475ZM21.0009 2.50913C28.5167 2.51193 35.459 6.50351 39.3334 13.0008C35.4583 19.4974 28.5167 23.4879 21.0018 23.4915C13.4836 23.4887 6.53924 19.4943 2.66486 12.9936C6.54233 6.49903 13.4851 2.50913 21 2.50913H21.0009ZM20.9999 5.39702C16.8783 5.39702 13.5106 8.81611 13.5106 13.0005C13.5106 17.1845 16.8783 20.6036 20.9999 20.6036C25.121 20.6036 28.4888 17.1845 28.4888 13.0005C28.4888 8.81611 25.121 5.39702 20.9999 5.39702ZM20.9999 7.90526C23.7858 7.90526 26.0179 10.1714 26.0179 13.0001C26.0179 15.8285 23.7858 18.0946 20.9999 18.0946C18.2136 18.0946 15.9815 15.8285 15.9815 13.0001C15.9815 10.1714 18.2136 7.90526 20.9999 7.90526Z"
                                                        fill="white"
                                                    />
                                                </svg>
                                            </span>
                                        </div>
                                        <div className="mission-text">
                                            <h4 id="our-vision">{aboutData.vision_title}</h4>
                                        </div>
                                    </div>
                                    <div className="mission-content">
                                        <p>{aboutData.vision_description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
