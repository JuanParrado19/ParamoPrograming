import React from "react";
import PageTransitions from "../components/PageTransitions";
import Hero from "../components/Hero";
import ServiceCarousel from "../components/ServiceCarousel";

const Services = () => (
  <PageTransitions>
    <Hero />
    <div id="content">
      {" "}
      <ServiceCarousel />
    </div>
  </PageTransitions>
);

export default Services;
