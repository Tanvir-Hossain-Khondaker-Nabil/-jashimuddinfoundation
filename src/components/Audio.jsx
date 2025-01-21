import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Audio() {
  const [audioData, setAudioData] = useState(null);

  useEffect(() => {
    // Fetch audio data from the API
    axios
      .get("https://jashimuddinfoundation.com/admin/public/api/tilawat")
      .then((response) => {
        setAudioData(response.data[0]); // Assuming you only want the first item
      })
      .catch((error) => {
        console.error("There was an error fetching the audio data!", error);
      });
  }, []);

  if (!audioData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="ibadat-audio-home-sec-wrapper">
        <div className="container custom-container">
          <div className="ibadat-audio-wrapper">
            <div className="book-img">
              <img
                src={`https://jashimuddinfoundation.com/admin/public/${audioData.photo}`}
                alt={audioData.title}
              />
            </div>
            <div className="book-text">
              <a className="greenButton" href="javascript:;">
                Now Playing
              </a>
              <h2 className="mt-4">{audioData.title}</h2>
              <p>{audioData.name}</p>
              <div className="audio-player">
                <audio controls>
                  <source
                    src={`https://jashimuddinfoundation.com/admin/public/${audioData.audio}`}
                    type="audio/mpeg"
                  />
                </audio>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
      .audio-player audio {
        width: 100%;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      }
      .audio-player {
        margin-top:30px;
      }`}</style>
    </div>
  );
}
