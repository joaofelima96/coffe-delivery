import styled from "styled-components";
import { DefaultTheme } from "../../../styles/DefaultTheme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Title = styled.span`
  font-family: ${DefaultTheme.fonts.family.baloo2};
  font-size: ${DefaultTheme.fonts.size.titleXS};
  font-weight: ${DefaultTheme.fonts.weight.titleXS};
  line-height: ${DefaultTheme.fonts.lineHeight._130};
  color: ${DefaultTheme.colors.base.subtitle};
`;
