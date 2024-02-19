import { ShoppingCart } from "@phosphor-icons/react";
import { CoffeItemProps } from "./types";

import expressoTradicional from "../../../../../assets/coffes/expresso-tradicional.svg";
import {
  Container,
  CoffeInfoSection,
  ShopSection,
  QtyContainer,
  ImageContainer,
  ShoppingCartContainer,
  QtyButton,
} from "./styles";
import { DefaultTheme } from "../../../../../styles/DefaultTheme";
import { useState } from "react";

export const CoffeItem = ({
  coffeName,
  coffeDescription,
  coffeType,
  coffePrice,
}: CoffeItemProps) => {
  const [qty, setQty] = useState(1);

  const isDisabled = qty === 1;

  const handleAddQty = () => {
    setQty((state) => state + 1);
  };
  const handleRemoveQty = () => {
    setQty((state) => state - 1);
  };

  return (
    <Container>
      <ImageContainer>
        <img src={expressoTradicional} alt="" />
      </ImageContainer>
      <CoffeInfoSection>
        <span>{coffeType}</span>
        <p>{coffeName}</p>
        <span>{coffeDescription}</span>
      </CoffeInfoSection>
      <ShopSection>
        <p>{coffePrice}</p>
        <div>
          <QtyContainer>
            <QtyButton onClick={() => handleRemoveQty()} disabled={isDisabled}>
              -
            </QtyButton>
            <span>{qty}</span>
            <QtyButton onClick={() => handleAddQty()}>+</QtyButton>
          </QtyContainer>
          <ShoppingCartContainer>
            <ShoppingCart
              size={22}
              color={DefaultTheme.colors.white}
              weight="fill"
            />
          </ShoppingCartContainer>
        </div>
      </ShopSection>
    </Container>
  );
};
