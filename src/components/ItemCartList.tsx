import React from "react";
import { Stack } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";

type ItemCartList = {
  id: number;
  quantity: number;
  category: string;
  price: number;
  total: number;
};

export default function ItemCartList({
  id,
  quantity,
  category,
  price,
  total,
}: ItemCartList) {
  return (
    <>
      <Stack
        direction="horizontal"
        gap={3}
        className="d-flex justify-content-between align-items-baseline mb-4"
      >
        <div className="bg-light">{quantity}</div>
        <div className="vr" />
        <div className="bg-light">{category}</div>
        <div className="vr" />
        <div className="bg-light">
          {formatCurrency(parseFloat((price * quantity).toFixed(2)))}
        </div>
      </Stack>
    </>
  );
}
