// Se llama a los rducers y se juntan con el combineReducers

import { combineReducers } from 'redux';
import reducerTodos from './reducerTodos';
import reducerVisibilityFilter from './reducerVisibilityFilter';


// Se une todos los reducers, se inicializa así
//  state = {
//   reducerTodos: [],
//   reducerVisibilityFilter: 'SHOW_ALL'
//  }

const todoApp = combineReducers({
  reducerTodos,
  reducerVisibilityFilter
});

export default todoApp;