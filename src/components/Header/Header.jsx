import s from './Header.module.css';
import logo from '../../my_img/DlGcxdOl.jpg';





const Header = () => {
    return <header className={s.header}>
        <img src={logo}></img>
    </header>
}

export default Header;