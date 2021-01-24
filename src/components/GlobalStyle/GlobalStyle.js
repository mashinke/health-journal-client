import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}
body {
  font-size: 16px;
  background-color: ${(props) => props.theme.secondary.light};
  color: ${(props) => props.theme.primary.text};
  margin: 0 calc((100vw - 100%) / 2) 0 0;
  overflow: auto;
}
`;

export default GlobalStyle;
