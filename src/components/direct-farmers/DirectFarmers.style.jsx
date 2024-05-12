import { styled, css } from "styled-components";

export const SectionTitle = styled.div`
  display: flex;
  margin: 0.5rem 0rem;
`;
export const Sections = styled.div`
  margin: 0rem 1rem;
  cursor: pointer;
  padding: 0.5rem;
  font-weight: ${(props) => props.theme.fonts.font_weight.bold_font};
  font-size: ${(props) => props.theme.fonts.font_size.large_font};
  ${(props) =>
    props.isActive
      ? css`
          background: #f3ba2f;
          color: black;
          padding: 0.5rem;
          margin: 0rem 0.5rem;
          border-radius: ${(props) => props.theme.border.radius_m};
        `
      : ""}
`;
export const YieldDetail = styled.div`
  background: ${(props) => props.theme.colors.grey_background};
  padding: 1rem;
  margin: 1rem 1rem;
  text-align: center;
  width: 80%;
  border-radius: ${(props) => props.theme.border.radius_m};
  @media (max-width: 600px) {
    width: 100%;
    padding: 0.5rem;
    margin: 1rem;
  }
`;

export const Value = styled.div`
  color: orange;
  font-size: ${(props) => props.theme.fonts.font_size.larger_font};
  font-weight: ${(props) => props.theme.fonts.font_weight.bold_font};
  margin-bottom: 1.5rem;
`;
export const Subtext = styled.div`
  font-size: ${(props) => props.theme.fonts.font_size.font_14};
  font-weight: ${(props) => props.theme.fonts.font_weight.medium_font};
  margin: 0.5rem 0rem;
  @media (max-width: 600px) {
    font-size: ${(props) => props.theme.fonts.font_size.below_normal_font};
  }
`;
export const TableDiv = styled.div`
  margin: 2rem 0.5rem;
`;
export const FarmingDiv = styled.div`
  background: ${(props) => props.theme.colors.dark_blue};
  padding: 1%;
  margin: 3rem 4rem;
  border-radius: ${(props) => props.theme.border.radius_m};
`;
