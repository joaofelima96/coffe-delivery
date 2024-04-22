import { Trash } from "@phosphor-icons/react";
import coffe from "../../../../../assets/coffes/expresso-tradicional.svg";
import {
  ItemContainer,
  ItemInfoContainer,
  InfoContainer,
  QttyContainer,
  Divider,
} from "./styles";
import { DefaultTheme } from "../../../../../styles/DefaultTheme";
import { Counter } from "../../../../../components/Counter";
import { useState } from "react";

export const CartItems = () => {
  const [quantity, setQuantity] = useState(1);

  const onQtyChange = (value: number) => {
    setQuantity(value);
  };

  return (
    <>
      <ItemContainer>
        <div>
          <img src={coffe} width={64} height={64} alt="café" />
        </div>
        <ItemInfoContainer>
          <InfoContainer>
            <span>Expresso Tradicional</span>
            <span>R$ 9,90</span>
          </InfoContainer>
          <QttyContainer>
            <Counter quantity={quantity} onQtyChange={onQtyChange} />
            <div>
              <Trash
                size={16}
                color={DefaultTheme.colors.purple}
                weight="bold"
              />
              <span>REMOVER</span>
            </div>
          </QttyContainer>
        </ItemInfoContainer>
      </ItemContainer>

      <Divider />
    </>
  );
};
