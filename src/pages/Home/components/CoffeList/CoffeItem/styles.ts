import styled from "styled-components";
import { DefaultTheme } from "../../../../../styles/DefaultTheme";

export const Container = styled.li`
  position: relative;
  list-style: none;

  padding: 0 24px 20px 24px;
  border-style: none;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 36px;
  border-top-right-radius: 36px;
  border-bottom-right-radius: 6px;

  background-color: ${DefaultTheme.colors.base.card};
`;

export const ImageContainer = styled.div`
  width: calc(100% - 40px);
  display: flex;
  justify-content: center;
  position: absolute;
  top: -20px;
`;

export const CoffeInfoSection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  gap: 16px;
  padding: 112px 0 33px 0;

  span {
    &:first-child {
      padding: 4px 8px;
      background-color: ${DefaultTheme.colors.yellowLight};
      border-radius: 100px;

      font-family: ${DefaultTheme.fonts.family.roboto};
      font-size: ${DefaultTheme.fonts.size.tag};
      font-weight: ${DefaultTheme.fonts.weight.tag};
      line-height: ${DefaultTheme.fonts.lineHeight._130};
      color: ${DefaultTheme.colors.yellowDark};
    }

    &:last-child {
      font-family: ${DefaultTheme.fonts.family.roboto};
      font-size: ${DefaultTheme.fonts.size.textS};
      font-weight: ${DefaultTheme.fonts.weight.textS};
      line-height: ${DefaultTheme.fonts.lineHeight._130};
      color: ${DefaultTheme.colors.base.label};

      text-align: center;
    }
  }

  p {
    font-family: ${DefaultTheme.fonts.family.baloo2};
    font-size: ${DefaultTheme.fonts.size.titleS};
    font-weight: ${DefaultTheme.fonts.weight.titleS};
    line-height: ${DefaultTheme.fonts.lineHeight._130};
    color: ${DefaultTheme.colors.base.subtitle};
  }
`;

export const ShopSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;

    gap: 8px;
  }

  p {
    &::before {
      content: "R$ ";
      font-family: ${DefaultTheme.fonts.family.roboto};
      font-size: ${DefaultTheme.fonts.size.textS};
      font-weight: ${DefaultTheme.fonts.weight.textS};
      line-height: ${DefaultTheme.fonts.lineHeight._130};
      color: ${DefaultTheme.colors.base.text};
    }

    font-family: ${DefaultTheme.fonts.family.baloo2};
    font-size: ${DefaultTheme.fonts.size.titleM};
    font-weight: ${DefaultTheme.fonts.weight.titleM};
    line-height: ${DefaultTheme.fonts.lineHeight._130};
    color: ${DefaultTheme.colors.base.text};
  }
`;

export const QtyContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  padding: 12px 8px;
  border-radius: 6px;

  background-color: ${DefaultTheme.colors.base.button};

  span {
    border-style: none;
    background-color: transparent;

    font-family: ${DefaultTheme.fonts.family.roboto};
    font-size: ${DefaultTheme.fonts.size.textM};
    font-weight: ${DefaultTheme.fonts.weight.regular};
    line-height: ${DefaultTheme.fonts.lineHeight._130};
    color: ${DefaultTheme.colors.base.title};
  }
`;

export const ShoppingCartContainer = styled.div`
  padding: 11.4px;
  border-radius: 6px;

  background-color: ${DefaultTheme.colors.purpleDark};
`;
