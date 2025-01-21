import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import axios from "axios"; // Import axios

export default function TestimonialWrapper() {
  const [testimonials, setTestimonials] = useState([]);

  // Fetch the data from the API
  useEffect(() => {
    axios
      .get("https://jashimuddinfoundation.com/admin/public/api/testimonial") // Replace with your API endpoint
      .then((response) => {
        setTestimonials(response.data); // Set the data to the state
      })
      .catch((error) => {
        console.error("Error fetching testimonials:", error);
      });

    // Initialize OwlCarousel
    $(document).ready(function () {
      $(".owl-carousel").owlCarousel();
    });
  }, []);

  return (
    <div className="ibadat-home-sec-testimonial-wrapper">
      <div className="container custom-container">
        <div className="home-sec-testimonial-wrapper">
          <div className="test-content">
            <div className="home-sec-title">
              <h4>Testimonial</h4>
              <h2>What Our Client Say’s</h2>
            </div>
          </div>
          <div className="test-slider-wrapper">
            <OwlCarousel
              className="owl-carousel owl-theme"
              items={1}
              loop={true}
              autoplay={true}
              autoplayTimeout={5000}
              dots={true}
              nav={false}
            >
              {/* Map through the testimonials and render each one */}
              {testimonials.map((testimonial, index) => (
                <div key={index} className="item">
                  <div className="testi-item">
                    <div className="testi-img">
                      <img
                        src={`https://jashimuddinfoundation.com/admin/public/${testimonial.photo}`}
                        alt="testimonial"
                      />
                    </div>
                    <div className="testi-text">
                      <p>{testimonial.description}</p>
                      <h4><a href="#">{testimonial.name}</a></h4>
                      <p>{testimonial.position}</p>
                      <ul>
                        <li>
                          {
                            testimonial.star > 0 && testimonial.star <= 5 && (
                              [...Array(Math.floor(testimonial.star))].map((_, i) => (
                                <svg
                                  key={i}
                                  width={14}
                                  height={14}
                                  viewBox="0 0 14 14"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M7.67591 0.439498L9.25493 3.78509C9.36474 4.01778 9.57705 4.17901 9.82265 4.21627L13.3536 4.7528C13.9721 4.84685 14.2189 5.64141 13.7715 6.09732L11.2165 8.70149C11.039 8.88257 10.9578 9.14366 10.9998 9.39925L11.6029 13.0765C11.7086 13.7205 11.062 14.2115 10.5089 13.9077L7.35088 12.1717C7.13127 12.051 6.86873 12.051 6.64912 12.1717L3.49108 13.9077C2.93797 14.2118 2.29141 13.7205 2.39712 13.0765L3.00017 9.39925C3.04222 9.14366 2.96104 8.88257 2.78348 8.70149L0.228484 6.09732C-0.218911 5.64111 0.0278572 4.84654 0.646383 4.7528L4.17735 4.21627C4.42295 4.17901 4.63526 4.01778 4.74507 3.78509L6.32409 0.439498C6.60035 -0.146499 7.39936 -0.146499 7.67591 0.439498Z"
                                    fill="#FAB257"
                                  />
                                </svg>
                              ))
                            )
                          }

                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </div>
  );
}
