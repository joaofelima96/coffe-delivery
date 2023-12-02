import logo from "../../assets/logo.svg";

import { MapPin } from "@phosphor-icons/react";
import { ShoppingCart } from "@phosphor-icons/react/dist/ssr";
import {
  HeaderContainer,
  LocationCartContainer,
  LocationContainer,
  ShopContainer,
} from "./styles";

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={logo} alt="Logo coffe-delivery" />
      <LocationCartContainer>
        <LocationContainer>
          <MapPin size={32} color="black" weight="fill" />
          <p>Mogi Guaçu, SP</p>
        </LocationContainer>
        <ShopContainer>
          <ShoppingCart size={32} color="black" weight="fill" />
        </ShopContainer>
      </LocationCartContainer>
    </HeaderContainer>
  );
};
