// Se llama a los rducers y se juntan con el combineReducers

import { combineReducers } from 'redux';
import reducerTodos from './reducerTodos';
import reducerVisibilityFilter from './reducerVisibilityFilter';
import reducerState from './reducerCount';


// Se une todos los reducers, se inicializa así
//  state = {
//   reducerTodos: [],
//   reducerVisibilityFilter: 'SHOW_ALL'
//  }

const reducer = combineReducers({
  reducerTodos,
  reducerVisibilityFilter,
  reducerCount: reducerState
});

export default reducer;