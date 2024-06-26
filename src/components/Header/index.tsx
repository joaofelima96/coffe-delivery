import { useState } from "react";
import logo from "../../assets/logo.svg";

import { MapPin } from "@phosphor-icons/react";
import { ShoppingCart } from "@phosphor-icons/react/dist/ssr";
import {
  HeaderContainer,
  LocationCartContainer,
  LocationContainer,
  QtyProducts,
  ShopContainer,
} from "./styles";
import { DefaultTheme } from "../../styles/DefaultTheme";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const [isHovered, setHovered] = useState(false);

  return (
    <HeaderContainer>
      <NavLink to={"/"}>
        <img src={logo} alt="Logo coffe-delivery" />
      </NavLink>

      <LocationCartContainer>
        <LocationContainer>
          <MapPin size={22} color={DefaultTheme.colors.purple} weight="fill" />
          <p>Mogi Guaçu, SP</p>
        </LocationContainer>

        <NavLink to={"/order"}>
          <ShopContainer
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <ShoppingCart
              size={22}
              color={
                isHovered
                  ? DefaultTheme.colors.yellowLight
                  : DefaultTheme.colors.yellowDark
              }
              weight="fill"
            />

            <QtyProducts>3</QtyProducts>
          </ShopContainer>
        </NavLink>
      </LocationCartContainer>
    </HeaderContainer>
  );
};
