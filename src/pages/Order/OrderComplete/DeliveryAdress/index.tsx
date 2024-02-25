import { MapPinLine } from "@phosphor-icons/react";
import { AdressContainer, Container } from "./styles";
import { DefaultTheme } from "../../../../styles/DefaultTheme";

export const DeliveryAdress = () => {
  return (
    <Container>
      <section>
        <MapPinLine size={22} color={DefaultTheme.colors.yellowDark} />
        <div>
          <span>Endereço de entrega</span>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </section>

      <AdressContainer>
        <input type="text" placeholder="CEP" />
        <input type="text" placeholder="Rua" />
        <input type="text" placeholder="Número" />
        <input type="text" placeholder="Complemento" />
        <input type="text" placeholder="Bairro" />
        <input type="text" placeholder="Cidade" />
        <input type="text" placeholder="UF" />
      </AdressContainer>
    </Container>
  );
};
