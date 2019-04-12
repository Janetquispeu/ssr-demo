// Se llama a los tipos de acciones

let nextTodoId = 0;
let number = 0;

export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

export const incrementNumber = () => {
  return {
    type: 'INCREMENT',
    number: number++
  }
}

export const decrementNumber = () => {
  return {
    type: 'DECREMENT',
    number: number--
  }
}
 
