import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;600&display=swap');

    html {
        box-sizing: border-box; 
    }

    *, *::after, *::before{
        box-sizing: inherit;
    }

    body{
        font-family: 'Poppins', sans-serif;
        margin: 0; 
        padding: 0;
    }

     a, button{
        font-family: 'Poppins', sans-serif;
    }
`;
