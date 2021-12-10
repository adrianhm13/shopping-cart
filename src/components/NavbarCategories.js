import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
export default function NavbarCategories({ onCategory }) {
  return (
    <div>
      <div className="my-4">
        <h6>Categories</h6>
      </div>
      <div>
        <Nav variant="pills" className="flex-column">
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/shop?q=kitchen"
              eventKey="link-1"
              onClick={() => {
                onCategory("Kitchen");
              }}
            >
              Kitchen
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/shop?q=living-room"
              eventKey="link-2"
              onClick={() => {
                onCategory("Living Room");
              }}
            >
              Living Room
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/shop?q=bedroom"
              eventKey="link-3"
              onClick={() => {
                onCategory("Bedroom");
              }}
            >
              Bedroom
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </div>
  );
}
