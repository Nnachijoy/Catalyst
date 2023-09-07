import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons"; // Updated import
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Card>
      <Card.Header style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ textDecoration: "none" }}>{title}</span>
        <Button
          variant="link"
          onClick={toggleAccordion}
          aria-controls="accordion-content"
          aria-expanded={isOpen}
          style={{ textDecoration: "none" }}
        >
          {isOpen ? (
            <FontAwesomeIcon icon={faTimes} style={{ fontWeight: "bold", color: "#6B7588" }} /> // Using faTimes icon
          ) : (
            <FontAwesomeIcon icon={faPlus} style={{ color: "#F8CA25" }} />
          )}
        </Button>
      </Card.Header>
      <Card.Body
        id="accordion-content"
        style={{ display: isOpen ? "block" : "none" }}
      >
        {content}
      </Card.Body>
    </Card>
  );
};

export default AccordionItem;
