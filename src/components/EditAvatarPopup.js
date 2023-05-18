import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {

    const textInput = React.useRef();
    function handleSubmit(e) {
        e.preventDefault();
      
        onUpdateAvatar({
          avatar: textInput.current.value,
        });
      }

      React.useEffect(() => {
        textInput.current.value = '';
      }, [isOpen])

    return (
        <PopupWithForm
        title = 'Обновить аватар'
        name = 'avatar-edit'
        buttonTitle = 'Сохранить'
        onSubmit = {handleSubmit}
        isOpen = {isOpen}
        onClose = {onClose}>
            <input 
            ref={textInput} 
            type="url" 
            className="form__field form__field_type_link" 
            id="avatar-link-input" 
            name="inputLinkAvatar" 
            placeholder="Ссылка" 
            required
            />
            <span className='form__field-error avatar-link-input-error'></span>
        </PopupWithForm>
    )
}
export default EditAvatarPopup;