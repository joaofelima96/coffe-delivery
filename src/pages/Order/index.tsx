import { OrderComplete } from "./components/OrderComplete";
import { SelectedCoffes } from "./components/SelectedCoffes";
import { Container } from "./styles";

export const Order = () => {
  return (
    <Container>
      <OrderComplete />
      <SelectedCoffes />
    </Container>
  );
};
