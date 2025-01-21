import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Aboutwrapper() {
  // State to hold the about data
  const [aboutData, setAboutData] = useState(null);

  // Fetch data when the component mounts
  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const response = await axios.get("https://jashimuddinfoundation.com/admin/public/api/abouts");
        setAboutData(response.data[0]); // Assuming the API returns an array with a single object
      } catch (error) {
        console.error("Error fetching about data:", error);
      }
    };

    fetchAboutData();
  }, []);

  // If about data is not yet loaded, show a loading message
  if (!aboutData) {
    return <div></div>;
  }

  return (
    <div>
      <div className="ibadat-home-sec-about-wrapper">
        <div className="container custom-container">
          <div className="home-about-inner-wrapper">
            <div className="home-about-content">
              <h4>{aboutData.info_title}</h4>
              <h2>{aboutData.title}</h2>
              <p>{aboutData.description}</p>
              {/* Uncomment if you want to show a 'Read More' button */}
              {/* <a className="redButton" href="javascript:;">
                <span>Read More</span>
              </a> */}
              <div className="about-tag-wrapper">
                <img
                  src={`https://jashimuddinfoundation.com/admin/public/${aboutData.founder_photo}`}
                  style={{ width: "186px" }}
                  alt="founder"
                />
                <div className="tag-text">
                  <h2>{aboutData.founder_name}</h2>
                  <h4>{aboutData.founder_position}</h4>
                </div>
              </div>
            </div>
            <div className="home-about-img">
              <img
                src={`https://jashimuddinfoundation.com/admin/public/${aboutData.photo}`}
                alt="About Us"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
