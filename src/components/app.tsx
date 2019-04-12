import * as React from 'react';
import Footer from './footer';
import TodoApp from '../containers/addTodo';
import VisibleTodoList from '../containers/visibleTodoList';
import CountNumber from './count';

const App = () => {
  return (
    <div>
      <TodoApp/>
      <VisibleTodoList/>
      <Footer/>
      <CountNumber/>
    </div>
  )
};

export default App;