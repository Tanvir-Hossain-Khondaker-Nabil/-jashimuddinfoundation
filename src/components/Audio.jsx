import React from "react";
import Audios from "../../public/images/home/audio.mp3";

export default function Audio() {
  return (
    <div>
      <div className="ibadat-audio-home-sec-wrapper">
        <div className="container custom-container">
          <div className="ibadat-audio-wrapper">
            <div className="book-img">
              <img src="images/home/book.png" alt="book" />
            </div>
            <div className="book-text">
              <a className="greenButton" href="javascript:;">
                Now Playing
              </a>
              <h2>Listen To Quran Audio</h2>
              <p>Surah Fath (Abd-ur Rahman)</p>
              <audio controls>
                <source src="https://podcasts.qurancentral.com/aaar-al-hudhoudi/055.mp3" type="audio/mpeg" />
              </audio>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
