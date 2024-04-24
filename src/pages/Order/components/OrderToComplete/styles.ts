import styled from "styled-components";
import { DefaultTheme } from "../../../../styles/DefaultTheme";

export const Container = styled.form`
  display: flex;
  padding: 40px 160px 160px 160px;
  gap: 32px;
`;

export const AdressAndPaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  margin-top: 15px;

  background-color: ${DefaultTheme.colors.base.card};

  border-top-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-right-radius: 44px;
  border-bottom-left-radius: 44px;

  button:nth-child(2) {
    margin-top: 24px;
    width: 100%;
    padding: 12px 0;
    text-align: center;

    border-radius: 6px;
    background-color: ${DefaultTheme.colors.yellow};

    font-family: ${DefaultTheme.fonts.family.roboto};
    font-size: ${DefaultTheme.fonts.size.buttonG};
    font-weight: ${DefaultTheme.fonts.weight.bold};
    line-height: ${DefaultTheme.fonts.lineHeight._130};
    color: ${DefaultTheme.colors.white};

    cursor: pointer;
  }
`;

export const Title = styled.span`
  font-family: ${DefaultTheme.fonts.family.baloo2};
  font-size: ${DefaultTheme.fonts.size.titleXS};
  font-weight: ${DefaultTheme.fonts.weight.titleXS};
  line-height: ${DefaultTheme.fonts.lineHeight._130};
  color: ${DefaultTheme.colors.base.subtitle};
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PriceInfos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const TotalItemsAndDelivery = styled.div`
  span {
    font-family: ${DefaultTheme.fonts.family.roboto};
    font-weight: ${DefaultTheme.fonts.weight.regular};
    line-height: ${DefaultTheme.fonts.lineHeight._130};
    color: ${DefaultTheme.colors.base.text};

    &:nth-child(1) {
      font-size: ${DefaultTheme.fonts.size.textS};
    }
    &:nth-child(2) {
      font-size: ${DefaultTheme.fonts.size.textM};
    }
  }
`;

export const Total = styled.div`
  span {
    font-family: ${DefaultTheme.fonts.family.roboto};
    font-size: ${DefaultTheme.fonts.size.textL};
    font-weight: ${DefaultTheme.fonts.weight.bold};
    line-height: ${DefaultTheme.fonts.lineHeight._130};
    color: ${DefaultTheme.colors.base.subtitle};
  }
`;
