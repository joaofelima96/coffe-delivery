import { CurrencyDollarSimple, MapPin, Timer } from "@phosphor-icons/react";
import motoboy from "../../assets/Illustration.svg";
import {
  AddressContainer,
  Border,
  Container,
  DeliveryContainer,
  IconContainer,
  InfoDeliveryContainer,
  InfosContainer,
  TitleContainer,
} from "./styles";
import { DefaultTheme } from "../../styles/DefaultTheme";

export const OrderConfirmed = () => {
  return (
    <Container>
      <TitleContainer>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o cafe chega até você</p>
      </TitleContainer>

      <DeliveryContainer>
        <Border>
          <InfoDeliveryContainer>
            <InfosContainer>
              <IconContainer icon="pin">
                <MapPin
                  size={22}
                  color={DefaultTheme.colors.white}
                  weight="fill"
                />
              </IconContainer>
              <AddressContainer>
                <p>
                  Entrega em <b>Rua João Daniel Martinelli, 102</b>
                </p>
                <p>Farrapos - Porto Alegre, RS</p>
              </AddressContainer>
            </InfosContainer>
            <InfosContainer>
              <IconContainer icon="timer">
                <Timer
                  size={22}
                  color={DefaultTheme.colors.white}
                  weight="fill"
                />
              </IconContainer>
              <AddressContainer>
                <p>Previsão de entrega</p>
                <p>
                  <b>20 min - 30 min</b>
                </p>
              </AddressContainer>
            </InfosContainer>
            <InfosContainer>
              <IconContainer icon="money">
                <CurrencyDollarSimple
                  size={22}
                  color={DefaultTheme.colors.white}
                  weight="fill"
                />
              </IconContainer>
              <AddressContainer>
                <p>Pagamento na entrega</p>
                <p>
                  <b>Cartão de crédito</b>
                </p>
              </AddressContainer>
            </InfosContainer>
          </InfoDeliveryContainer>
        </Border>

        <img src={motoboy} alt="Homem fazendo entrega de moto" />
      </DeliveryContainer>
    </Container>
  );
};
