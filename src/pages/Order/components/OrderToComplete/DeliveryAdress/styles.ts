import styled from "styled-components";
import { DefaultTheme } from "../../../../../styles/DefaultTheme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 40px;
  border-radius: 6px;

  background-color: ${DefaultTheme.colors.base.card};

  p {
    font-family: ${DefaultTheme.fonts.family.roboto};
    font-size: ${DefaultTheme.fonts.size.buttonM};
    font-weight: ${DefaultTheme.fonts.weight.regular};
    color: red;
  }

  section {
    display: flex;
    gap: 8px;

    span {
      font-family: ${DefaultTheme.fonts.family.roboto};
      font-size: ${DefaultTheme.fonts.size.textM};
      font-weight: ${DefaultTheme.fonts.weight.regular};
      line-height: ${DefaultTheme.fonts.lineHeight._130};
      color: ${DefaultTheme.colors.base.subtitle};
    }

    p {
      font-family: ${DefaultTheme.fonts.family.roboto};
      font-size: ${DefaultTheme.fonts.size.textS};
      font-weight: ${DefaultTheme.fonts.weight.regular};
      line-height: ${DefaultTheme.fonts.lineHeight._130};
      color: ${DefaultTheme.colors.base.text};
    }
  }
`;

export const AdressContainer = styled.div`
  display: grid;
  grid-template-columns: 200px 266px 70px;
  grid-template-rows: repeat(4, 42px);
  grid-column-gap: 12px;
  grid-row-gap: 24px;

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type="number"] {
    appearance: textfield;
  }

  input {
    border-style: none;
    border-radius: 4px;
    padding: 12px;
    background-color: ${DefaultTheme.colors.base.input};

    &:focus {
      outline: none;
      box-shadow: 0 0 0 1px ${DefaultTheme.colors.yellow};
    }

    &::placeholder {
      font-family: ${DefaultTheme.fonts.family.roboto};
      font-size: ${DefaultTheme.fonts.size.textS};
      font-weight: ${DefaultTheme.fonts.weight.regular};
      line-height: ${DefaultTheme.fonts.lineHeight._130};
      color: ${DefaultTheme.colors.base.label};
    }
  }

  div {
    display: flex;
    flex-direction: column;

    p {
      margin-top: 5px;
      font-family: ${DefaultTheme.fonts.family.roboto};
      font-size: ${DefaultTheme.fonts.size.buttonM};
      font-weight: ${DefaultTheme.fonts.weight.regular};
      color: red;

      white-space: nowrap;
    }
  }

  div:nth-child(1) {
    grid-column: 1 / 1;
    grid-row: 1;
  }
  div:nth-child(2) {
    grid-column: 1 / 4;
    grid-row: 2;

    input {
      cursor: not-allowed;
      background-color: ${DefaultTheme.colors.base.button};
    }
  }
  div:nth-child(3) {
    grid-column: 1 / 2;
    grid-row: 3;
  }
  div:nth-child(4) {
    grid-column: 2 / 4;
    grid-row: 3;
    input {
      &::placeholder {
        font-style: italic;
        opacity: 0.5;
      }
    }
  }
  div:nth-child(5) {
    grid-column: 1 / 2;
    grid-row: 4;

    input {
      cursor: not-allowed;
      background-color: ${DefaultTheme.colors.base.button};
    }
  }
  div:nth-child(6) {
    grid-column: 2 / 3;
    grid-row: 4;

    input {
      cursor: not-allowed;
      background-color: ${DefaultTheme.colors.base.button};
    }
  }
  div:nth-child(7) {
    grid-column: 3 / 4;
    grid-row: 4;

    input {
      cursor: not-allowed;
      background-color: ${DefaultTheme.colors.base.button};
    }
  }
`;
