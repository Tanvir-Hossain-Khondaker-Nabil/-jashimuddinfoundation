import React, { useEffect, useState } from "react";
import axios from "axios";

export default function PrayingWrapper() {
  const [namazData, setNamazData] = useState(null);

  useEffect(() => {
    // Fetch Namaz data from the API
    const fetchNamazData = async () => {
      try {
        const response = await axios.get("https://jashimuddinfoundation.com/admin/public/api/namaz");
        setNamazData(response.data[0]); // Assuming the API returns an array with one object
      } catch (error) {
        console.error("Error fetching Namaz data:", error);
      }
    };

    fetchNamazData();
  }, []);

  if (!namazData) {
    return <p>Loading...</p>; // Loading state
  }

  return (
    <div>
      <div className="ibadat-islamic-praying-main-wrapper">
        <div className="container custom-container">
          <div className="home-sec-title text-center">
            <h4>{namazData.info_title}</h4>
            <h2>{namazData.title}</h2>
          </div>
          <div className="namaj-wrapper wow">
            <img src={`https://jashimuddinfoundation.com/admin/public/${namazData.photo}`} alt="Namaz" />
            <a className="redButton" href={namazData.button_link} target="_blank" rel="noopener noreferrer">
              <span>{namazData.button_text}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
