import { Container } from "reactstrap";
import "../uiKit.css";

const AutoScroll = () => {
  return (
    <div style={{ zIndex: "-1" }}>
      <Container className="py-5 d-flex justify-content-center text-center">
        <h5 className="text-white">
          Nuestras soluciones están desarrolladas utilizando las mejores
          frameworks y tecnologías del mercado
        </h5>
      </Container>
      <Container style={{ zIndex: "-1" }}>
        <div className="slider ">
          <div className="track-slider-auto">
            <div className="slide-image">
              <img src="./src/assets/CSS.png" className="img-fluid" alt="CSS" />
            </div>
            <div className="slide-image">
              <img
                src="./src/assets/React.png"
                className="img-fluid"
                alt="React"
              />
            </div>
            <div className="slide-image">
              <img
                src="./src/assets/HTML.png"
                className="img-fluid"
                alt="HTML"
              />
            </div>
            <div className="slide-image">
              <img src="./src/assets/JS.png" className="img-fluid" alt="JS" />
            </div>
            <div className="slide-image">
              <img
                src="./src/assets/Boostrap.png"
                className="img-fluid"
                alt="Boostrap"
              />
            </div>
            <div className="slide-image">
              <img src="./src/assets/CSS.png" className="img-fluid" alt="CSS" />
            </div>
            <div className="slide-image">
              <img
                src="./src/assets/React.png"
                className="img-fluid"
                alt="React"
              />
            </div>
            <div className="slide-image">
              <img
                src="./src/assets/HTML.png"
                className="img-fluid"
                alt="HTML"
              />
            </div>
            <div className="slide-image">
              <img src="./src/assets/JS.png" className="img-fluid" alt="JS" />
            </div>
            <div className="slide-image">
              <img
                src="./src/assets/Boostrap.png"
                className="img-fluid"
                alt="Boostrap"
              />
            </div>
            <div className="slide-image">
              <img src="./src/assets/CSS.png" className="img-fluid" alt="CSS" />
            </div>
            <div className="slide-image">
              <img
                src="./src/assets/React.png"
                className="img-fluid"
                alt="React"
              />
            </div>
            <div className="slide-image">
              <img
                src="./src/assets/HTML.png"
                className="img-fluid"
                alt="HTML"
              />
            </div>
            <div className="slide-image">
              <img src="./src/assets/JS.png" className="img-fluid" alt="JS" />
            </div>
            <div className="slide-image">
              <img
                src="./src/assets/Boostrap.png"
                className="img-fluid"
                alt="Boostrap"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AutoScroll;
