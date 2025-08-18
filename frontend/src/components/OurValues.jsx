import React from "react";
import { FaHeadset, FaShieldAlt, FaUserFriends } from "react-icons/fa";

export default function OurValues() {
  return (
    <section className="our-values-section py-5 text-center">
      <div className="container w-50 m-auto">
        <p className="text-uppercase fw-bold indigo">Our Values</p>
        <h2 className="fw-bold display-5 mb-3">We follow these.</h2>
        <p className="text-muted mb-5 fw-bold w-50 m-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div className="row justify-content-center">
          {/* Value Card 1 */}
          <div className="col-md-4 mb-4">
            <div className="value-card">
              <div className="icon-circle mb-3">
                <FaHeadset className="value-icon" />
              </div>
              <h5 className="fw-bold">24/7 Support</h5>
              <p className="text-muted fw-bold">
                Lorem ipsum donor amet siti ceali placeholder text alipiscing elit sed do eiusmod temport
              </p>
            </div>
          </div>

          {/* Value Card 2 */}
          <div className="col-md-4 mb-4">
            <div className="value-card">
              <div className="icon-circle mb-3">
                <FaShieldAlt className="value-icon" />
              </div>
              <h5 className="fw-bold">Strong Teams</h5>
              <p className="text-muted fw-bold">
                Lorem ipsum donor amet siti ceali placeholder text alipiscing elit sed do eiusmod temport
              </p>
            </div>
          </div>

          {/* Value Card 3 */}
          <div className="col-md-4 mb-4">
            <div className="value-card">
              <div className="icon-circle mb-3">
                <FaUserFriends className="value-icon" />
              </div>
              <h5 className="fw-bold">Customer Satisfaction</h5>
              <p className="text-muted fw-bold">
                Lorem ipsum donor amet siti ceali placeholder text alipiscing elit sed do eiusmod temport
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
