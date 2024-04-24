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
  const isCreditChecked = (
    document.getElementById("credit") as HTMLInputElement
  )?.checked;
  const isDebitChecked = (document.getElementById("debit") as HTMLInputElement)
    ?.checked;
  const isMoneyChecked = (document.getElementById("money") as HTMLInputElement)
    ?.checked;

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
          <label>
            <input type="radio" name="payment" id="credit" />
            <div>
              <CreditCard size={15} color={DefaultTheme.colors.purple} />
              <span>CARTÃO DE CRÉDITO</span>
            </div>
          </label>
        </PaymentFormatContainer>
        <PaymentFormatContainer>
          <label>
            <input type="radio" name="payment" id="debit" />
            <div>
              <Bank size={15} color={DefaultTheme.colors.purple} />
              <span>CARTÃO DE DÉBITO</span>
            </div>
          </label>
        </PaymentFormatContainer>
        <PaymentFormatContainer>
          <label>
            <input type="radio" name="payment" id="money" />
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
