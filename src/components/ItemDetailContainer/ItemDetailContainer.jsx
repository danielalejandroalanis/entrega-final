import React from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetailContainer = ({ productData }) => {
  const [stock, setStock] = React.useState(10);
  const [onAdd, setOnAdd] = React.useState(false);

  const buttonStyles = {
    backgroundColor: "blue",
  };

  const buttonStylesOnAdd = {
    backgroundColor: "green",
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={productData.thumbnail} />
      <Card.Body>
        <Card.Title>{productData.title}</Card.Title>
        <Card.Text>{productData.description}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{productData.price}</ListGroup.Item>
        <ListGroup.Item>{productData.rating}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <ItemCount />
        {stock >= 5 ? (
          <strong>Stock disponible</strong>
        ) : (
          <strong>Ultimas unidades disponibles!</strong>
        )}
      </Card.Body>
    </Card>
  );
};

export default ItemDetailContainer;
