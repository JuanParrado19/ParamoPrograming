import React from "react";
import AutoScroll from "../components/AutoScroll.jsx";
import ContactUs from "../components/ContactUs.jsx";
import Home from "../components/Home.jsx";
import Content from "../components/Content.jsx";
import PageTransitions from "../components/PageTransitions.jsx";

const Index = () => (
  <PageTransitions>
    <div
      className="block p-0"
      style={{
        maxWidth: "100%",
        background:
          "linear-gradient(180deg, #090D23 0%, #1D255C 17.63%, #2B3788 43.99%, #3948B3 69.5%, #4658DA 100%)",
      }}
    >
      <Home />
      <Content />
      <AutoScroll />
      <ContactUs />
    </div>
  </PageTransitions>
);

export default Index;
