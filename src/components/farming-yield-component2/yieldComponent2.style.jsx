import styled from "styled-components";

export const FarmingDiv = styled.div`
  background: ${(props) => props.theme.colors.dark_blue};
  padding: 2rem;
  margin: 3rem 4rem;
  border-radius: ${(props) => props.theme.border.radius_m};
`;

export const ProgressBar = styled.div`
  background: ${(props) => props.theme.colors.grey_background};
  border-radius: ${(props) => props.theme.border.radius_m};
  margin: 1rem 0rem;
`;
export const ProgressBarDiv = styled.div`
  margin: 1rem 4rem;
`;

export const ProgressSpan = styled.span`
  float: right;
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
    margin: 1rem 0rem;
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
    font-size: ${(props) => props.theme.fonts.font_size.smallest_font};
  }
`;
export const Heading = styled.div`
  font-weight: ${(props) => props.theme.fonts.font_weight.bolder_font};
  font-size: ${(props) => props.theme.fonts.font_size.larger_font};
  text-align: left;
  margin: 0.5rem 0.5rem;
`;

export const ActiveProgressBar = styled(ProgressBar)`
  background: ${(props) => props.theme.colors.green};
  width: 30%;
  text-align: right;
  padding: 0.2rem 0.5rem;
  font-weight: 800;
  font-size: ${(props) => props.theme.fonts.font_size.font_14};
`;

export const DetailText = styled.div`
  font-weight: ${(props) => props.theme.fonts.font_weight.normal_font};
  font-size: ${(props) => props.theme.fonts.font_size.font_14};
  text-align: left;

`;
export const MinAmount = styled.div`
  font-weight: 800;
  font-size: ${(props) => props.theme.fonts.font_size.font_14};
  text-align: left;
`;
