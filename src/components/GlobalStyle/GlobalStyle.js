import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}
body {
  font-size: 16px;
  background-color: ${props => props.theme.secondary.light};
}
`;

export default GlobalStyle;