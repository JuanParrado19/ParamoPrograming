import "../uiKit.css";

const ContactUs = () => {
  return (
    <div className="flex flex-col py-4 mt-4 justify-center text-center">
      <h4 className="bodytext text-white mb-4">
        ¡No te preocupes si no sabes por donde empezar!
      </h4>
      <div className="flex flex-row justify-center m-4">
        <button
          style={{ width: "15vw" }}
          className="custom-button text-white mr-2 flex items-center justify-center"
          onClick={() => (window.location.href = "/contact")}
        >
          Contáctanos
        </button>
        <button
          style={{ width: "15vw" }}
          className="custom-button text-white flex items-center justify-center"
          onClick={() => (window.location.href = "/servicios")}
        >
          Servicios
        </button>
      </div>
    </div>
  );
};
export default ContactUs;
