import React from "react";
import { Container, Card, CardText, CardTitle } from "reactstrap";

const VideoUs = () => (
  <section
    id="hero"
    className="d-flex align-items-center"
    style={{ position: "relative", overflow: "hidden" }}
  >
    <video
      className="w-100"
      autoPlay
      muted
      loop
      id="myVideo"
      style={{ zIndex: "-1" }}
    >
      <source src="src/assets/video/bgUs.mp4" type="video/mp4" />
    </video>
    <Container
      className="position-absolute justify-content-start pt-2"
      style={{ zIndex: "0" }}
    >
      <div className="d-flex justify-content-start">
        <Container style={{ maxWidth: "90%" }}>
          <h2>Llevando tu Empresa al Páramo de la Innovación</h2>
          <Card
            body
            style={{
              borderRadius: "1.5vw",
              background: "linear-gradient(90deg, #A9A9A9 0%, #4F779C 100%)",
              borderColor: "#A9A9A9",
            }}
          >
            <CardText>
              <p className="bodytext text-white">
                Somos una agencia digital especializada en desarrollo web y
                backend. Impulsados por la curiosidad y la innovación,
                maximizamos el alcance de tu emprendimiento o negocio con
                soluciones digitales que florecen en la serenidad del páramo.
              </p>
            </CardText>
          </Card>
        </Container>
        <Container style={{ width: "50%" }}></Container>
      </div>
    </Container>
    <img
      src="./src/assets/imgUS.png"
      className="img-fluid"
      alt=""
      style={{
        position: "absolute",
        bottom: "0",
        right: "0",
        zIndex: "1",
        width: "50%",
      }}
    />
  </section>
);

export default VideoUs;
