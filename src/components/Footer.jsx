import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left max-w-xs">
            <p className="text-sm text-gray-400">
              Deja tus ideas volar,
              <br />
              nosotros nos encargamos del resto.
            </p>
          </div>

          <div className="flex justify-center flex-1">
            <img
              src="src/assets/Logo_descriptivo.png"
              alt="Logo Paramo"
              className="h-12 w-auto"
            />
          </div>

          <div className="text-center md:text-right">
            <div className="flex flex-col space-y-2">
              <a
                href="https://www.instagram.com/paramoprograming/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-end *: hover:text-gray-400 transition-colors"
              >
                <FontAwesomeIcon icon={faInstagram} className="w-5" />
                @paramoprograming
              </a>

              <div className="flex flex-col space-y-1">
                <a
                  href="mailto:info@paramoprograming.com.co"
                  className="flex items-center justify-center md:justify-end text-sm hover:text-gray-400 transition-colors"
                >
                  <FontAwesomeIcon icon={faEnvelope} className="mr-2 w-4" />
                  info@paramoprograming.com.co
                </a>
                <a
                  href="tel:+573217998691"
                  className="flex items-center justify-center md:justify-end text-sm hover:text-gray-400 transition-colors"
                >
                  <FontAwesomeIcon icon={faPhone} className="mr-2 w-4" />
                  +57 321 799 8691
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Páramo Programming. Todos los
            derechos reservados.
          </p>
          <div className="mt-2">
            <a href="#" className="hover:text-white transition-colors">
              Política de Privacidad
            </a>
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-white transition-colors">
              Términos y Condiciones
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
