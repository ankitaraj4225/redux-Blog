import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import PostsIndex from './components/Posts_index'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import App from './components/app';
import reducers from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reducers, composeWithDevTools(applyMiddleware(ReduxPromise)));

//const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
       <div>
          <Route path="/" component={ PostsIndex } />
       </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
