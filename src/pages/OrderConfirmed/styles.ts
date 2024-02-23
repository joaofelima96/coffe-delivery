import styled from "styled-components";
import { DefaultTheme } from "../../styles/DefaultTheme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 80px;

  padding: 0 160px;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;

  h1 {
    font-family: ${DefaultTheme.fonts.family.baloo2};
    font-size: ${DefaultTheme.fonts.size.titleL};
    font-weight: ${DefaultTheme.fonts.weight.titleL};
    line-height: ${DefaultTheme.fonts.lineHeight._130};
    color: ${DefaultTheme.colors.yellowDark};
  }

  p {
    font-family: ${DefaultTheme.fonts.family.roboto};
    font-size: ${DefaultTheme.fonts.size.textL};
    font-weight: ${DefaultTheme.fonts.weight.regular};
    line-height: ${DefaultTheme.fonts.lineHeight._130};
    color: ${DefaultTheme.colors.base.subtitle};
  }
`;

export const DeliveryContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const InfoDeliveryContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 32px;

  width: 526px;
  height: 100%;
  padding: 40px;

  background: ${DefaultTheme.colors.background};

  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 6px;
`;

export const Border = styled.div`
  background: linear-gradient(to right, #dbac2c, #8047f8);
  padding: 1px;

  height: 100%;

  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 6px;
`;

export const InfosContainer = styled.div`
  display: flex;
  gap: 12px;
`;

export const AddressContainer = styled.div`
  p {
    font-family: ${DefaultTheme.fonts.family.roboto};
    font-size: ${DefaultTheme.fonts.size.textM};
    font-weight: ${DefaultTheme.fonts.weight.regular};
    line-height: ${DefaultTheme.fonts.lineHeight._130};
    color: ${DefaultTheme.colors.base.text};
  }
`;

interface IconProps {
  icon: "pin" | "timer" | "money";
}

export const IconContainer = styled.div<IconProps>`
  height: fit-content;
  padding: 8px 8px 5px 8px;
  border-radius: 99px;

  background-color: ${(props) =>
    props.icon === "pin" && DefaultTheme.colors.purple};
  background-color: ${(props) =>
    props.icon === "timer" && DefaultTheme.colors.yellow};
  background-color: ${(props) =>
    props.icon === "money" && DefaultTheme.colors.yellowDark};
`;
