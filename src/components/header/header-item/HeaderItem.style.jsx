import styled, { css } from "styled-components";

export const ItemWrapper = styled.div`
  display: flex;
`;
export const MenuText = styled.div`
  cursor: pointer;
  color: ${(props) => props.theme.colors.white};
  ${(props) =>
    props.isActive
      ? css`
          color: ${props.theme.colors.green};
        `
      : ""}
      margin-left: 3rem;
`;
