import { createGlobalStyle } from 'styled-components';

import normalize from './normalize';

export const GlobalStyles = createGlobalStyle`
${normalize}
body {
    background: ${({ theme }) => theme.colors.grey_background};
    color: ${({ theme }) => theme.colors.white};
    font-family: 'Lexend', sans-serif;
    box-sizing: border-box;
    overflow-x: hidden;
    a:link{
      text-decoration: none;
    }
  }
`;
