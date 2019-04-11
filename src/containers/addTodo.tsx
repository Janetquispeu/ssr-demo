import * as React from  'react'
import { connect } from 'react-redux';
import { addTodo } from '../actions'



let AddTodo = ({dispatch}) => {
  let input;
  return (
    <div>
      <form 
        onSubmit= {e=> {
          e.preventDefault()
          if(!input.value.trim()) {
            return 
          }
          dispatch(addTodo(input.value))
          input.value=''
        }} >
        <input
          ref={node => {
            input = node
          }}
        />
        <button type="submit">Añadir Tarea</button>
      </form>
    </div>
  )
}
// No Pasa props por el connect al componente AddTodo
const TodoApp = connect()(AddTodo)

export default TodoApp;