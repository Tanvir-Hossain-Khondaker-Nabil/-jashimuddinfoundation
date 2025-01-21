import React, { useState, useEffect } from "react";
import axios from "axios";

export default function GalleryWrapper() {
  const [categories, setCategories] = useState([]); // Categories state
  const [galleries, setGalleries] = useState([]);  // All galleries state
  const [filteredGalleries, setFilteredGalleries] = useState([]); // Filtered galleries based on category
  const [activeCategory, setActiveCategory] = useState(2); // Default to Sadaqah (ID 2)

  // Fetch gallery categories from the API
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("https://jashimuddinfoundation.com/admin/public/api/gallery_categories");
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  // Fetch all galleries from the API
  useEffect(() => {
    const fetchGalleries = async () => {
      try {
        const response = await axios.get("https://jashimuddinfoundation.com/admin/public/api/galleries");
        setGalleries(response.data);
        filterGalleries(response.data, activeCategory); // Filter galleries based on the active category
      } catch (error) {
        console.error("Error fetching galleries:", error);
      }
    };
    fetchGalleries();
  }, []); // Run only once when component mounts

  // Filter galleries based on selected category
  useEffect(() => {
    filterGalleries(galleries, activeCategory);
  }, [activeCategory, galleries]); // Run when activeCategory or galleries change

  // Function to filter galleries based on category
  const filterGalleries = (allGalleries, categoryId) => {
    const filtered = allGalleries.filter(
      (gallery) => gallery.gallery_category_id === categoryId
    );
    setFilteredGalleries(filtered);
  };

  // Handle tab change when a user clicks on a category
  const handleTabChange = (categoryId) => {
    setActiveCategory(categoryId); // Update active category
  };

  return (
    <div>
      <div className="ibadat-home-sec-gallery-main-wrapper">
        <div className="container custom-container">
          <div className="gallery-tabs-wrapper">
            <div className="home-sec-title">
              <h4>Gallery</h4>
              <h2>Our Photo Gallery</h2>
            </div>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              {categories.map((category) => (
                <li className="nav-item" role="presentation" key={category.id}>
                  <button
                    className={`nav-link ${activeCategory === category.id ? "active" : ""}`}
                    id={`${category.name}-tab`}
                    data-bs-toggle="tab"
                    type="button"
                    role="tab"
                    onClick={() => handleTabChange(category.id)}
                    aria-controls={`${category.name}-tab-pane`}
                    aria-selected={activeCategory === category.id ? "true" : "false"}
                  >
                    {category.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id={`${categories.find((cat) => cat.id === activeCategory)?.name}-tab-pane`}
              role="tabpanel"
              aria-labelledby={`${categories.find((cat) => cat.id === activeCategory)?.name}-tab`}
            >
              <div className="gallery-main-wrapper">
                {filteredGalleries.length > 0 ? (
                  filteredGalleries.map((gallery) => (
                    <div className="portfolio_img_wrapper" key={gallery.id}>
                      <div className="portfolio_img">
                        <img
                          src={`https://jashimuddinfoundation.com/admin/public/storage/${gallery.photo}`}
                          className="img-responsive"
                          alt={`Gallery Image ${gallery.id}`}
                        />
                        <div className="portfolio_img_text">
                          <a
                            href={`https://jashimuddinfoundation.com/admin/public/storage/${gallery.photo}`}
                            className="search img-link"
                            title={`Image ${gallery.id}`}
                          >
                            <span>
                              <svg
                                width={59}
                                height={59}
                                viewBox="0 0 59 59"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M40.3019 37.2102C44.0176 32.7002 45.8553 26.9337 45.4337 21.1058C45.0121 15.2777 42.364 9.83526 38.0379 5.90716C33.7123 1.97893 28.0407 -0.134058 22.199 0.00659738C16.3575 0.147292 10.7938 2.53038 6.6625 6.66249C2.53038 10.7941 0.147388 16.3577 0.00660085 22.199C-0.134094 28.0409 1.97893 33.7125 5.90716 38.0379C9.83539 42.364 15.2778 45.0121 21.1058 45.4337C26.934 45.8553 32.7005 44.0176 37.2102 40.3019L55.9082 58.9999L59 55.9081L40.3019 37.2102ZM22.7817 41.0383C17.9441 41.0188 13.312 39.0799 9.90283 35.6476C6.49318 32.2155 4.58619 27.5705 4.59894 22.7328C4.61177 17.8952 6.54458 13.2609 9.97211 9.84683C13.3996 6.43311 18.0422 4.5194 22.8797 4.52598C27.7173 4.53214 32.3541 6.45874 35.7729 9.88166C39.1912 13.3046 41.1111 17.9445 41.1111 22.7821C41.0916 27.6305 39.1522 32.274 35.7164 35.6954C32.2811 39.1172 27.6299 41.0383 22.7816 41.0383H22.7817Z"
                                  fill="white"
                                />
                                <path
                                  d="M24.8429 13.6538H20.4258V20.4263H13.6533V24.8434H20.4258V31.6893H24.8429V24.8434H31.6888V20.4263H24.8429V13.6538Z"
                                  fill="white"
                                />
                              </svg>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No galleries found for this category.</p>
                )}
              </div>
            </div>
          </div>

          {/* <div className="center-btn">
            <a className="redButton" href="gallery-2.html">
              <span>View All</span>
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
}
