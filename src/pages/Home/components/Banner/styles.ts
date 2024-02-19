import styled from "styled-components";
import { DefaultTheme } from "../../../../styles/DefaultTheme";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 92px 0;
`;
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 66px;
`;

export const Title = styled.div`
  width: 588px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  h1 {
    font-family: ${DefaultTheme.fonts.family.baloo2};
    font-size: ${DefaultTheme.fonts.size.titleXL};
    font-weight: ${DefaultTheme.fonts.weight.titleXL};
    line-height: ${DefaultTheme.fonts.lineHeight._130};
    color: ${DefaultTheme.colors.base.title};
  }

  h2 {
    font-family: ${DefaultTheme.fonts.family.roboto};
    font-size: ${DefaultTheme.fonts.size.textL};
    font-weight: ${DefaultTheme.fonts.weight.regular};
    line-height: ${DefaultTheme.fonts.lineHeight._130};
    color: ${DefaultTheme.colors.base.subtitle};
  }
`;
export const Infos = styled.div`
  display: grid;
  grid-template-columns: 250px 310px;
  row-gap: 20px;
  column-gap: 40px;

  div {
    display: flex;
    align-items: center;
    gap: 20px;

    p {
      font-family: ${DefaultTheme.fonts.family.roboto};
      font-size: ${DefaultTheme.fonts.size.textM};
      font-weight: ${DefaultTheme.fonts.weight.regular};
      line-height: ${DefaultTheme.fonts.lineHeight._130};
      color: ${DefaultTheme.colors.base.text};
    }
  }
`;

interface IconProps {
  isShopingCart?: boolean;
  isPackage?: boolean;
  isClock?: boolean;
  isCoffee?: boolean;
}

export const IconContainer = styled.div<IconProps>`
  padding: 10px;
  border-radius: 99px;

  background-color: ${(props) => {
    switch (true) {
      case props.isShopingCart:
        return DefaultTheme.colors.yellowDark;
      case props.isPackage:
        return DefaultTheme.colors.base.text;
      case props.isClock:
        return DefaultTheme.colors.yellow;
      case props.isCoffee:
        return DefaultTheme.colors.purple;
      default:
        return "transparent";
    }
  }};
`;
