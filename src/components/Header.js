import logo from '../images/logo.svg';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import React from 'react';
// import * as auth from '../utils/auth.js';

function Header({loggedIn, email}) {


const location = useLocation();
// console.log(location);



    return(
        <header className="header">
            <img className="logo" src={logo} alt="логотип mesto" />

            {location.pathname === '/sign-up' ? (
            <Link className='header__link' to="/sign-in">Войти</Link>) :
            loggedIn ? (
                <div>
                    <p className='header__email'>{ email }</p>
                    <Link className='header__link' to="/">Выйти</Link>
                </div>
            ) : (
                    <Link className='header__link' to="/sign-up">Зарегистрироваться</Link>
            )
            }
        </header>
    )
}

export default Header;