import React from "react";
import PageWithForm from "./PageWithForm";
import { useNavigate } from "react-router-dom";
import * as auth from '../utils/auth.js';
import InfoTooltip from "./InfoTooltip";


export default function Login({handleLogin, getEmail, isInfoToolTipPopupOpen, isSucceed, handleInfoToolTipClick, closeInfoToolTipPopup, handleNotSucceed}) {

    const [formValue, setFormValue] = React.useState({
        email: '',
        password: ''
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
        if (!formValue.email || !formValue.password){
          return;
        }
        auth.authorize(formValue.email, formValue.password)
          .then((data) => {
            if(data.token) {
              handleLogin();
              navigate("/", {replace: true})
              getEmail();
            } else if (data.message) {
              handleInfoToolTipClick();
              handleNotSucceed();
            }
          })
          .catch(err => console.log(err));
      }
    

    return(
      <div>
        <PageWithForm
        name = 'login'
        title = 'Вход'
        buttonTitle= 'Войти'
        onSubmit={handleSubmit}
        onChange={handleChange}
        formValueEmail={formValue.email}
        formValuePassword={formValue.password}
        >
            <InfoTooltip
            isSucceed={isSucceed}
            isOpen={isInfoToolTipPopupOpen}
            onClose={closeInfoToolTipPopup}
            />
        </PageWithForm>
        </div>
    )
} 