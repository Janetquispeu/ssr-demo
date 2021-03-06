import * as React from 'react';
import { hydrate } from 'react-dom';
// import thunk from 'redux-thunk';
import { Provider }  from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import App from './components/app';

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__

// Create Redux store with initial state
const store = createStore(reducer, preloadedState)


hydrate(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)