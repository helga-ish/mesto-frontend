export default function PageWithForm({name, title, children, buttonTitle, onSubmit}) {

    return (
        <section className={name} id={name}>
            <div className={`${name}__container`}>
                <form className="form" name={`${name}Form`} onSubmit={ onSubmit }>
                    <h2 className="form__heading form__heading_type_white">{`${title}`}</h2>
                    <fieldset className="form__fields">
                        <input
                        type='email'
                        className="form__field form__field_type_email form__field_type_white" 
                        id="email-input" 
                        name="inputEmail" 
                        placeholder="Email" 
                        minLength="8" 
                        required />

                        <span className='form__field-error email-input-error'></span>

                        <input
                        type='password'
                        className="form__field form__field_type_password form__field_type_white" 
                        id="password-input" 
                        name="inputPassword"
                        minLength="6" 
                        maxLength="16" 
                        placeholder="Пароль"  />

                        <span className='form__field-error password-input-error'></span>

                    </fieldset>
                    <button type="submit" className="form-button form-button_type_white">{ buttonTitle }</button>
                    {children}
                </form>
            </div>
        </section>
    )
}
