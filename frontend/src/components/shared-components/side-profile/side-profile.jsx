import style from './side-profile.module.css';
import logo from '../../../assets/galaxieedLogo.jpg'
import GitHubLogo from '@mui/icons-material/GitHub';
import FacebookLogo from '@mui/icons-material/Facebook';
import LinkedInLogo from '@mui/icons-material/LinkedIn';

export default function SideProfile() {
    return (
        <aside className={`${style.sideProfile}`}>
            <img src={logo} alt="logo" height={150} />
            <h2>Charles L. Pillos</h2>
            <h5><i>Galaxieed</i></h5>
            <h3>Fullstack Developer</h3>
            <hr/>
            <button>DOWNLOAD CV</button>
            <hr/>
            <div className={`${style.socials}`}>
                <GitHubLogo />
                <FacebookLogo />
                <LinkedInLogo />
            </div>
        </aside>
    )
}