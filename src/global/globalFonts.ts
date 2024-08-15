import { createGlobalStyle } from "styled-components";
import HelveticaMed from "../assets/fonts/HelveticaMed.woff2";
import HelveticaBlack from "../assets/fonts/HelveticaBlack.woff2";
import HelveticaBold from "../assets/fonts/HelveticaBold.woff2";

const GlobalFonts = createGlobalStyle`    
     @font-face {
        font-family: "helvetica";
        src: local("helveticaMed"), url(${HelveticaMed}) format('woff'); 
        font-weight: 400;
    }
    @font-face {
        font-family: "helvetica";
        src: local("helveticaBold"), url(${HelveticaBold}) format('woff'); 
        font-weight: 600;
    }
    @font-face {
        font-family: "helvetica";
        src: local("helveticaBlack"), url(${HelveticaBlack}) format('woff'); 
        font-weight: 700;
    }
   
`;

export default GlobalFonts;
