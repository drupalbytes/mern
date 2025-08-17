
import React from "react";
import TestImg1 from "../assets/test-1.png";
import TestImg2 from "../assets/test-2.png";
import TestImg3 from "../assets/test-3.png";

export default function Testimonials() {
  return (
    <section className="py-5 text-center testimonial">
      <div className="container ">
        {/* Heading */}

        <h1>Customers <span class="text-white bg-primary px-2 d-inline-block mt-2 skew-bg">Love Us..</span></h1>

        {/* Services Row */}
        <div className="row g-4 mt-5 mt-5 w-75 m-auto">
          {/* Service 1 */}
          <div className="col-md-4">
            
            <img
              src={TestImg1}
              alt="store"
              className="img-fluid mb-4"
            />
              
              <blockquote>
                "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia."
              </blockquote>
              <span className="fw-semibold ">
                - Charlotte Hale
              </span>
           
          </div>

          {/* Service 2 */}
          <div className="col-md-4">
           
            <img
              src={TestImg2}
              alt="chefs"
              className="img-fluid mb-4"
            />
             
              <blockquote>
               "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia."
              </blockquote>
              <span className="fw-semibold ">
                - Charlotte Hale
              </span>
            
          </div>

          {/* Service 3 */}
          <div className="col-md-4">
           
            <img
              src={TestImg3}
              alt="Celebration"
              className="img-fluid mb-4"
            />
              
              <blockquote>
                "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia."
              </blockquote>
              <span className="fw-semibold ">
                - Charlotte Hale
              </span>
           
          </div>
        </div>
      </div>
    </section>
  );
}
