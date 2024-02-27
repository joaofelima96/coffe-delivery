import { Container, Title } from "./styles";
import { DeliveryAdress } from "./DeliveryAdress";
import { Payment } from "./Payment";

export const OrderComplete = () => {
  return (
    <Container>
      <Title>Complete seu pedido</Title>
      <DeliveryAdress />
      <Payment />
    </Container>
  );
};
