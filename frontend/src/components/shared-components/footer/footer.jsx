import style from './footer.module.css';
import Copyright from '@mui/icons-material/CopyrightOutlined'

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            <div className={`${style.footer}`}>
                <h4>Galaxieed</h4>&nbsp;
                <Copyright/>&nbsp;
                <h4>{currentYear}</h4>
            </div>
        </footer>
    )
}