import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaStar } from "react-icons/fa";
import MenuImg1 from "../assets/Veg-Mixer.png";
import MenuImg2 from "../assets/Macaroni.png";
import MenuImg3 from "../assets/Nelli.png";
import MenuImg4 from "../assets/Jalapeno-Poppers.png";
import MenuImg5 from "../assets/Cajun-Chicken.png";
import MenuImg6 from "../assets/Chillie-Cake.png";
import MenuImg7 from "../assets/Guacamole-Mex.png";
import MenuImg8 from "../assets/Carnet-Nachos.png";

// Single card component
function MenuCard({ image, title, subtitle, price, rating, reviews }) {

    useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration (1s)
      once: true,     // whether animation should happen only once
    });
  }, []);
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card h-100 shadow-sm border-0">
        {/* Image */}
        <div className="position-relative">
          <img src={image} alt={title} className="card-img-top img-fluid hover-opacity" />
          {/* Rating badge */}
          <span className="badge bg-white text-dark position-absolute bottom-0 start-0 m-2 d-flex align-items-center shadow-sm">
            <FaStar className="text-warning me-1" />
            {rating} <small className="text-muted ms-1">({reviews})</small>
          </span>
        </div>

        {/* Content */}
        <div className="card-body">
          <h5 className="card-title fw-bold">{title}</h5>
          <p className="card-text text-muted fw-bold mb-2">{subtitle}</p>
          <p className="fw-bold fs-6 mb-0">${price}</p>
        </div>
      </div>
    </div>
  );
}

// Bootstrap grid layout
export default function Menu() {
  const menuItems = [
    {
      image: MenuImg1,
      title: "Veg Mixer",
      subtitle: "Tomato Salad & Carrot",
      price: 5.99,
      rating: 5.0,
      reviews: 87,
    },
    {
      image: MenuImg2,
      title: "Macaroni",
      subtitle: "Cheese Pizza",
      price: 2.99,
      rating: 4.8,
      reviews: 32,
    },
    {
      image: MenuImg3,
      title: "Nelli",
      subtitle: "Hamburger & Fries",
      price: 7.99,
      rating: 4.9,
      reviews: 89,
    },
    {
      image: MenuImg4,
      title: "Jalapeno Poppers",
      subtitle: "Crispy Soyabeans",
      price: 8.99,
      rating: 4.6,
      reviews: 12,
    },
        {
      image: MenuImg5,
      title: "Cajun Chicken",
      subtitle: "Roasted Chicken & Egg",
      price: 7.99,
      rating: 4.2,
      reviews: 19,
    },
    {
      image: MenuImg6,
      title: "Chillie Cake",
      subtitle: "Deepfried Chicken",
      price: 2.99,
      rating: 4.8,
      reviews: 32,
    },
    {
      image: MenuImg7,
      title: "Guacamole Mex",
      subtitle: "Mexican Chilli",
      price: 3.99,
      rating: 4.2,
      reviews: 95,
    },
    {
      image: MenuImg8,
      title: "Carnet Nachos",
      subtitle: "Chilli Crispy Nachos",
      price: 3.99,
      rating: 3.9,
      reviews: 26,
    },
  ];

  return (

      <div className="container mt-5" data-aos="fade-left">
        {/* Heading */}
        <h1 className="text-center mb-5">
          Checkout our{" "}
          <span className="bg-primary text-white px-2 d-inline-block skew-bg">
            menu.
          </span>
        </h1>

        {/* Row with Bootstrap columns */}
        <div className="row">
          {menuItems.map((item, index) => (
            <MenuCard key={index} {...item} />
          ))}
        </div>
      </div>

  );
}
