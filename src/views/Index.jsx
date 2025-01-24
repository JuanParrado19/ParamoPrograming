import React from "react";
import { Container } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Home from "../components/Home.jsx";
import Content from "../components/Content.jsx";

const Index = () => (
  <Container className="d-block p-0" style={{ maxWidth: "100%" }}>
    <Home />
    <Content />
  </Container>
);

export default Index;
