import React from "react";
import PageWithForm from "./PageWithForm";
import { Link, useNavigate } from "react-router-dom";
import * as auth from '../utils/auth.js';
import InfoTooltip from "./InfoTooltip";

export default function Register() {

    const [isInfoToolTipPopupOpen, setIsInfoToolTipPopupOpen] = React.useState(false);

    const navigate = useNavigate();

    function handleInfoToolTipClick() {
        setIsInfoToolTipPopupOpen(true);
    };
    function closeInfoToolTipPopup() {
        setIsInfoToolTipPopupOpen(false);
    }

    function onCloseAndNavigate() {
      setIsInfoToolTipPopupOpen(false);
      navigate('/sign-in', {replace: true});
    }

    const [isSucceed, setIsSucceed] = React.useState(null);
    
    const [formValue, setFormValue] = React.useState({
        email: '',
        password: '',
      })

    
      const handleChange = (e) => {
        const {name, value} = e.target;
    
        setFormValue({
          ...formValue,
          [name]: value
        });
      }

      const handleSubmit = (e) => {
        e.preventDefault();
          auth.register(formValue.email, formValue.password).then((res) => {
                if (res.data) {
                  handleInfoToolTipClick();
                  setIsSucceed(true);
                } else if (res.error) {
                  setIsSucceed(false);
                  handleInfoToolTipClick();
                }
                
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
            onClose={closeInfoToolTipPopup}
            onCloseAndNavigate={onCloseAndNavigate}/>
        </PageWithForm>

    )
} 