import React from "react";
import { Container } from "reactstrap";
import VideoUs from "../components/VideoUs";
import Team from "../components/Team";

const Us = () => (
  <Container className="d-block p-0" style={{ maxWidth: "100%" }}>
    <VideoUs />
    <Team />
  </Container>
);

export default Us;
