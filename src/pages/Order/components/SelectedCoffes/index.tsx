import {
  CartContainer,
  PriceContainer,
  PriceInfos,
  Title,
  Total,
  TotalItemsAndDelivery,
} from "./styles";
import { CartItems } from "./CartItems";

export const SelectedCoffes = () => {
  return (
    <div>
      <Title>Selected Coffes</Title>

      <CartContainer>
        <CartItems />

        <PriceContainer>
          <PriceInfos>
            <TotalItemsAndDelivery>
              <span>Total de itens</span>
              <span>R$ 29,70</span>
            </TotalItemsAndDelivery>
            <TotalItemsAndDelivery>
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </TotalItemsAndDelivery>
            <Total>
              <span>Total</span>
              <span>R$ 33,20</span>
            </Total>
          </PriceInfos>
          <button type="button">CONFIRMAR PEDIDO</button>
        </PriceContainer>
      </CartContainer>
    </div>
  );
};
