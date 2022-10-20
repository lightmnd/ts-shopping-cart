import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem";

export function Store() {
  const [elem, setElem]: Array<any> = useState();
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setElem(data));
  }, []);

  return (
    <>
      <h1>Store</h1>
      <Container>
        <Row xs={1} md={2} lg={3} className="g-3">
          {elem?.map((item: any) => {
            return (
              <Col key={item.id}>
                <StoreItem {...item} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}
