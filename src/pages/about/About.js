// Bootstrap components

import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Image from "react-bootstrap/Image";

export default function About() {
  return (
    <Container className="d-flex flex-column my-5">
      <Row>
        <h2 className="display-2 text-primary">Technologies used:</h2>
      </Row>
      <Row className="justify-content-center mt-5">
        <Col  xs="3"lg="2">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png"
            fluid
          ></Image>
        </Col>
        <Col  xs="3"lg="2">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png"
            fluid
          ></Image>
        </Col>
        <Col  xs="3"lg="2">
          <Image
            src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
            fluid
          ></Image>
        </Col>
      </Row>
      <h2 className="display-6 text-secondary my-5">Images from: <a href="https://unsplash.com/" alt="Link to Unsplash">Unsplash</a></h2>
    </Container>
  );
}
