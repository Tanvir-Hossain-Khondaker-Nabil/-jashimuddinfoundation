import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const sidebarToggle = () => {
    setMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <div className="main-header-wrapper1">
      {/* Sidebar */}
      <div className={`right-sidebar ${isSidebarOpen ? "open" : ""}`} id="right-sidebar">
        <div className="toggle-top-header">
          <button className="sidebar-close" onClick={toggleSidebar} />
        </div>
        <div className="toggle-content">
          <div className="container custom-container">
            <div className="search-box">
              <input
                type="text"
                className="form-control"
                placeholder="Search Here"
              />
              <span>
                <svg
                  width={19}
                  height={19}
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.49833 0.000312674C3.3688 0.000312674 0 3.36934 0 7.49864C0 11.6279 3.36902 14.997 7.49833 14.997C9.2042 14.997 10.7819 14.4241 12.0444 13.4582L17.2855 18.7073C17.676 19.0978 18.3167 19.0978 18.7072 18.7073C19.0976 18.3169 19.0976 17.684 18.7072 17.2936L13.458 12.0444C14.4236 10.782 14.9968 9.20393 14.9968 7.49833C14.9968 3.3688 11.6276 0 7.49846 0L7.49833 0.000312674ZM7.49833 1.99985C10.5472 1.99985 12.9975 4.45002 12.9975 7.49904C12.9975 10.5481 10.5473 12.9982 7.49833 12.9982C4.44931 12.9982 1.99914 10.5481 1.99914 7.49904C1.99914 4.45002 4.44931 1.99985 7.49833 1.99985V1.99985Z"
                    fill="white"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="sb-main-header1 home-sec-header-wrapper">
        {/* Desktop Menu */}
        <div className="menu-items-wrapper menu-item-wrapper3 d-xl-block d-lg-block d-md-none d-sm-none d-none">
          <div className="container custom-container">
            <div className="row">
              <div className="col-lg-2 col-md-12">
                <div className="index1-logo">
                  <a href="index.html">
                    <img src="images/logo.png" alt="logo" style={{ width: "210px", marginTop: "-25px" }} />
                  </a>
                </div>
              </div>
              <div className="col-lg-10 col-md-12 d-flex align-items-center">
                <div className="my-menu-header align-items-center">
                  <nav className="navbar navbar-expand-lg">
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <Link to="/" className="nav-link">
                          Home
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/about" className="nav-link">
                          About Us
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/services" className="nav-link">
                          Service
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/contact" className="nav-link">
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="mobile-menu-wrapper d-xl-none d-lg-none d-md-block d-sm-block">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-sm-4 col-4">
                <div className="mobile-logo">
                  <a href="">
                    <img src="images/logo.png" alt="logo" style={{ width: "150px", marginTop: "-5px" }} />
                  </a>
                </div>
              </div>
              <div className="col-md-8 col-sm-8 col-8">
                <div className="d-flex justify-content-end">
                  <div className="d-flex">
                    <div
                      className="toggle-main-wrapper click-toggle"
                      id="sidebar-toggle"
                      onClick={sidebarToggle}
                    >
                      <span className="line" />
                      <span className="line" />
                      <span className="line" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <div id={`mobile-nav ${isMobileNavOpen ? "open" : ""}`} style={{ display: "none" }}>
          <div className="sidebar_logo">
            <a href="index.html">
              <img src="images/logo.png" alt="logo" style={{ width: "210px", marginTop: "-25px" }} />
            </a>
          </div>
          <div id="cssmenu">
            <ul className="float_left">
              <li className="has-sub">
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/about">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services">
                  Service
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
