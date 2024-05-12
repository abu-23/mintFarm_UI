import { styled, css } from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
`;

export const Table = styled.table`
  font-family: Arial, sans-serif;
  border-collapse: collapse;
`;
export const Head = styled.th`
  text-align: left;
  padding: 8px;
  border: 1px solid ${(props) => props.theme.colors.light_grey};
  white-space: nowrap;
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;
export const Details = styled.td`
  text-align: left;
  padding: 8px;
  white-space: nowrap;
  border: 1px solid ${(props) => props.theme.colors.light_grey};
  @media screen and (max-width: 1200px) {
    display: flex;
    justify-content: space-between;
  }
  ${(props) =>
    props.status === "Active" || props.status === "Successful"
      ? css`
          color: green;
        `
      : props.status === "Inactive"
      ? css`
          color: red;
        `
      : ""}
`;

export const HeaderSpan = styled.span`
  display: none;
  color: white;
  @media screen and (max-width: 1200px) {
    display: block;
    font-weight: bold;
  }
`;
export const TableRow = styled.tr`
  @media screen and (max-width: 1200px) {
    &:nth-child(even) {
      background: grey;
    }
  }
`;

export const TableHeadingSection = styled.thead`
  background: ${(props) => props.theme.colors.grey_background};
`;
export const TableDetailsSection = styled.tbody`
  background: ${(props) => props.theme.colors.dark_blue};
`;
