import React from "react";
import PageWithForm from "./PageWithForm";
import { useNavigate } from "react-router-dom";
import * as auth from '../utils/auth.js';

export default function Login({handleLogin}) {
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
          .then((res) => {
          handleLogin();
          navigate("/", {replace: true})
          })
          .catch(err => console.log(err));
      }
    

    return(
        <PageWithForm
        name = 'login'
        title = 'Вход'
        buttonTitle= 'Войти'
        onSubmit={handleSubmit}
        onChange={handleChange}
        formValueEmail={formValue.email}
        formValuePassword={formValue.password}
        />
    )
} 