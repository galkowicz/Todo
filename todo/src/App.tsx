import React, { useState } from 'react';
import './App.scss';
import DisplayTodos from './components/DisplayTodos';
import FormInput from './components/FormInput';
import { Todo } from './components/Todo';

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  
  const handleTodo = (e: React.FormEvent) => {
    e.preventDefault(); //no refresh page after submit
    if (todo) {
      setTodos([...todos, {id: Date.now(), todo, isDone: false}]);
      setTodo("");
    }
  }


  return (
    <div className="App">
      <h1 className='heading'>Tasks List!</h1>
      <FormInput handleTodo={handleTodo} todo={todo} setTodo={setTodo}/> 
      <DisplayTodos todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
