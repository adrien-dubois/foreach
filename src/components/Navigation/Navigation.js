import React, {useState, useEffect} from 'react';
import { FaBars, FaTimes, FaUser } from 'react-icons/fa';
import { BiLogOut } from 'react-icons/bi'
import { IconContext } from 'react-icons/lib';
import { useSelector } from 'react-redux';
import { Button } from '../../GlobalStyles';
import { useLogoutUserMutation } from '../../services/appApi'
import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    NavIcon, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavItemBtn,
    NavBtnLink,
    Action
} from './Navigation.elements';
import { Link } from 'react-router-dom';

const Navigation = () => {

    /*----- NAVBAR PART -----*/
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    /*----- DROPDOWN MENU -----*/
    const [userMenu, setUserMenu] = useState(false)
    const handleMenu = () => setUserMenu(!userMenu)

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton();
    }, []);
    


    window.addEventListener('resize', showButton);

    /*----- APPLICATION PART -----*/
    const user = useSelector((state) => state.user);
    const [logoutUser] = useLogoutUserMutation()

    async function handleLogout(e){
        e.preventDefault();
        await logoutUser(user);
        // redirect to homepage
        window.location.replace('/');
    }


    return (
        <>
            <IconContext.Provider value={{ color: 'var(--white-color)' }}>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/" onClick={closeMobileMenu}>
                        <NavIcon width={50} height={50} fill="var(--white-color)"/>
                        <h1 className="text-gradient">
                            FOR <span> EACH</span>
                        </h1>
                    </NavLogo>
                    <MobileIcon onClick={handleClick} >
                        {click ? <FaTimes /> : <FaBars />}
                    </MobileIcon>
                    <NavMenu onClick={handleClick} click={click} >

                        <NavItem>
                            <NavLinks to='/'>
                                Accueil
                            </NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks to='/chat'>
                                Chat
                            </NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks to='/signup'>
                                Inscription
                            </NavLinks>
                        </NavItem>

                        {/* IF USER IS CONECTED DONT SHOW LOGIN BUTTON */}
                        {!user &&
                        <NavItemBtn>
                            {button ? (
                                <NavBtnLink to="/login">
                                    <Button primary>
                                        Connexion
                                    </Button>
                                </NavBtnLink>
                            ) : (
                                <NavBtnLink to="/login">
                                    <Button fontBig primary>
                                        Connexion
                                    </Button>
                                </NavBtnLink> 
                            )}
                        </NavItemBtn>
                        }

                        {/* USER MENU */}
                        {user &&
                        <IconContext.Provider value={{ color: 'var(--black-color)', size: '20px'}} >
                        <Action>
                            <div className="profile" onClick={handleMenu}>
                                <img src={user.picture} alt="User picture" />
                            </div>
                            <div className={userMenu ? 'menu active' : 'menu'}>
                                <h3>{user.name}</h3>
                                <ul>
                                    <li>
                                        <Link to="/update">
                                            <button>
                                                <FaUser/>Profil
                                            </button> 
                                        </Link>
                                    </li>
                                    <li>
                                        <button>
                                            <FaUser/>Autre
                                        </button> 
                                    </li>
                                    <li>
                                        <button onClick={handleLogout}>
                                            <BiLogOut/>Déconnexion
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </Action>
                        </IconContext.Provider>
                        }

                    </NavMenu>

                </NavbarContainer>
            </Nav>
            </IconContext.Provider>
        </>
    );
};

export default Navigation;