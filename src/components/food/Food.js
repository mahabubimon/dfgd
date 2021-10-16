import React from "react";
import { Card, Col } from "react-bootstrap";

const Food = ({food}) => {
    const {image} = food;
  return (
    <Col>
    <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>
    </Col>
  );
};

export default Food;
