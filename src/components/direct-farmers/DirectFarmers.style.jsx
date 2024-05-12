import { styled, css } from "styled-components";

export const SectionTitle = styled.div`
  display: flex;
  margin: 0.5rem 0rem;
`;
export const Sections = styled.div`
  margin: 0rem 1rem;
  cursor: pointer;
  padding: 0.5rem;
  font-weight: 600;
  font-size: 16px;
  ${(props) =>
    props.isActive
      ? css`
          background: #f3ba2f;
          color: black;
          padding: 0.5rem;
          margin: 0rem 0.5rem;
          border-radius: 10px;
        `
      : ""}
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
    margin: 1rem;
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
    font-size: 12px;
  }
`;
export const TableDiv = styled.div`
  margin: 2rem 0.5rem;
`;
export const FarmingDiv = styled.div`
  background: ${(props) => props.theme.colors.dark_blue};
  padding: 1%;
  margin: 3rem 4rem;
  border-radius: 10px;
`;
