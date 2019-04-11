import * as React from 'react';
import Footer from './footer';
import TodoApp from '../containers/addTodo';
import VisibleTodoList from '../containers/visibleTodoList';

const App = () => {
  return (
    <div>
      <TodoApp/>
      <VisibleTodoList/>
      <Footer/>
    </div>
  )
};

export default App;