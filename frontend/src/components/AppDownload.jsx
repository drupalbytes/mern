
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import MobileImg from "../assets/mobile.png";

export default function AppDownload() {

  useEffect(() => {
  AOS.init({
    duration: 1000, // animation duration (1s)
    once: true,     // whether animation should happen only once
  });
}, []);

  return (
    <section className="py-5 bg-dark text-white" data-aos="fade-left">
      <div className="container">
        <div className="row align-items-center">
          
          {/* Left Side - Text & Buttons */}
          <div className="col-md-7 text-center text-md-start ps-5">
            <p className="text-warning fw-semibold mb-2">Download App</p>
            <h2 className="fw-bold mb-4 text-white">
              People around you are ordering delicious meals using the &nbsp;
              <span className="text-white bg-primary px-2 d-inline-block mt-2 skew-bg">
                 Treact App
              </span>
            </h2>

            {/* Buttons */}
            <div className="d-flex gap-3 justify-content-center justify-content-md-start">
              <a
                href="#"
                className="btn btn-light d-flex align-items-center rounded-pill px-4 py-2"
              >
                <i class="fa-brands fa-apple pe-2"></i> APP STORE
              </a>
              <a
                href="#"
                className="btn btn-light d-flex align-items-center rounded-pill px-4 py-2"
              >
                <i class="fa-brands fa-google-play pe-2"></i> GOOGLE PLAY
              </a>
            </div>
          </div>

          {/* Right Side - Mobile Mockup */}
          <div className="col-md-5 text-center mt-4 mt-md-0">
            <img
              src={MobileImg}
              alt="App Preview"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
