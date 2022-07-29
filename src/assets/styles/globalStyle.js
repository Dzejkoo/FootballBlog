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
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        margin: 0; 
        padding: 0;
        background-color: ${({ theme }) => theme.colors.backgroundColor};
    }

     a, button{
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    }
`;
