import styled from "styled-components";
import { DefaultTheme } from "../../../../../styles/DefaultTheme";

export const ItemContainer = styled.div`
  width: 368px;
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const ItemInfoContainer = styled.div`
  width: 100%;
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-size: ${DefaultTheme.fonts.size.textM};
    font-family: ${DefaultTheme.fonts.family.roboto};
    line-height: ${DefaultTheme.fonts.lineHeight._130};

    &:nth-child(1) {
      font-weight: ${DefaultTheme.fonts.weight.regular};
      color: ${DefaultTheme.colors.base.subtitle};
    }
    &:nth-child(2) {
      font-weight: ${DefaultTheme.fonts.weight.bold};
      color: ${DefaultTheme.colors.base.text};
    }
  }
`;

export const QttyContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 8px;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding: 6.5px 8px;

    background-color: ${DefaultTheme.colors.base.button};
    border-radius: 6px;

    &:hover {
      cursor: pointer;
    }
  }

  span {
    font-family: ${DefaultTheme.fonts.family.roboto};
    font-size: ${DefaultTheme.fonts.size.textS};
    font-weight: ${DefaultTheme.fonts.weight.textS};
    line-height: ${DefaultTheme.fonts.lineHeight._130};
    color: ${DefaultTheme.colors.base.text};
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  margin: 24px 0;
  background-color: ${DefaultTheme.colors.base.button};
`;
