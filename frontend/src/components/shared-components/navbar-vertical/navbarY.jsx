import style from './navbarY.module.css';
import PersonIcon from '@mui/icons-material/PersonOutlined'
import FolderIcon from '@mui/icons-material/FolderOutlined'
import BadgeIcon from '@mui/icons-material/BadgeOutlined'
import ContactIcon from '@mui/icons-material/CallOutlined'
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function NavBarY() {
    const [activeLink, setActiveLink] = useState('/');
    return (
        <nav>
            <ul className={`${style.navbarY}`}>
                <NavItems 
                    setActiveLink={setActiveLink}
                    activeLink={activeLink}
                    link={'/'}
                    icon={<PersonIcon />}
                    text={'Me'}/>
                <NavItems 
                    setActiveLink={setActiveLink}
                    activeLink={activeLink}
                    link={'/projects'}
                    icon={<FolderIcon />}
                    text={'Works'}/>
                <NavItems 
                    setActiveLink={setActiveLink}
                    activeLink={activeLink}
                    link={'/certificates'}
                    icon={<BadgeIcon />}
                    text={'Certs'}/>
                <NavItems 
                    setActiveLink={setActiveLink}
                    activeLink={activeLink}
                    link={'/contact'}
                    icon={<ContactIcon />}
                    text={'Call'}/>
            </ul>
        </nav>
    )
}

function NavItems(props) {
    return(
        <li className={props.activeLink == props.link ? `${style.active}` : undefined} onClick={() => props.setActiveLink(props.link)}>
            <Link to={props.link}>
                {props.icon}
                <h6>{props.text}</h6>
            </Link>
        </li>
    )
}

NavItems.propTypes = {
    activeLink: PropTypes.string,
    setActiveLink: PropTypes.func,
    link: PropTypes.string,
    icon: PropTypes.any,
    text: PropTypes.string
}