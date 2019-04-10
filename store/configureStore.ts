import { createStore } from 'redux';
// import thunk from 'redux-thunk';

const example = (state = [], action) => {
  switch (action.type) {
    case 'ADD':
      return state.concat([action.text]);
    default: 
      return state;
  }
}

export default () => {
  const store = createStore(example, ['Use redux']);
  return store;
}