import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function ServiceWrapper() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from API using fetch
    console.log("Fetching data from API...");

    fetch("https://jashimuddinfoundation.com/admin/public/api/services")
      .then((response) => {
        console.log("Response status:", response.status); // Debugging: Check the status code
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched data:", data); // Debugging: Log the fetched data
        setServices(data); // Set the fetched data to state
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error("Error fetching data:", error); // Log the error
        setError(error.message); // Handle errors if any
        setLoading(false); // Set loading to false if there's an error
      });
  }, []); // Empty dependency array means this effect runs once after the initial render

  if (loading) {
    return <div></div>; // Display a loading message
  }

  if (error) {
    return <div>Error: {error}</div>; // Display error message if there was an error
  }

  return (
    <div>
      <div className="ibadat-home-sec-srvices-wrapper">
        <div className="container custom-container">
          <div className="home-sec-title">
            <h4>Our Services</h4>
            <h2>Service We Provide</h2>
          </div>
          <div className="ibadat-main-service-inner-wrapper justify-content-start">
            {services.length > 0 ? (
              services.map((service) => (
                <div className="service-box" key={service.id}>
                  <div className="service-img">
                    <img
                      src={`https://jashimuddinfoundation.com/admin/public/${service.photo}`}
                      alt={service.title}
                    />
                  </div>
                  <div className="service-content">
                    <h4>
                      <Link to={`/single-service/${service.id}`}>{service.title}</Link>
                    </h4>
                  </div>
                </div>
              ))
            ) : (
              <div>No services available</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
