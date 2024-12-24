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

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
