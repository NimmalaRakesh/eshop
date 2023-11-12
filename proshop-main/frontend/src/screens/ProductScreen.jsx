import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  ListGroupItem,
} from "react-bootstrap";
import Rating from "../components/Rating";
import axios from "axios";

function ProductScreen() {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id: productId } = useParams();
  useEffect(() => {
    async function fetchProducts() {
      setIsLoading(true);
      const { data } = await axios.get(`/api/products/${productId}`);
      console.log(data);
      setProduct(data);
      setIsLoading(false);
    }
    fetchProducts();
  }, [productId]);

  console.log(product);
  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <Link className="btn btn-light my-3" to="/">
            Go Back
          </Link>
          <Row>
            <Col md="5">
              <Image src={product?.image} alt={product?.name} fluid />
            </Col>
            <Col md="4">
              <ListGroup variant="flush">
                <ListGroupItem>
                  <h3>{product?.name}</h3>
                </ListGroupItem>

                <ListGroupItem>
                  <Rating
                    value={product?.rating}
                    text={`${product?.numReviews} reviews`}
                  />
                </ListGroupItem>

                <ListGroupItem>Price: ${product?.price}</ListGroupItem>
                <ListGroupItem>
                  Description: {product?.description}
                </ListGroupItem>
              </ListGroup>
            </Col>
            <Col md="3">
              <Card>
                <ListGroup variant="flush">
                  <ListGroupItem>
                    <Row>
                      <Col>Price</Col>
                      <Col>
                        <strong>${product?.price}</strong>
                      </Col>
                    </Row>
                  </ListGroupItem>

                  <ListGroupItem>
                    <Row>
                      <Col>Status:</Col>
                      <Col>
                        <strong>
                          {product?.countInStock > 0
                            ? "In stock"
                            : "Out of Stock"}
                        </strong>
                      </Col>
                    </Row>
                  </ListGroupItem>

                  <ListGroupItem>
                    <Button
                      className="btn-block"
                      type="button"
                      disabled={product?.countInStock === 0}
                    >
                      Add To Cart
                    </Button>
                  </ListGroupItem>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </>
      )}
    </>
  );
}

export default ProductScreen;
