import { Banner } from "./components/Banner";
import { CoffeList } from "./components/CoffeList";
import { Container, Title } from "./styles";

export const Home = () => {
  return (
    <Container>
      <Banner />

      <Title>Nossos cafés</Title>
      <CoffeList />
    </Container>
  );
};
