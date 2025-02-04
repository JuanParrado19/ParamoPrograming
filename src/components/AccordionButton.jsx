import "../uiKit.css";

const AccordionButton = ({ label, isOpen, onClick, children }) => {
  return (
    <div className="flex flex-col px-4 min-w-xl">
      <button
        className={`custom-button ${isOpen ? "open" : ""}`}
        onClick={onClick}
      >
        <span className="bodytext text-white">{label}</span>

        {isOpen && (
          <div
            style={{
              fontSize: "1.2vw",
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
