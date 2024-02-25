import { OrderComplete } from "./OrderComplete";
import { SelectedCoffes } from "./SelectedCoffes";
import { Container } from "./styles";

export const Order = () => {
  return (
    <Container>
      <OrderComplete />
      <SelectedCoffes />
    </Container>
  );
};
