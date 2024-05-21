import style from './header.module.css';
import logo from '../../../assets/galaxieedLogo.jpg';

export default function Header() {
    return (
        <header className={`${style.header}`}>
            <img src={logo} alt="Logo" className={`${style.logoImg}`} />
            <h3 className={`${style.logoText}`}>GALAXIEED&apos;s PORTFOLIO</h3>
        </header>
    )
}