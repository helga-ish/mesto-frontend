import logo from '../images/logo.svg';
// import { Link } from 'react-router-dom';

function Header({children}) {
    return(
        <header className="header">
            <img className="logo" src={logo} alt="логотип mesto" />
            {children}
            {/* {!onRegister ? (
                <Link className='header__link' to="/sign-up">Зарегистрироваться</Link>
            ) : (
                <Link className='header__link' to="/sign-in">Войти</Link>
            )} */}
        </header>
    )
}

export default Header;