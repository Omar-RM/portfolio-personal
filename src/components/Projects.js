import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg3 from "../assets/img/project-img2.png";
import projImg2 from "../assets/img/project-img3.png";
export const Projects = () => {
  const projects = [
    {
      title: "Business Startup",
      description: "Design & DEvelopment",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & DEvelopment",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & DEvelopment",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & DEvelopment",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & DEvelopment",
      imgUrl: projImg2,
    },
  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projets</h2>
            <p>Loremdasd dsfsdfsdfdsf sdfsdfsdfsd dsfsdfsdfsdf sdfsdfsdfsdf </p>
            <Tab.Container id="projects-tabs" defaultActivekey="first">
              <Nav variant="pills" className="mb-5 nav-pills">
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab three</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">Lorem Ipsum</Tab.Pane>
                <Tab.Pane eventKey="third">Lorem Ipsum</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} />
    </section>
  );
};
