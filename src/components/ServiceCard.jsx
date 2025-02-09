import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ServiceCard({
  icon,
  title,
  description,
  details,
  isNew = false,
  supporters = [],
}) {
  return (
    <motion.div
      className="relative group"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-500"></div>

      <div className="relative flex flex-col h-full p-6 bg-[var(--color-paramo-secondary-900)] rounded-lg">
        <div className="flex items-start justify-between mb-4">
          <div className="p-2 bg-gray-800 rounded-lg">
            <FontAwesomeIcon icon={icon} className="w-6 h-6 text-blue-500" />
          </div>
          {isNew && (
            <span className="px-2 py-1 text-xs font-medium text-pink-500 bg-pink-500/10 rounded-full">
              NUEVO
            </span>
          )}
        </div>

        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 mb-4 flex-grow font-display">
          {description}
        </p>

        <div className="flex flex-wrap gap-4 mb-4 font-display">
          {details.map((detail, index) => (
            <div
              key={index}
              className="flex items-center text-sm text-gray-500"
            >
              {detail.icon && (
                <FontAwesomeIcon icon={detail.icon} className="w-4 h-4 mr-2" />
              )}
              {detail.text}
            </div>
          ))}
        </div>

        {supporters.length > 0 && (
          <div className="mt-4">
            <div className="flex gap-2">
              {supporters.map((supporter, index) => (
                <img
                  key={index}
                  src={supporter}
                  alt={`Supporter ${index + 1}`}
                  className="w-8 h-8 rounded-full object-cover"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
