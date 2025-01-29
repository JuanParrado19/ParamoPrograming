import "../uiKit.css";

const AccordionButton = () => {
  return (
    <div className="py-2 justify-content-center text-center">
      <h4 className=" bodytext text-white">
        !No te preocupes si no sabes por donde empezar!
      </h4>
      <div className="d-flex  justify-content-center grid gap-5">
        <div>
          <button
            style={{ width: "15vw" }}
            className="custom-button text-white"
            onClick={() => (window.location.href = "/contact")}
          >
            Contáctanos
          </button>
        </div>

        <div>
          <button
            style={{ width: "15vw" }}
            className="custom-button text-white"
            onClick={() => (window.location.href = "/servicios")}
          >
            Servicios
          </button>
        </div>
      </div>
    </div>
  );
};
export default AccordionButton;
