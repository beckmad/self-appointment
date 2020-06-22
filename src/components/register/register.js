import React, {Component} from 'react';
import './register.css'

class Register extends Component {
  render() {
    if (!this.props.visibility) return null;

    return (
      <div className="register">
        <span>Мы подобрали для Вас одного из лучших Бизнес-Партнеров Avon. Нажмите кнопку <br/>
           <span className='register__txt'>Зарегистрироваться</span> внизу экрана, чтобы вступить в команду – это займет 10 минут <br/>
        <button className="register__btn" onClick={this.props.updateLink}>Попробовать еще раз</button>
      </span>
      </div>
    )
  }
}

export default Register;