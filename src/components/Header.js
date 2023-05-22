import logo from '../images/logo.svg';
import { Link, useLocation } from 'react-router-dom';
import React from 'react';

function Header({loggedIn, email, onClick}) {


const location = useLocation();



    return(
        <header className="header">
            <img className="logo" src={logo} alt="логотип mesto" />

            {location.pathname === '/sign-up' ? (
            <Link className='header__link' to="/sign-in">Войти</Link>) :
            loggedIn ? (
                <div>
                    <p className='header__email'>{ email }</p>
                    <button className='header__link header__link_type_signout' onClick={onClick}>Выйти</button>
                </div>
            ) : (
                    <Link className='header__link' to="/sign-up">Зарегистрироваться</Link>
            )
            }
        </header>
    )
}

export default Header;