import React from "react";
import PageWithForm from "./PageWithForm";
import { Link, useNavigate } from "react-router-dom";
import * as auth from '../utils/auth.js';
import InfoTooltip from "./InfoTooltip";

export default function Register() {

    const [isInfoToolTipPopupOpen, setIsInfoToolTipPopupOpen] = React.useState(null);

    function handleInfoToolTipClick() {
        setIsInfoToolTipPopupOpen(true);
    };
    function closeInfoToolTipPopup() {
        setIsInfoToolTipPopupOpen(false);
    }

    const [isSucceed, setIsSucceed] = React.useState(false);

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
        handleInfoToolTipClick();
          auth.register(formValue.email, formValue.password).then((response) => {
                if (!response.error) {
                  setIsSucceed(true);
                  navigate('/sign-in', {replace: true});
                } else (setIsSucceed(false))
                
            })
      }

    return(
        <PageWithForm
        name = 'register'
        title = 'Регистрация'
        buttonTitle= 'Зарегистрироваться'
        onChange={handleChange}
        onSubmit={handleSubmit}
        formValueEmail={formValue.email}
        formValuePassword={formValue.password}
        >
            <p className="register-to-login">Уже зарегистрированы? <Link className="register-to-login_type_link" to='/sign-in'>Войти</Link></p>
            <InfoTooltip
            isSucceed={isSucceed}
            isOpen={isInfoToolTipPopupOpen}
            onClose={closeInfoToolTipPopup}/>
        </PageWithForm>

    )
} 