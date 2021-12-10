import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
export default function NavbarCategories({ onCategory }) {
  return (
    <div>
      <div className="mt-5">
        <h6 className="display-6">Categories</h6>
      </div>
      <hr />
      <div className="mb-3">
        <Nav variant="pills" defaultActiveKey="link-0" className="flex-column">
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/shop"
              eventKey="link-0"
              onClick={() => {
                onCategory("");
              }}
            >
              All products
            </Nav.Link>
          </Nav.Item>
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
