import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
// using an ES6 transpiler, like babel
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

import App from './components/app';
import VideoApp from './components/video/VideoApp';
import BookApp from './components/books/BookApp';
import WeatherApp from './components/weather/WeatherApp';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history = {browserHistory}>
          <Route path = "/" component = {App}>
              <IndexRoute component = {VideoApp} />
              <Route path = "video" component = {VideoApp} />
              <Route path = "book" component = {BookApp} />
              <Route path = "weather" component = {WeatherApp} />
          </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
