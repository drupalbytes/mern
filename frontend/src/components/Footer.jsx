
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Footer() {

    useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration (1s)
      once: true,     // whether animation should happen only once
    });
  }, []);

  return (
    <footer className="bg-light text-dark pt-5 pb-3" data-aos="fade-right">
      <div className="container footer-content">
        <div className="row">

          {/* MAIN */}
          <div className="col-6 col-md-2 mb-4">
            <h6 className="fw-bold text-uppercase">Main</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-decoration-none text-dark">Blog</a></li>
              <li><a href="#" className="text-decoration-none text-dark">FAQs</a></li>
              <li><a href="#" className="text-decoration-none text-dark">Support</a></li>
              <li><a href="#" className="text-decoration-none text-dark">About Us</a></li>
            </ul>
          </div>

          {/* PRODUCT */}
          <div className="col-6 col-md-2 mb-4">
            <h6 className="fw-bold text-uppercase">Product</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-decoration-none text-dark">Log In</a></li>
              <li><a href="#" className="text-decoration-none text-dark">Personal</a></li>
              <li><a href="#" className="text-decoration-none text-dark">Business</a></li>
              <li><a href="#" className="text-decoration-none text-dark">Team</a></li>
            </ul>
          </div>

          {/* PRESS */}
          <div className="col-6 col-md-2 mb-4">
            <h6 className="fw-bold text-uppercase">Press</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-decoration-none text-dark">Logos</a></li>
              <li><a href="#" className="text-decoration-none text-dark">Events</a></li>
              <li><a href="#" className="text-decoration-none text-dark">Stories</a></li>
              <li><a href="#" className="text-decoration-none text-dark">Office</a></li>
            </ul>
          </div>

          {/* LEGAL */}
          <div className="col-6 col-md-2 mb-4">
            <h6 className="fw-bold text-uppercase">Legal</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-decoration-none text-dark">GDPR</a></li>
              <li><a href="#" className="text-decoration-none text-dark">Privacy Policy</a></li>
              <li><a href="#" className="text-decoration-none text-dark">Terms of Service</a></li>
              <li><a href="#" className="text-decoration-none text-dark">Disclaimer</a></li>
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-bold text-uppercase">Subscribe to our Newsletter</h6>
            <p className="small text-muted fw-bold">
              We deliver high quality blog posts written by professionals weekly. No spam.
            </p>
            <form className="input-group">
              <input
                type="email"
                className="form-control"
                placeholder="Your Email Address"
              />
              <button className="btn btn-primary" type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        <hr />

        {/* Bottom row */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
          <div className="d-flex align-items-center mb-3 mb-md-0">
            <span className="fw-bold me-2 bg-primary text-white rounded px-2">T</span>
            <span className="fw-bold">Treact Inc.</span>
          </div>
          <div className="text-muted mb-3 mb-md-0">
            © 2025 Treact Inc. All Rights Reserved.
          </div>
          <div>
            <a href="#" className="btn btn-dark btn-sm rounded-circle me-2">
             <i className="fa-brands fa-square-facebook"></i>
            </a>
            <a href="#" className="btn btn-dark btn-sm rounded-circle me-2">
              <i className="fa-brands fa-square-x-twitter"></i>
            </a>
            <a href="#" className="btn btn-dark btn-sm rounded-circle">
             <i className="fa-brands fa-square-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
