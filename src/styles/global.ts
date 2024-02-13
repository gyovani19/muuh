import { createGlobalStyle } from 'styled-components'
import Bkg1 from '../assets/background-1.png';
import Bkg2 from '../assets/background-2.png';

const globalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

   

    html, body, #root {
        height: 100%;
    }

    body{
        background-color: #F8FDFF;
        font-family: 'Poppins', sans-serif;
        background: url(${Bkg1}) no-repeat 790px, url(${Bkg2}) no-repeat 680px;
        background-size: cover;
    }

    button{
        background-color: transparent;
        border: none;
        outline: none;   
        font-family: 'Poppins', sans-serif;
        cursor: pointer;
    }

    a{
        text-decoration: none;
        outline: none;
    }

`;
export default globalStyle;