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
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);
  
  const [category, setCategory] = useState('Living Room')

    const handleCategory = (category) => {
        setCategory(category)
    }

  useEffect(() => {
    setIsPending(true);

    projectFirestore
      .collection("products")
      .where('category', '==', category)
      .get()
      .then((snapshot) => {
        if (snapshot.empty) {
          setError("We are out of items right now!");
          setData([])
          setIsPending(false);
        } else {
          let results = [];
          snapshot.docs.forEach((doc) => {
            results.push({ id: doc.id, ...doc.data() });
          });
          setError(null)
          setData(results);
          setIsPending(false);
          console.log("Use Effect Shop", data)
        }
      })
      .catch((error) => {
        setError(error.message);
        setIsPending(false);
      });
  }, [category]);

  return (
    <div className="shop" style={{ height: "100%" }}>
      <Container className="my-3" style={{ height: "100%" }}>
        <Row className="gap-2">
          <Col className="bg-light" xs={3}><NavbarCategories onCategory={handleCategory}/></Col>
          <Col>
            {error && <p className="error">{error}</p>}
            {data && <ShopList data={data} />}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
