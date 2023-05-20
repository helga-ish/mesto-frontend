import React from "react";
import PageWithForm from "./PageWithForm";

export default function Login() {
    // const [isLoggedIn, setIsLoggedIn] = React.useState(null);

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     return onUpdateUser({
    //         name: nameUser,
    //         about: description,
    //       });
    // }

    return(
        <PageWithForm
        name = 'login'
        title = 'Вход'
        buttonTitle= 'Войти'
        // onSubmit={handleSubmit}
        />
    )
} 