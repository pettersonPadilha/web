import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

  :root{
        --white: #FFF
        --black: #000

        --dark-900: #101026;
        --dark-700: #1d1d2e;

        --gray-100: #8a8a8a;
        --green-900: #3fffa3;
        --red-900: #ff3f4b;
    }

    button{
        cursor: pointer;
    }

    a{
        color: inherit;
        text-decoration: none;
    }

    body {
        background: var(--dark-700);
    }

    body,input,textarea,select,button{
        font-family: "Roboto", sans-serif;
        font-weight: 400;
    }
    
    @media(max-width:720px) {
        html {
            font-size: 87.5%; //14px
        }
    }

    @media(max-width:1080px) {
        html {
            font-size: 93.75%; //15px
        }
    }

`