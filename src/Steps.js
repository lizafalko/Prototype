import React, { Component } from 'react';
import ReactDOM from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { Home } from './Home.js';
import { UserInfo } from './UserInfo.js';
import { UserAddress } from './UserAddress.js';
import { UserPay } from './UserPay.js';
import { Contacts } from './Contacts.js';

const history = createBrowserHistory();

export class Steps extends Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
    this.stepClick = this.stepClick.bind(this);
  }

  stepClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <BrowserRouter basename="/steps/" history={history}>
        <section className="steps">
          <div className="steps__navigation">
            <Link className={this.state.isToggleOn ? "steps__item steps__item_rotate" : "steps__item steps__item_not"} to="/" onClick={this.stepClick}>Проверка заказа</Link>
            <Link className={this.state.isToggleOn ? "steps__item steps__item_rotate" : "steps__item steps__item_not"} to="/info" onClick={this.stepClick}>Личные данные</Link>
            <Link className={this.state.isToggleOn ? "steps__item steps__item_rotate" : "steps__item steps__item_not"} to="/address" onClick={this.stepClick}>Адрес доставки</Link>
            <Link className={this.state.isToggleOn ? "steps__item steps__item_rotate" : "steps__item steps__item_not"} to="/payment" onClick={this.stepClick}>Способ оплаты</Link>
          </div>
          <form method="POST">
            <Route exact path="/" component={Home}/>
            <Route exact path="/info" component={UserInfo}/>
            <Route exact path="/address" component={UserAddress}/>
            <Route exact path="/payment" component={UserPay}/>
          </form>
        </section>
      </BrowserRouter>
    )
  }
}

export default Steps;
