import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// Llamamos al reducer
import reducer from './reducers';
import App from './components/app';


// import ReactDOMServer from 'react-dom/server';
// import configureStore from '../store/configureStore';

let store = createStore(reducer)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
