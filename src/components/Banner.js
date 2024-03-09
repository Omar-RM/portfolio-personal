import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import headderImg from "../assets/img/header-img.svg";

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={6}>
            <span className="tagline">Junior Software Developer</span>
            <h1>
              <span className="wrap">Hi there, My name is Omar Rico</span>
            </h1>
            <h2>
              I am a self-taught Developer with 2 years of experience with a
              passion for programming and a desire to contribute to meaningful
              projects.
            </h2>
            <p className="mt-3">
              Proficient in JavaScript, Java, PHP, REACT, SQL, R and MySQL
            </p>
            {/* <button
              style={{ background: "none", border: "none" }}
              onClick={() => console.log("connect")}
            >
              Let's connect
              <ArrowRightCircle size={25} />
            </button> */}
          </Col>
          <Col xs={12} md={6} xl={6}>
            <div id="photo">
              <div id="photo-box"></div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
