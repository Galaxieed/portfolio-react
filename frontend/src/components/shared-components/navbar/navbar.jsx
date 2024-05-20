import style from './navbar.module.css';
import logo from '../../../assets/galaxieedLogo.jpg';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import PropTypes from 'prop-types';

export default function NavBar() {
    const [activeLink, setActiveLink] = useState('/');
    return (
        <header>
            <div className={`${style.navbar}`}>
                <div>
                    <img src={logo} alt="Logo" className={`${style.logoImg}`} />
                    <h3 className={`${style.logoText}`}>Galaxieed</h3>
                </div>
                <nav>
                    <ul className={`${style.navItems}`}>
                        <NavItem 
                            activeLink={activeLink}
                            setActiveLink={setActiveLink}
                            link={'/'}
                            text={'About Me'}
                        />
                        <NavItem 
                            activeLink={activeLink}
                            setActiveLink={setActiveLink}
                            link={'/projects'}
                            text={'Projects'}
                        />
                        <NavItem 
                            activeLink={activeLink}
                            setActiveLink={setActiveLink}
                            link={'/certificates'}
                            text={'Certificates'}
                        />
                        <NavItem 
                            activeLink={activeLink}
                            setActiveLink={setActiveLink}
                            link={'/contact'}
                            text={'Contact Me'}
                        />
                    </ul>
                </nav>
            </div>
        </header>
    )
}

function NavItem(props) {
    return(
        <li className={props.activeLink == props.link ? `${style.active}` : undefined} onClick={() => props.setActiveLink(props.link)}>
            <Link to={props.link}> {props.text} </Link>
        </li>
    )
}

NavItem.propTypes = {
    activeLink: PropTypes.string,
    setActiveLink: PropTypes.func,
    link: PropTypes.string,
    text: PropTypes.string
}