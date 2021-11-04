import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './reducers';
import thunk from 'redux-thunk';
 
const store = createStore(reducer, applyMiddleware(thunk))

console.log("from the store:",store.getState())

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);



