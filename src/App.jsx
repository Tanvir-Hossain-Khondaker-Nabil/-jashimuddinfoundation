import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import "../public/css/fonts.css";
import "../public/css/font-awesome.css";
import "../public/css/font-awesome.min.css";
import "../public/css/magnific-popup.css";
import "../public/css/owl.carousel.min.css";
import "../public/css/owl.theme.default.min.css";
import "../public/css/bootstrap.min.css";
import "../public/css/animate.css";
import "../public/css/style.css";
import "../public/css/responsive.css";

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";
import Service from "./pages/Service";
import SingleService from "./pages/SingleService";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/services" element={<Service/>} />
          <Route path="/single-service/:id" element={<SingleService/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
