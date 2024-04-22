import styled from "styled-components";
import { DefaultTheme } from "../../styles/DefaultTheme";

export const QtyContainer = styled.div`
  width: 59px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;

  padding: 6px 8px;
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

export const QtyButton = styled.button`
  border-style: none;
  background-color: transparent;

  padding: 2px;
  border-radius: 100px;

  font-family: ${DefaultTheme.fonts.family.roboto};
  font-size: ${DefaultTheme.fonts.size.titleS};
  font-weight: ${DefaultTheme.fonts.weight.bold};
  color: ${DefaultTheme.colors.purple};

  cursor: pointer;

  &:hover:not(:disabled) {
    background-color: ${DefaultTheme.colors.base.card};
  }

  &:disabled {
    color: ${DefaultTheme.colors.base.label};
    cursor: not-allowed;
  }
`;
