import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";
import { Col, Container, Row } from "react-bootstrap";

import { BsBootstrap } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { BsFiletypeSql } from "react-icons/bs";
import { RiFileExcel2Line } from "react-icons/ri";
import { SiTableau } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { TbBrandVscode } from "react-icons/tb";

import { Icon } from "@chakra-ui/react";

export const Skills = () => {
  const responsive = {
    superlargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const iconSize = 50;
  return (
    <section className="skills" id="skills">
      <Container>
        <div className="skill-bx">
          <Row>
            <h1>SKILLS</h1>
            <h3>
              Technologies learnt throughout my journey and used in each of my
              projects.
            </h3>
          </Row>

          <div className="d-flex flex-row p-2">
            <div className="item">
              <SiJavascript size={iconSize} className="m-4" />
              <h5>JavaScript</h5>
            </div>
            <div>
              <FaReact size={iconSize} className="m-4" />
              <h5>React</h5>
            </div>
            <div>
              <BsBootstrap size={iconSize} className="m-4 " />
              <h5>Bootstrap</h5>
            </div>
            <div className="item">
              <FaJava size={iconSize} className="m-4" />
              <h5>Java</h5>
            </div>
            <div className="item">
              <FaPhp size={iconSize} className="m-4" />
              <h5>PHP</h5>
            </div>
            <div className="item">
              <SiMysql size={iconSize} className="m-4" />
              <h5>MySQL</h5>
            </div>
            <div className="item">
              <BsFiletypeSql size={iconSize} className="m-4" />
              <h5>SQL</h5>
            </div>
            <div>
              <RiFileExcel2Line size={iconSize} className="m-4 " />
              <h5>Excel</h5>
            </div>
            <div>
              <SiTableau size={iconSize} className="m-4 " />
              <h5>Tableau</h5>
            </div>
            <div>
              <FaGithub size={iconSize} className="m-4 " />
              <h5>Github</h5>
            </div>
            <div>
              <TbBrandVscode size={iconSize} className="m-4 " />
              <h5>VSCode</h5>
            </div>
          </div>
          <div className="d-flex flex-row p-2"></div>
          {/* <div className="d-flex flex-row p-2"></div> */}
        </div>
      </Container>
      <img className="background-image-left" src={colorSharp} />
    </section>
  );
};
