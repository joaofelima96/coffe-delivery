import { useState } from "react";
import { QtyContainer, QtyButton } from "./styles";
import { CounterProps } from "./types";

export const Counter = ({ quantity, onQtyChange }: CounterProps) => {
  const [qty, setQty] = useState(quantity);
  const isDisabled = qty === 1;

  const handleAddQty = () => {
    setQty((state) => state + 1);
    onQtyChange(qty);
  };
  const handleRemoveQty = () => {
    setQty((state) => state - 1);
    onQtyChange(qty);
  };

  return (
    <QtyContainer>
      <QtyButton onClick={() => handleRemoveQty()} disabled={isDisabled}>
        -
      </QtyButton>
      <span>{qty}</span>
      <QtyButton onClick={() => handleAddQty()}>+</QtyButton>
    </QtyContainer>
  );
};
