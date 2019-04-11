import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import TodoList from '../components/todoList';

const getVisibleTodos = (todos, filter) => {
  switch(filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
  }
}


// Setea el State hay dos
//  state = {
//   reducerTodos: [],
//   reducerVisibilityFilter: 'SHOW_ALL'
//  }

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.reducerTodos, state.reducerVisibilityFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    }
  }
}

const visibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default visibleTodoList;