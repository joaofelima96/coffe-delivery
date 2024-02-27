import {
  Bank,
  CreditCard,
  CurrencyDollarSimple,
  Money,
} from "@phosphor-icons/react";
import { Container } from "../DeliveryAdress/styles";

import { PaymentContainer, PaymentFormatContainer } from "./styles";
import { DefaultTheme } from "../../../../../styles/DefaultTheme";

export const Payment = () => {
  return (
    <Container>
      <section>
        <CurrencyDollarSimple size={22} color={DefaultTheme.colors.purple} />
        <div>
          <span>Endereço de entrega</span>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </section>

      <PaymentContainer>
        <PaymentFormatContainer>
          <label htmlFor="">
            <input type="radio" name="credit" id="" />
            <div>
              <CreditCard size={15} color={DefaultTheme.colors.purple} />
              <span>CARTÃO DE CRÉDITO</span>
            </div>
          </label>
        </PaymentFormatContainer>
        <PaymentFormatContainer>
          <label htmlFor="">
            <input type="radio" name="credit" id="" />
            <div>
              <Bank size={15} color={DefaultTheme.colors.purple} />
              <span>CARTÃO DE DÉBITO</span>
            </div>
          </label>
        </PaymentFormatContainer>
        <PaymentFormatContainer>
          <label htmlFor="">
            <input type="radio" name="credit" id="" />
            <div>
              <Money size={15} color={DefaultTheme.colors.purple} />
              <span>DINHEIRO</span>
            </div>
          </label>
        </PaymentFormatContainer>
      </PaymentContainer>
    </Container>
  );
};
