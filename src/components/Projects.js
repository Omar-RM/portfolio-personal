import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import jackGallery from "../assets/img/sony-gallery.png";
import gameHub from "../assets/img/game-hub.png";
export const Projects = () => {
  const projects = [
    {
      title: "Game Hub",
      description:
        "A web application which displays some of the most popular video games, with the option to sort the games based on rating, genre, platform and relevance. ",
      imgUrl: gameHub,
      buttonlLink: "https://game-platform-project.vercel.app/",
    },
    {
      title: "Jack Sony Pictures",
      description:
        "A portfolio gallery for a small business to show their work and contact details, the user has full access to the layout of the gallery, and can personalize at any minute.",
      imgUrl: jackGallery,
      buttonlLink:
        "https://tazasrotas.000webhostapp.com/jack-sony-pictures/gallery.html",
    },
  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2 className="mb-4">PROJECTS</h2>
            <h4 className="mb-4">
              Showcases projects that identify a specific user need and develop
              a tool that can be used regularly to solve that problem.
            </h4>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="mb-5 nav-pills">
                <Nav.Item>
                  <Nav.Link eventKey="first">Websites</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Software Applications</Nav.Link>
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
                {/* <Tab.Pane eventKey="second">Lorem Ipsum</Tab.Pane> */}
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} />
    </section>
  );
};
