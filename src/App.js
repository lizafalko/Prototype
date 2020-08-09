import React, { Component } from 'react';
import ReactDOM from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { About } from './About.js';
import { Steps } from './Steps';

const history = createBrowserHistory();

class Navigation extends Component {
  render() {
    return (
      <BrowserRouter basename="/LookApp/" history={history}>
        <div className="wrapper app">
          <ul className="wrapper__list">
            <li className="wrapper__link"><Link className="wrapper__menu" to="/about">Выбрать товар</Link></li>
            <li className="wrapper__link"><Link className="wrapper__menu" to="/">Корзина</Link></li>
          </ul>
          <Route exact path="/about" component={About}/>
          <Route exact path="/" component={Steps}/>
        </div>
      </BrowserRouter>
    )
  }
}

export default Navigation;
