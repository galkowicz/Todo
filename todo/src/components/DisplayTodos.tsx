import React from 'react'
import SingleTodo from './SingleTodo';
import "./styles.scss"
import { Todo } from './Todo';

interface props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}


const DisplayTodos = ({todos, setTodos}: props) => {
  return (
    <div className='displayTodos'>
        {todos.map((todo) => (
            <SingleTodo
                todo={todo}
                key={todo.id}
                setTodos={setTodos}
            />
        ))}
    </div>
  )
}

export default DisplayTodos