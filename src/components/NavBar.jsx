import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../assets/Logo.png";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, []);

  return (
    <nav className="fixed top-2 xl:top-2 left-1/2 transform -translate-x-1/2 bg-white/50 backdrop-blur-md shadow-lg rounded-full px-3 py-2.5 xl:py-2.5 z-50 w-[60%] xl:w-[60%] flex items-center">
      {/* Logo */}
      <Link to="/" className="flex items-center ml-2 xl:ml-7 mr-2">
        <img src={logo} className="h-6 xl:h-8 w-auto" alt="Logo" />
      </Link>

      {/* Hamburger menu for mobile and tablet */}
      <div className="xl:hidden ml-auto flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-1.5 rounded-md hover:bg-gray-200 transition"
          aria-label="Toggle menu"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Dropdown menu for mobile and tablet */}
        {isOpen && (
          <div className="absolute top-full right-0 mt-2 py-1 bg-white rounded-2xl shadow-xl z-20 w-[100%] xl:w-[100%]">
            <NavLink
              to="/"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-1.5 text-[17px] ${
                  isActive
                    ? "text-paramo-300 font-semibold bg-gray-100 rounded-full"
                    : "text-gray-700 hover:bg-gray-100 hover:rounded-full"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/Nosotros"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-1.5 text-[17px] ${
                  isActive
                    ? "text-paramo-300 font-semibold bg-gray-100 rounded-full"
                    : "text-gray-700 hover:bg-gray-100 hover:rounded-full"
                }`
              }
            >
              Nosotros
            </NavLink>
            <NavLink
              to="/Servicios"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-1.5 text-[17px] ${
                  isActive
                    ? "text-paramo-300 font-semibold bg-gray-100 rounded-full"
                    : "text-gray-700 hover:bg-gray-100 hover:rounded-full"
                }`
              }
            >
              Servicios
            </NavLink>
            <NavLink
              to="/Busqueda"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-1.5 text-[17px] ${
                  isActive
                    ? "text-paramo-100 font-semibold bg-gray-100 rounded-full"
                    : "text-gray-700 hover:bg-gray-100 hover:rounded-full"
                }`
              }
            >
              Busqueda
            </NavLink>
          </div>
        )}
      </div>

      {/* Navigation menu for desktop */}
      <ul className="hidden xl:flex flex-1 justify-between text-sm text-gray-800 mx-9">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-paramo-300 font-semibold"
                : "hover:text-blue-900 transition"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Nosotros"
            className={({ isActive }) =>
              isActive
                ? "text-paramo-300 font-semibold"
                : "hover:text-blue-700 transition"
            }
          >
            Nosotros
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Servicios"
            className={({ isActive }) =>
              isActive
                ? "text-paramo-300 font-semibold"
                : "hover:text-blue-700 transition"
            }
          >
            Servicios
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Busqueda"
            className={({ isActive }) =>
              isActive
                ? "text-paramo-100 font-semibold"
                : "hover:text-blue-700 transition"
            }
          >
            Busqueda
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
