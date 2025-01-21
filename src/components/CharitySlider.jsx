import React, { useEffect, useState } from 'react';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import axios from 'axios';

export default function CharitySlider() {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    // Fetch slider images from the API
    const fetchSlides = async () => {
      try {
        const response = await axios.get('https://jashimuddinfoundation.com/admin/public/api/charity_slider');
        setSlides(response.data);
      } catch (error) {
        console.error('Error fetching slider data:', error);
      }
    };

    fetchSlides();
  }, []);

  return (
    <div className="charity-sldier-wrapper">
            <OwlCarousel
              className="owl-carousel owl-theme"
              items={1}
              autoplay
              loop
              margin={10}
              nav
            >
              
          {slides.map((slide) => (
            <div className="item" key={slide.id}>
              <img src={`https://jashimuddinfoundation.com/admin/public/${slide.photo}`} alt={`Slide ${slide.id}`} />
            </div>
          ))}
        </OwlCarousel>
      </div>
  );
}
