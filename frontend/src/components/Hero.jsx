import React from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import heroImg1 from "../assets/delicious-food.png";
import heroImg2 from "../assets/latest-offer.png";


export default function Hero() {

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
            <h1>
              Delicious & Affordable <br />
              <span className="text-white bg-primary px-2 d-inline-block mt-2 skew-bg">
                Meals Near You.
              </span>
            </h1>
            <p className="fw-bold mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3 mt-4 justify-content-center justify-content-lg-start">
              <Link to="/order" className="btn btn-primary btn-lg px-4">
                Order Now
              </Link>
              <Link to="/chefs" className="btn btn-lg d-flex align-items-center gap-2 px-4">
                <i className="fas fa-play-circle"></i> Meet The Chefs
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="hero-image col-lg-6 text-center">
            <img
              src={heroImg1}
              alt="Delicious Food"
              className="img-fluid rounded-5"
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
              className="img-fluid rounded-5"
            />
          </div>

          {/* Text */}
          <div className="hero-content col-lg-6 text-center text-lg-start mb-4 mb-lg-0 ps-lg-5">
            <p className="fw-bold indigo">Established Since 2014</p>
            <h1>
              We've been serving <br /> for &nbsp;
              <span className="text-white bg-primary px-2 d-inline-block mt-2 skew-bg">
                 over 5 years.
              </span>
            </h1>
            <p className="fw-bold mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br/> eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="fw-bold mt-4">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris<br/> nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3 mt-4 justify-content-center justify-content-lg-start">
              <Link to="https://timerse.com/" className="btn btn-primary btn-lg px-4">
                Latest Offers
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
