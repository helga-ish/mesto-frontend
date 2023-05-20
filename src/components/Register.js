import React from "react";
import PageWithForm from "./PageWithForm";
import { Link, useNavigate } from "react-router-dom";
import * as auth from '../utils/auth.js';

export default function Register() {

    const [formValue, setFormValue] = React.useState({
        email: '',
        password: '',
      })
      const navigate = useNavigate();
    
      const handleChange = (e) => {
        const {name, value} = e.target;
    
        setFormValue({
          ...formValue,
          [name]: value
        });
      }
      const handleSubmit = (e) => {
        e.preventDefault();
        if (formValue.password === formValue.confirmPassword){
          auth.register(formValue.username, formValue.password, formValue.email).then((res) => {
            navigate('/sign-in', {replace: true});
            }
          );
        }
      }

    return(
        <PageWithForm
        name = 'register'
        title = 'Регистрация'
        buttonTitle= 'Зарегистрироваться'
        onChange={handleChange}
        onSubmit={handleSubmit}
        >
            <p className="register-to-login-form">Уже зарегистрированы?<Link to='sign-in'>Войти</Link></p>
        </PageWithForm>
    )
} 