import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Container } from '../../GlobalStyles'
import { Logo } from '../SvgComponent'


export const Nav = styled.nav`
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    position: sticky;
    top: 0;
    z-index: 999;
`;

export const NavbarContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    height: 80px;

    ${Container}
`;

export const NavLogo = styled(Link)`
    color: var(--white-color);
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    font-weight: 900;
    display: flex;
    align-items: center;

    .text-gradient{
        background-color: #fff;
        background-image: radial-gradient(at 4% 36%, hsla(0,0%,100%,1) 0, transparent 53%), radial-gradient(at 100% 60%, rgb(0, 0, 0) 0, transparent 50%);
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
        transition: all .3s ease-in-out;

        &:hover{
            text-shadow: 0 0 10px #eee;
        }

        span{
            margin-left: .5rem;
            font-weight: 300;
        }
    }
    @media screen and (max-width: 440px){
        font-size: 1.4rem;

        svg{
            width: auto;
            height: 45px;
        }
    }
`;

export const NavIcon = styled(Logo)`
    margin: 0.5rem;
    width: auto;
    height: 70px;
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 960px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;

    @media screen and (max-width: 960px){
        display: flex;
        flex-direction: column;
        position: fixed;
        justify-content: flex-start;
        padding: 0.75rem;
        width: 70vw;
        height: 100vh;
        position: absolute;
        top: 80px;
        background: rgb(39, 51, 89, 0.4);
        border-radius: 0 16px 16px 0;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        border: 1px solid rgba(0, 0, 0, 0.3);
        left: ${({click}) => (click ? 0 : '-100%')};
        opacity: 1;
        transition: all 0.5s ease;
        z-index: 10;
    }
    
`;

export const NavItem = styled.li`
    height: 80px;
    border-bottom: 2px solid transparent;

    /* &:hover{
        border-bottom: 2px solid var(--blue-color);
    } */

    &::after{
        display: block;
        content: '';
        border-width: 1px;
        border-style: solid;
        border-image: var(--btn-gradient);
        transform: scaleX(0);
        transition: transform 250ms ease-in-out;
    }

    &:hover::after{
        transform: scaleX(1);
        transform-origin:  0% 50%;
    }

    @media screen and (max-width: 960px){
        width: 100%;

        &:hover{
            border: none;
        }
    }
`;

export const NavLinks = styled(Link)`
    color: var(--white-color);
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;

    @media screen and (max-width: 960px) {
        text-align: center;
        padding: 2rem;
        width: 100%;
        display: table;

        &:hover{
            color: var(--blue-color);
            transition: all .3s ease;
        }
    }
`;

export const NavItemBtn = styled.li`
    @media screen and (max-width: 960px){
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 120px;
    }
`;

export const NavBtnLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    padding: 8px 16px;
    height: 100%;
    width: 100%;
    border: none;
    outline: none;
`;

