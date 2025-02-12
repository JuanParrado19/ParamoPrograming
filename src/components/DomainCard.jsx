import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const DomainCard = ({ name, price }) => {
  return (
    <motion.div
      className="relative group w-full"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-500"></div>

      <div className="relative flex items-center justify-between h-full p-4 bg-[var(--color-paramo-secondary-900)] rounded-lg">
        <div className="flex items-center space-x-4">
          <div className="p-2 bg-gray-800 rounded-lg">
            <FontAwesomeIcon icon={faGlobe} className="w-4 h-4 text-blue-500" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">{name}</h3>
            <p className="text-sm text-gray-400 font-display">
              Precio: ${price.toFixed(2)}
            </p>
          </div>
        </div>
        <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">
          Comprar
        </button>
      </div>
    </motion.div>
  );
};

export default DomainCard;
