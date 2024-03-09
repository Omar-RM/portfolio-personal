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
          <Col sm={6}>
            <img src={logo} alt="logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="">
                <FaGithub />
              </a>
              <a href="">
                <Icon>
                  <CiLinkedin />
                </Icon>
              </a>
              <a href="">
                <FaGithub />
              </a>
            </div>
            <p>CopyRight 2022. All Right Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
