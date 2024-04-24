import styled from "styled-components";
import { DefaultTheme } from "../../styles/DefaultTheme";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem 10rem;
`;

export const LocationCartContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 0.75rem;
`;

export const LocationContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 0.25rem;

  padding: 0.625rem 0.5rem;
  background-color: ${DefaultTheme.colors.purpleLight};
  border-radius: 6px;

  p {
    font-family: ${DefaultTheme.fonts.family.roboto};
    font-size: ${DefaultTheme.fonts.size.textS};
    font-weight: ${DefaultTheme.fonts.weight.regular};
    line-height: ${DefaultTheme.fonts.lineHeight._130};
    color: ${DefaultTheme.colors.purpleDark};
  }
`;

export const ShopContainer = styled.div`
  position: relative;
  padding: 0.5rem;

  &:hover {
    background-color: ${DefaultTheme.colors.yellowDark};
  }

  background-color: ${DefaultTheme.colors.yellowLight};
  border-radius: 6px;

  transition: background-color 0.2s ease;

  cursor: pointer;
`;

export const QtyProducts = styled.p`
  font-family: ${DefaultTheme.fonts.family.roboto};
  font-size: ${DefaultTheme.fonts.size.textS};
  font-weight: ${DefaultTheme.fonts.weight.bold};
  line-height: ${DefaultTheme.fonts.lineHeight._130};
  color: ${DefaultTheme.colors.yellowLight};

  background: ${DefaultTheme.colors.yellowDark};
  border-radius: 900px;

  transition: background-color 0.2s ease;
  transition: color 0.2s ease;

  position: absolute;
  padding: 0.2rem 0.5rem;

  top: -15px;
  right: -12px;
`;
