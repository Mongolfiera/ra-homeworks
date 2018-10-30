'use strict';

const AuthForm = ({onAuth}) => {
  const getFormData = (event) => {
    event.preventDefault();
    const form = event.target;
    const data = {
          name: nameField.value,
          email: emailField.value,
          password: passwordField.value,
    }
    typeof onAuth === 'function' ? onAuth(data) : null;
  }
  
  const validateData = event => {
    if (event.target.type === 'password') {
      event.target.value = event.target.value.replace(/[^\w]/g, '');
    }
    if (event.target.type === 'email') {
      event.target.value = event.target.value.replace(/[^\w@.-]/g, '');
    }
  }
  
  return (
    <form className="ModalForm" action="/404/auth/" method="POST" onSubmit={getFormData}>
      <div className="Input">
        <input required type="text" placeholder="Имя" ref={element => nameField = element}/>
        <label></label>
      </div>
      <div className="Input">
        <input type="email" placeholder="Электронная почта" ref={element => emailField = element} onChange={validateData} />
        <label></label>
      </div>
      <div className="Input">
        <input required type="password" placeholder="Пароль" ref={element => passwordField = element} onChange={validateData} />
        <label></label>
      </div>
      <button type="submit">
        <span>Войти</span>
        <i className="fa fa-fw fa-chevron-right"></i>
      </button>
    </form>
  );
}
