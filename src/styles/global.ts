import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #f2f0f5;
        --red : #E52E4D;
        --green: #33cc95;
        --blue: #5429cc;
        --blue-light: #6933ff;
        --text-title: #363f5f;
        --text-body: #969CB3;
        --shape: #ffffff;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

    }

    // font-size: 16px (Desktop)

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%; //15px (Mobile)
         }

         @media (max-width: 720px) {
             font-size: 87.5%; //14px (Mobile)
         }
    }

    //REM = 1rem = 16px

    body {
        background-color:  var(--background);
        -webkit-font-smoothing: antialiased
    }

    body, input, button, textarea {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1,h2,h3,h1,h5,h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;
