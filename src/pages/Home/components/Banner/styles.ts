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

export const IconContainer = styled.div`
  padding: 10px;
  border-radius: 99px;
`;

export const Infos = styled.div`
  display: grid;
  grid-template-columns: 250px 310px;
  row-gap: 20px;
  column-gap: 40px;

  div {
    &:nth-child(1) {
      > ${IconContainer} {
        background-color: ${DefaultTheme.colors.yellowDark};
      }
    }
    &:nth-child(2) {
      > ${IconContainer} {
        background-color: ${DefaultTheme.colors.base.text};
      }
    }
    &:nth-child(3) {
      > ${IconContainer} {
        background-color: ${DefaultTheme.colors.yellow};
      }
    }
    &:nth-child(4) {
      > ${IconContainer} {
        background-color: ${DefaultTheme.colors.purple};
      }
    }

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
