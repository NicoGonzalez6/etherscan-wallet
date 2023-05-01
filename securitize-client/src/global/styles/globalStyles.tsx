import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
body{
    width: 100vw;
    min-height: 100vh;
    height: auto;
    box-sizing: border-box; 
    padding: 0;
    margin: 0;
    font-family: 'Montserrat', sans-serif;
}

h1,h2,p{
    margin: 0;
    padding: 0;
    text-decoration: none;
}
`;

export { GlobalStyles };
