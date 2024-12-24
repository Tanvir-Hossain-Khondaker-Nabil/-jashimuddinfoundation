import React, { useState, useEffect } from "react";

export default function PrayerWrapper() {
  const [prayerTimes, setPrayerTimes] = useState([]);

  useEffect(() => {
    const fetchPrayerTimes = async () => {
      const response = await fetch(
        "https://api.aladhan.com/v1/timingsByCity?city=Dhaka&country=Bangladesh&method=2"
      );
      const data = await response.json();
      const times = data.data.timings;
  
      // Helper function to convert 24-hour time to 12-hour format with AM/PM
      const convertTo12Hour = (time) => {
        const [hour, minute] = time.split(":");
        const hourInt = parseInt(hour, 10);
        const period = hourInt >= 12 ? "PM" : "AM";
        const hour12 = hourInt % 12 || 12; // Convert 0 to 12 for midnight
        return `${hour12}:${minute} ${period}`;
      };
  
      setPrayerTimes([
        { name: "Fajr", time: convertTo12Hour(times.Fajr) },
        { name: "Zohar", time: convertTo12Hour(times.Dhuhr) },
        { name: "Asar", time: convertTo12Hour(times.Asr) },
        { name: "Maghrib", time: convertTo12Hour(times.Maghrib) },
        { name: "Isha", time: convertTo12Hour(times.Isha) },
      ]);
    };
  
    fetchPrayerTimes();
  }, []);
  
  

  return (
    <div>
      <div className="ibadat-home-sec-prayer-time-wrapper">
        <div className="container custom-container">
          <div className="home-sec-prayer-inner-wrapper">
            <div className="home-sec-title">
              <h4>Prayer Times</h4>
              <h2>Upcoming Times</h2>
            </div>
            <p>
              Passages gaks of Lofrem the Ipsum available, but the majority have
              suffered alteration in some form. There are many variations of
              passages gaks of Lofrem.
            </p>
            <div className="pray-inner-wrapper">
              {prayerTimes.map((prayer, index) => (
                <div className="pray-box" key={index}>
                  <img src="images/home2/pray1.png" alt="img" />
                  <div className="pray-text">
                    <h4>{prayer.name}</h4>
                    <h5>{prayer.time}</h5>
                  </div>
                </div>
              ))}
            </div>
            <div className="center-btn">
              {/* <a className="redButton" href="learn-pray.html">
                <span>Learn More</span>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
