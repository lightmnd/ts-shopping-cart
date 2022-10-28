import React from "react";
import { Stack } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";

type ItemCartList = {
  id: number;
  quantity: number;
  category: string;
  price: number;
  total: number;
  removeItemQuantity: any;
};

export default function ItemCartList({
  id,
  quantity,
  category,
  price,
  total,
  removeItemQuantity,
}: ItemCartList) {
  return (
    <>
      <Stack
        direction="horizontal"
        gap={5}
        className="d-flex justify-content-between align-items-baseline mb-4"
      >
        <div className="bg-light">{quantity}</div>
        <div className="vr" />
        <div className="bg-light">{category}</div>
        <div className="vr" />
        <div className="bg-light">
          {formatCurrency(parseFloat((price * quantity).toFixed(2)))}
        </div>
        <div
          onClick={() =>
            removeItemQuantity(id, quantity, category, price, total)
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-trash"
            viewBox="0 0 16 16"
          >
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
            <path
              fill-rule="evenodd"
              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
            />
          </svg>
        </div>
      </Stack>
    </>
  );
}
