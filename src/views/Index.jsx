import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Home from "../components/Home.jsx";
import Content from "../components/Content.jsx";

const Index = () => (
  <div className="d-block p-0" style={{ maxWidth: "100%" }}>
    <Home />
    <Content />
  </div>
);

export default Index;
