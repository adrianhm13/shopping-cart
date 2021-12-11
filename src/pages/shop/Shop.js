import { useEffect, useState } from "react";
import { projectFirestore } from "../../firebase/config";

// Components
import ShopList from "../../components/ShopList";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import NavbarCategories from "../../components/NavbarCategories";

export default function Shop() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  const [category, setCategory] = useState("");

  const handleCategory = (category) => {
    setCategory(category);
  };

  //Fetching products for products list
  useEffect(() => {
    let query = projectFirestore.collection("products");

    if (category) {
      query = query.where("category", "==", category);
    }
    query
      .get()
      .then((snapshot) => {
        if (snapshot.empty) {
          setError("We are out of items right now!");
          setData([]);
        } else {
          let results = [];
          snapshot.docs.forEach((doc) => {
            results.push({ id: doc.id, ...doc.data() });
          });
          setError(false);
          setData(results);
          console.log("Use Effect Shop", data);
        }
      })
      .catch((error) => {
        setError(error.message);
      });
  }, [category]);

  return (
    <div className="shop" style={{ minHeight: "800px" }}>
      <Container className="my-3" style={{ minHeight: "800px" }}>
        <Row
          className="gap-2 justify-content-center"
          style={{ minHeight: "800px" }}
        >
          <Col className="bg-light border rounded" xs={8} md={2}>
            <NavbarCategories onCategory={handleCategory} />
          </Col>
          <Col className="border rounded p-3">
            {error && <p className="error">{error}</p>}
            {data && <ShopList data={data} />}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
