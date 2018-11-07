import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 *{
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   outline: 0;
 }

 body {
   font-family: Helvetica, Arial, sans-serif;
   text-rendering: optimizeLegibility !important;
   -webkit-font-smoothing: antialiased !important;
   background: ${props => props.background};
 }

 div .App {
   display: flex;
   flex-direction: row;
 }

 section {
  background: ${props => props.foreground};
  color: ${props => props.primaryColor};
  margin: 20px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.2);
 }
`;

export default GlobalStyle;
