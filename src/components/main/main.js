import React, {Component} from 'react';
import './main.css';

export default class Main extends Component {
  render() {
    const {visibility, registerClick} = this.props;
    if (visibility) {
      return null;
    }

    return (
      <div className="main">
        <div className="box">
          <div>СТАНОВИСЬ ПРЕДСТАВИТЕЛЕМ И ПОЛУЧИ СКИДКУ</div>
          <div className="box_headline"><span className="box_headline--big">30%</span><br/>НА ПЕРВЫЙ ЗАКАЗ</div>
          <button className="box__btn btn btn btn-dark" onClick={registerClick}>Зарегистрироваться
          </button>
        </div>
      </div>
    )
  }
}

