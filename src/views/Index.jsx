import React from "react";
import Home from "../components/Home.jsx";
import Content from "../components/Content.jsx";
import PageTransitions from "../components/PageTransitions.jsx";

const Index = () => (
  <PageTransitions>
    <div className="d-block p-0" style={{ maxWidth: "100%" }}>
      <Home />
      <Content />
    </div>
  </PageTransitions>
);

export default Index;
