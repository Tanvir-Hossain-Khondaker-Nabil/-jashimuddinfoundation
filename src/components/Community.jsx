import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Community() {
  const [communityData, setCommunityData] = useState(null);

  useEffect(() => {
    // Fetch community data from the API
    const fetchCommunityData = async () => {
      try {
        const response = await axios.get("https://jashimuddinfoundation.com/admin/public/api/community");
        setCommunityData(response.data[0]); // Assuming the API returns an array with one object
      } catch (error) {
        console.error("Error fetching community data:", error);
      }
    };

    fetchCommunityData();
  }, []);

  if (!communityData) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className="ibadat-home-sec-community-wrapper">
        <div className="container custom-container">
          <div className="home-sec-title">
            <h4>{communityData.info_title}</h4>
            <h2>{communityData.title}</h2>
            <p>{communityData.description}</p>
          </div>
          <div className="home-sec-community-wrapper">
            <div className="community-box">
              <div className="community-img">
                <img src={`https://jashimuddinfoundation.com/admin/public/${communityData.first_community_photo}`} alt="Community 1" />
              </div>
              <div className="community-text">
                <h4>
                  <a href={communityData.first_community_button_link}>
                    {communityData.first_community_title}
                  </a>
                </h4>
                <p>{communityData.first_community_sub_title}</p>
                <a className="redButton" href={communityData.first_community_button_link}>
                  <span>{communityData.first_community_button_text}</span>
                </a>
              </div>
            </div>
            <div className="community-box">
              <div className="community-img">
                <img src={`https://jashimuddinfoundation.com/admin/public/${communityData.second_community_photo}`} alt="Community 2" />
              </div>
              <div className="community-text">
                <h4>
                  <a href={communityData.second_community_button_link}>
                    {communityData.second_community_title}
                  </a>
                </h4>
                <p>{communityData.second_community_sub_title}</p>
                <a className="redButton" href={communityData.second_community_button_link}>
                  <span>{communityData.second_community_button_text}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
