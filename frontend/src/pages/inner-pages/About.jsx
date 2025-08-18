import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import OurValues from "../../components/OurValues";

import heroImg1 from "../../assets/About-Treact.png";
import heroImg2 from "../../assets/Our-Vision.png";

export default function About() {

    useEffect(() => {
      AOS.init({
        duration: 1000, // animation duration (1s)
        once: true,     // whether animation should happen only once
      });
    }, []);

  return (
    <>
      {/* ========== Hero Section 1: Image Right ========== */}
      <section className="container py-5" data-aos="fade-left">
        <div className="row align-items-center">
          {/* Text */}
          <div className="hero-content col-lg-6 text-center text-lg-start mb-4 mb-lg-0 pe-lg-5">
            <p className="fw-bold indigo">About Treact</p>
            <h1>
              We are a modern design agency.
            </h1>
            <p className="fw-bold mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3 mt-4 justify-content-center justify-content-lg-start">
              <Link to="/order" className="btn btn-primary btn-lg px-4">
                See Portfolio
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="hero-image col-lg-6 text-center">
            <img
              src={heroImg1}
              alt="Delicious Food"
              className="img-fluid"
            />
          </div>
        </div>
      </section>

      {/* ========== Hero Section 2: Image Left ========== */}
      <section className="container py-5" data-aos="fade-right">
        <div className="row align-items-center flex-column-reverse flex-lg-row">
          {/* Image */}
          <div className="hero-image col-lg-6 text-center mt-4 mt-lg-0">
            <img
              src={heroImg2}
              alt="Delicious Food"
              className="img-fluid"
            />
          </div>

          {/* Text */}
          <div className="hero-content col-lg-6 text-center text-lg-start mb-4 mb-lg-0 ps-lg-5">
            <p className="fw-bold indigo">Our Vision</p>
            <h1>
             We aim to disrupt the design space.
            </h1>
            <p className="fw-bold mt-4">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3 mt-4 justify-content-center justify-content-lg-start">
              <Link to="https://timerse.com/" className="btn btn-primary btn-lg px-4">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
      <OurValues/>
    </>
  );
}

