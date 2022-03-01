import './Header.css';
import logoAQ from '../../images/logoAQ.png';
import linea1 from '../../images/linea1.png';

const Header = () => {
    return (
        <div className='header'>
            <img src={logoAQ} alt="logo" className='logo' />
            <img src={linea1} className='line' />
            <span className='label'>Test fe</span>
        </div>
    )
}

export default Header;