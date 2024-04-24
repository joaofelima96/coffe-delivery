import { ShoppingCart } from "@phosphor-icons/react";
import { CoffeItemProps } from "./types";

import expressoTradicional from "../../../../../assets/coffes/expresso-tradicional.svg";
import {
  Container,
  CoffeInfoSection,
  ShopSection,
  ImageContainer,
  ShoppingCartContainer,
} from "./styles";
import { DefaultTheme } from "../../../../../styles/DefaultTheme";
import { useState } from "react";
import { Counter } from "../../../../../components/Counter";

export const CoffeItem = ({
  coffeName,
  coffeDescription,
  coffeType,
  coffePrice,
}: CoffeItemProps) => {
  const [quantity, setQuantity] = useState(1);

  const handleChildQtyChange = (newQty: number) => {
    setQuantity(newQty);
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
          <Counter quantity={quantity} onQtyChange={handleChildQtyChange} />
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
