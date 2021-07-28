import React from "react";
import { Card } from "react-bootstrap";

import productImg from "../../images/product-1.png";

function ReactProductCard(props) {
  return (
    <Card style={{ width: "255px", height: "230px" }}>
      <Card.Img variant="top" src={productImg} style={{ height: 173 }} />
      <Card.Body variant="bottom" style={{ margin: 0, padding: 0 }}>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>price$</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ReactProductCard;
