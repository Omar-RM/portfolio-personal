import { useState } from "react";

export const Contact = () => {
  const formInitialDetails = {
    fisrtName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}></Col>
        </Row>
      </Container>
    </section>
  );
};
