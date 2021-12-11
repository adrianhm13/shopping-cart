//Bootstrap components

import Carousel from "react-bootstrap/Carousel";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Image from "react-bootstrap/esm/Image";
import Row from "react-bootstrap/esm/Row";

// Styles
import './Home.css'

export default function Home() {
  return (
    <Container fluid className="home main-bg p-0">
        <div className="box py-5">
            <h3 className="display-3 text-white">Welcome to MinimFurn</h3>
            <p className="display-6 text-white my-5">This project has been created with the purpose of practicing different hooks like useContext and useReducer, and get more used to the library Reactjs</p>
        </div>
    </Container>
  );
}
