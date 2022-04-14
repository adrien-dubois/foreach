import { createGlobalStyle } from "styled-components";
import styled from 'styled-components'
import KronaOne from './assets/font/KronaOne-Regular.ttf'

const GlobalStyle = createGlobalStyle`

    @font-face{
        font-family: 'KronaOne';
        src: url(${KronaOne}) format('truetype');
    }

    :root{
        /*----- FONTS ------*/
        --ubuntu-font: 'Ubuntu', sans-serif;
        --poppins-font: 'Poppins', sans-serif;
        --krona-font: 'Krona One', sans-serif;
        /*----- COLORS ------*/
        --opaque-bg: #ffffff60;
        --dark-bg: #101522;
        --grey-color: #acacac;
        --white-color: #FFF;
        --white-antique: #FAECD9;
        --black-color: #1D1E16;
        --light-chocolate: #414332;
        --blue-color: #4B59F7;
        --welcome-bg: #0F0E13;
        --msg-color: #3498DB;
        /*----- GRADIENT ------*/
        --welcome-gradient: radial-gradient(at 0% 0%, hsla(253,16%,7%,1) 0, transparent 50%), radial-gradient(at 50% 0%, hsla(225,39%,30%,1) 0, transparent 50%), radial-gradient(at 100% 0%, hsla(339,49%,30%,1) 0, transparent 50%);
        --btn-gradient: linear-gradient(to right, #f43b47, #453a94) 1;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style-type: none;
        list-style: none;
        outline: none;
        border: none;
        text-decoration: none;
    }

    html {
        overscroll-behavior: contain;
        height: 100%;
        @media (prefers-reduced-motion: no-preference) {
            scroll-behavior: smooth;
        }
    }

    body{
        overflow-x: hidden;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: var(--white-color);
        color: var(--black-color);
    }

    body, input{
        font-family: var(--poppins-font);
    }

    .blue-glassmorphism {
    background: rgb(39, 51, 89, 0.4);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(0, 0, 0, 0.3);
  }

`;

export default GlobalStyle;

export const Container = styled.div`
    z-index: 1;
    width: 100%;
    max-width: 1300px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 50px;
    padding-left: 50px;

    @media screen and (max-width: 991px){
        padding-right: 30px;
        padding-left: 30px;
    }
`;

export const Button = styled.button`
    border-radius: 4px;
    font-family: var(--poppins-font);
    /* background: ${({primary}) => (primary ? 'var(--blue-color)' : '#0467FB') }; */
    background-image: linear-gradient(to right, #f43b47 0%, #453a94 100%);
    background-size: 200% auto;
    white-space: nowrap;
    padding: ${({big}) => (big ? '12px 64px' : '10px 20px' ) };
    color: #fff;
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    font-weight: 500;
    outline: none;
    border: none;
    cursor: pointer;
    box-shadow: 0 0 10px #eee;
    transition: all .3s ease-out;
    
    
    &:hover{
        background-position: right center;
        
    }
    @media screen and (max-width: 960px){
        width: 100%;
    }
`;

/*---------- THEMES ----------*/

export const lightTheme = {
    background: "var(--white-color)",
    primaryText: "var(--black-color)",
}

export const darkTheme = {
    background: "var(--dark-bg)",
    primaryText: "var(--white-color)",
}