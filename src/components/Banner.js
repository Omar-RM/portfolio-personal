import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headderImg from "../assets/img/header-img.svg";

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my portfolio</span>
            <h1>
              {"Hi I'am Omar "}
              <span className="wrap">Web developer</span>
            </h1>
            <p>Lorent shdkas hasdjaasj hasjdajdh </p>
            <button
              style={{ background: "none", border: "none" }}
              onClick={() => console.log("connect")}
            >
              Let's connect
              <ArrowRightCircle size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={7}>
            <img src={headderImg} alt="Headder Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
