import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const TeamCard = ({ title, subtitle, imgSrc, text, isSelected }) => {
  return (
    <div>
      <div
        className="text-white rounded-lg m-2.5 bg-blue-900 cursor-pointer w-1/4 shadow-lg"
      >
        <img
          alt="Card image cap"
          src={imgSrc}
          className="rounded-t-lg m-1 w-11/12"
        />
        <div className="p-4">
          <h5 className="text-xl font-bold">{title}</h5>
          <h6 className="mb-2 text-lg">{subtitle}</h6>
          {isSelected && (
            <div>
              <p className="text-base">{text}</p>
              <div className="flex justify-start">
                <FontAwesomeIcon
                  icon={faGithub}
                  size="2x"
                  className="mx-1 text-white"
                />
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size="2x"
                  className="mx-1 text-white"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
