import { Button, Card } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";
import { useShoppingCart } from "./../context/shoppingCartContext";

type StoreItemElements = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
};

export function StoreItem({
  id,
  category,
  description,
  image,
  price,
}: StoreItemElements) {
  const {
    getItemQuantity,
    removeItemQuantity,
    increaseItemQuantity,
    decreaseItemQuantity,
  } = useShoppingCart();

  const quantity: number = getItemQuantity(id);

  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={image}
        height="200px"
        style={{ objectFit: "cover" }}
      ></Card.Img>
      <Card.Body className="d-flex flex-column">
        <Card.Title>{category}</Card.Title>
        <Card.Text className="justify-content-space-between align-items-baseline mb-4">
          {description}
        </Card.Text>
        <div className="d-flex flex-row justify-content-between mb-0 mt-auto">
          <Card.Text className="text-muted lead fw-normal mb-0">
            {formatCurrency(price)}
          </Card.Text>
          {console.log(quantity)}
          {quantity === 0 ? (
            <Button
              onClick={() => increaseItemQuantity(id)}
              className=""
              variant="primary"
            >
              Add to cart
            </Button>
          ) : (
            <div className="d-flex flex-column justify-content-center align-items-center">
              <div className="d-flex flex-row justify-content-center align-items-center">
                <Button onClick={() => increaseItemQuantity(id)}>+</Button>
                <div className="d-flex align-items-center p-1">
                  <span className="fs-3 pe-2">{quantity}</span>in cart
                </div>
                <Button onClick={() => decreaseItemQuantity(id)}>-</Button>
              </div>
              <Button onClick={() => removeItemQuantity(id)} variant="danger">
                remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
