'use strict';

class SubscribeForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
    this.state = {isValid: false};
  }
  
  handleInput(event) {
    this.setState({isValid: event.target.validity.valid});
  }
  
  render() {
    const formValidClass = this.state.isValid ? 'is-valid' : 'is-error';
    return (
      <div className="subscribe__form">
        <form className={'form form--subscribe ' + formValidClass}>
          <h4 className="form-title">Подписаться:</h4>
          <div className="form-group">
            <label for="input-email" className="sr-only">Email</label>
            <input type="email" id="input-email" placeholder="Email" className="form-control" onChange={this.handleInput}/>
            <div className="form-error">Пожалуйста, проверьте корректность адреса электронной почты</div>
            <button type="submit" className="form-next" onClick={e => e.preventDefault()}>
              <i className="material-icons">keyboard_arrow_right</i>
            </button>
          </div>
        </form>
      </div>
  );
  }
};
