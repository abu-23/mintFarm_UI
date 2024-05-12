import styled from "styled-components";

export const FarmingDiv = styled.div`
  background: ${(props) => props.theme.colors.dark_blue};
  padding: 2rem;
  margin: 3rem 4rem;
  border-radius: 10px;
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
  border-radius: 10px;
  @media (max-width: 600px) {
    width: 100%;
    padding: 0.5rem;
    margin: 1rem 0rem;
  }
`;

export const Value = styled.div`
  color: orange;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 1.5rem;
`;
export const Subtext = styled.div`
  font-size: 14px;
  font-weight: 400;
  margin: 0.5rem 0rem;
  @media (max-width: 600px) {
    font-size: 10px;
  }
`;
export const Heading = styled.div`
  font-weight: 700;
  font-size: 18px;
  text-align: left;
  margin: 0.5rem 0.5rem;
`;

export const ActiveProgressBar = styled(ProgressBar)`
  background: ${(props) => props.theme.colors.green};
  width: 30%;
  text-align: right;
  padding: 0.2rem 0.5rem;
  font-weight: 800;
  font-size: 14px;
`;

export const DetailText = styled.div`
  font-weight: 300;
  font-size: 14px;
  text-align: left;

`;
export const MinAmount = styled.div`
  font-weight: 800;
  font-size: 14px;
  text-align: left;
`;
