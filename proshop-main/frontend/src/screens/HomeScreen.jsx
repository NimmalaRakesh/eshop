import { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";

function HomeScreen() {
  const [products, setProducts] = useState();
  useEffect(() => {
    async function fetchProducts() {
      const { data } = await axios.get("/api/products");
      console.log(data);
      setProducts(data);
    }
    fetchProducts();
  }, []);
  return (
    <>
      <h1>Latest Products</h1>
      <Row style={{ marginBottom: "20px" }}>
        {products?.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <Product products={product} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default HomeScreen;
