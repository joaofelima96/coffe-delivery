import styled from "styled-components";
import { DefaultTheme } from "../../styles/DefaultTheme";

export const Container = styled.div`
  padding: 0 160px;
`;

export const Title = styled.h2`
  font-family: ${DefaultTheme.fonts.family.baloo2};
  font-size: ${DefaultTheme.fonts.size.titleL};
  font-weight: ${DefaultTheme.fonts.weight.titleL};
  line-height: ${DefaultTheme.fonts.lineHeight._130};
  color: ${DefaultTheme.colors.base.subtitle};
`;
