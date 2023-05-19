import React from "react";
import PageWithForm from "./PageWithForm";

export default function Register() {

    return(
        <PageWithForm
        name = 'register'
        title = 'Регистрация'
        buttonTitle= 'Зарегистрироваться'
        >
            <h3 className="register-to-login-form">Уже зарегистрированы? Войти</h3>
        </PageWithForm>
    )
} 