import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, buttonlLink }) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span className="text-justify">{description}</span>
          <br></br>
          <a href={buttonlLink}>
            <br></br>
            <h5>Visit Project</h5>
          </a>
        </div>
      </div>
    </Col>
  );
};
