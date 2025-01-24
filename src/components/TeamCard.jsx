import React from "react";
import {
  Card,
  CardBody,
  CardSubtitle,
  CardTitle,
  CardImg,
  CardText,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const TeamCard = ({ title, subtitle, imgSrc, text, isSelected }) => {
  return (
    <div>
      <Card
        className="text-white"
        style={{
          borderRadius: "15px",
          margin: "10px",
          backgroundColor: "#14266F",
          cursor: "pointer",
          width: "23vw",
          boxShadow:
            " 0px 20px 25px -5px rgba(0, 0, 0, 0.10), 0px 10px 10px 0px rgba(0, 0, 0, 0.04)",
        }}
      >
        <CardImg
          alt="Card image cap"
          src={imgSrc}
          style={{
            borderTopLeftRadius: "8px",
            borderTopRightRadius: "8px",
            margin: "1vw",
            width: "92%",
          }}
        />
        <CardBody>
          <CardTitle tag="h5">{title}</CardTitle>
          <CardSubtitle className="mb-2 bodytext" tag="h6">
            {subtitle}
          </CardSubtitle>
          {isSelected && (
            <div>
              <CardText className="bodytext">{text}</CardText>
              <div style={{ display: "flex", justifyContent: "flex-start" }}>
                <FontAwesomeIcon
                  icon={faGithub}
                  size="2x"
                  style={{ margin: "0 5px", color: "white" }}
                />
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size="2x"
                  style={{ margin: "0 5px", color: "white" }}
                />
              </div>
            </div>
          )}
        </CardBody>
      </Card>
    </div>
  );
};

export default TeamCard;
