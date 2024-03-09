import { Navbar, Container, Nav } from "react-bootstrap";
import { useState, useEffect } from "react";
import React from "react";

import { FaGithub } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";

import { Center, Icon } from "@chakra-ui/react";
import logo from "../assets/img/logo.svg";
import { color } from "framer-motion";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
    window.addEventListener("scroll", onscroll);
    return () => window.removeEventListener("scroll", onscroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };
  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <span className="logo-text" styles={"color:white"}>
            OR
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              HOME
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              SKILLS
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              PROJECTS
            </Nav.Link>
          </Nav>
          <span className="navbar-text mr-5">
            <div className="social-icon">
              <a
                href="https://github.com/Omar-RM"
                _hover={{ background: "red" }}
              >
                <Icon
                  w={25}
                  h={25}
                  justifyContent={"center"}
                  justifyItems={"center"}
                >
                  <FaGithub size={25} color="white" />
                </Icon>
              </a>
              <a href="https://linkedin.com/in/omar-rico">
                <Icon
                  w={25}
                  h={25}
                  justifyContent={"center"}
                  justifyItems={"center"}
                >
                  <CiLinkedin size={25} color="white"></CiLinkedin>
                </Icon>
              </a>
              <a href="mailto:omarm.rico.98@gmail.com">
                <Icon
                  w={25}
                  h={25}
                  justifyContent={"center"}
                  justifyItems={"center"}
                >
                  <MdOutlineMailOutline size={25} color="white" />
                </Icon>
              </a>
            </div>
          </span>
          <button className="vvd">
            <a href="#connect" className="text-decoration-none text-muted">
              Let's connect
            </a>
          </button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
