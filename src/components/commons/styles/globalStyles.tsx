import { createGlobalStyle } from "styled-components";
import NotoSerifKR from "./../../../assets/font/NotoSerifKR.otf";

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'NotoSerifKR';
        src: url(${NotoSerifKR}) format("woff2");
}
  body{
        padding: 0;
        margin: 0;   
        font-family: 'NotoSerifKR';     
    };
`;

export default GlobalStyle;
