import styled from "styled-components";
import { DefaultTheme } from "../../../../../styles/DefaultTheme";

export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  > div {
    display: flex;
    gap: 12px;
  }
`;

export const PaymentFormatContainer = styled.div`
  display: flex;

  label {
    position: relative;

    div {
      width: 100%;
      height: 15px;
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding-left: 15px;
      gap: 8px;
      bottom: 20px;
      left: 0;
      pointer-events: none;

      span {
        font-family: ${DefaultTheme.fonts.family.roboto};
        font-size: ${DefaultTheme.fonts.size.buttonM};
        font-weight: ${DefaultTheme.fonts.weight.buttonM};
        line-height: ${DefaultTheme.fonts.lineHeight._130};
        color: ${DefaultTheme.colors.base.text};
      }
    }
  }

  input {
    margin: 0;
    cursor: pointer;
    appearance: none;
    width: 178px;
    height: 51px;
    background-color: ${DefaultTheme.colors.base.button};
    border-radius: 6px;

    &:checked {
      border: 2px solid ${DefaultTheme.colors.purple};
      background-color: rgba(128, 71, 248, 0.1);
    }
  }
`;
