import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import heroImg from "../assets/why-choose-us.png";

export default function WhyChooseUs() {

      useEffect(() => {
      AOS.init({
        duration: 1000, // animation duration (1s)
        once: true,     // whether animation should happen only once
      });
    }, []);
    
  return (
    <>
      {/* ========== Hero Section 2: Image Left ========== */}
      <section className="container py-5" data-aos="fade-right">
        <div className="row align-items-center flex-lg-row">

          {/* Text */}
          <div className="hero-content col-lg-6 text-center text-lg-start mb-4 mb-lg-0 ps-lg-5">
            <p className="fw-bold indigo">A Reputed Brand</p>
            <h1>
              Why &nbsp;
              <span className="text-white bg-primary px-2 d-inline-block mt-2 skew-bg">
                 Choose Us ?
              </span>
            </h1>
            <p className="fw-bold mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
<div className="row">
    {/* Orders */}
    <div className="col-md-4">
      <h3 className="fw-bold">94000+</h3>
      <p className="text-primary fw-semibold mb-0">Orders</p>
    </div>

    {/* Customers */}
    <div className="col-md-4">
      <h3 className="fw-bold">11000+</h3>
      <p className="text-primary fw-semibold mb-0">Customers</p>
    </div>

    {/* Chefs */}
    <div className="col-md-4">
      <h3 className="fw-bold">1500+</h3>
      <p className="text-primary fw-semibold mb-0">Chefs</p>
    </div>
  </div>

            <div className="d-flex flex-column flex-sm-row gap-3 mt-4 justify-content-center justify-content-lg-start">
              <Link to="https://timerse.com/" className="btn btn-primary btn-lg px-4">
                Order Now
              </Link>
            </div>
          </div>
          {/* Image */}
          <div className="hero-image col-lg-6 text-center mt-4 mt-lg-0">
            <img
              src={heroImg}
              alt="Delicious Food"
              className="img-fluid rounded-5"
            />
          </div>

        </div>
      </section>
    </>
  );
}
