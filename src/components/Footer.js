import { Col, Container, Row } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { Icon } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container className="align-item-center p-5">
        <Row>
          <Col>
            <h4> Website Created By Omar Rico &copy; 2024</h4>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
