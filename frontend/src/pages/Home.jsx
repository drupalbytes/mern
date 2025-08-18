import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import MenuDish from "../components/MenuDish";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import AppDownload from "../components/AppDownload";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <MenuDish />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <AppDownload />
      <Footer />
    </>
  );
}
