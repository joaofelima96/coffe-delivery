import { Clock, Coffee, Package, ShoppingCart } from "@phosphor-icons/react";
import {
  Container,
  ContentContainer,
  IconContainer,
  Infos,
  Title,
} from "./styles";
import bannerImage from "../../../../assets/banner-image.svg";

export const Banner = () => {
  return (
    <Container>
      <ContentContainer>
        <Title>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h2>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h2>
        </Title>
        <Infos>
          <div>
            <IconContainer>
              <ShoppingCart size={16} weight="fill" color="white" />
            </IconContainer>
            <p>Compra simples e segura</p>
          </div>
          <div>
            <IconContainer>
              <Package size={16} weight="fill" color="white" />
            </IconContainer>
            <p>Embalagem mantém o café intacto</p>
          </div>
          <div>
            <IconContainer>
              <Clock size={16} weight="fill" color="white" />
            </IconContainer>
            <p>Entrega rápida e rastreada</p>
          </div>
          <div>
            <IconContainer>
              <Coffee size={16} weight="fill" color="white" />
            </IconContainer>
            <p>O café chega fresquinho até você</p>
          </div>
        </Infos>
      </ContentContainer>
      <img src={bannerImage} alt="Imagem de café no banner" />
    </Container>
  );
};
