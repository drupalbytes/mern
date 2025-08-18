import React from "react";
import Hero from "../components/Hero";
import MenuDish from "../components/MenuDish";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import AppDownload from "../components/AppDownload";

export default function Home() {
  return (
    <>      
      <Hero />
      <MenuDish />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <AppDownload />      
    </>
  );
}
