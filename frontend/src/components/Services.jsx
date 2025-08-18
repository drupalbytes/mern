
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import SerImg1 from "../assets/store.png";
import SerImg2 from "../assets/cooking.png";
import SerImg3 from "../assets/confetti.png";

export default function Services() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration (1s)
      once: true,     // whether animation should happen only once
    });
  }, []);

  return (
    <section className="py-5 text-center amazing-services" data-aos="fade-left">
      <div className="container">
        {/* Heading */}

        <h1>Amazing <span class="text-white bg-primary px-2 d-inline-block mt-2 skew-bg">Services.</span></h1>

        {/* Services Row */}
        <div className="row g-4 mt-5 mt-5 w-75 m-auto">
          {/* Service 1 */}
          <div className="col-md-4">
            <div className="p-4 h-100">
            <img
              src={SerImg1}
              alt="store"
              className="img-fluid mb-4"
            />
              <h4 className="fw-bold">230+ Locations</h4>
              <p>
                Lorem ipsum donor amet siti ceali placeholder text
              </p>
              <a href="#" className="text-primary fw-semibold text-decoration-none">
                Learn More →
              </a>
            </div>
          </div>

          {/* Service 2 */}
          <div className="col-md-4">
            <div className="p-4 h-100">
            <img
              src={SerImg2}
              alt="chefs"
              className="img-fluid mb-4"
            />
              <h4 className="fw-bold">Professional Chefs</h4>
              <p>
                Lorem ipsum donor amet siti ceali placeholder text
              </p>
              <a href="#" className="text-primary fw-semibold text-decoration-none">
                Learn More →
              </a>
            </div>
          </div>

          {/* Service 3 */}
          <div className="col-md-4">
            <div className="p-4 h-100">
            <img
              src={SerImg3}
              alt="Celebration"
              className="img-fluid mb-4"
            />
              <h4 className="fw-bold">Birthday Catering</h4>
              <p>
                Lorem ipsum donor amet siti ceali placeholder text
              </p>
              <a href="#" className="text-primary fw-semibold text-decoration-none">
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
