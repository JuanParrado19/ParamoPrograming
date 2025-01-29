import "../uiKit.css";

const AccordionButton = ({ label, isOpen, onClick, children }) => {
  return (
    <div className="d-flex flex-column">
      <button
        className={`custom-button ${isOpen ? "open" : ""}`}
        onClick={onClick}
      >
        <span className="bodytext text-white">{label}</span>

        {isOpen && (
          <div
            style={{
              fontSize: "1.4vw",
              lineHeight: "1.2",
              paddingTop: "0.6vw",
            }}
          >
            {children}
          </div>
        )}
      </button>
    </div>
  );
};

export default AccordionButton;
