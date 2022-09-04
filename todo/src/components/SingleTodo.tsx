import React, { useState, useRef, useEffect} from 'react'
import { Todo } from './Todo'
import { GrEdit } from "react-icons/gr"
import { AiTwotoneDelete } from "react-icons/ai"
import { MdDone } from "react-icons/md"

interface props {
    todo: Todo;
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({todo, setTodos} : props) => {

    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [edit, setEdit] = useState<string>(todo.todo);

    const handleDone = (id:number) => {
        setTodos((prev) => prev.map((todo) => todo.id === id ? {...todo, isDone: !todo.isDone} : todo));
    }

    const handleRemove = (id:number) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
    }

    const handleEdit = (e: React.FormEvent ,id: number) => {
        e.preventDefault();

        setTodos((prev) => prev.map((todo) => todo.id === id ? {...todo, todo: edit} : todo));
        setIsEdit(false);
    }

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus(); //at editing, the focus will be on the edit box
    }, [isEdit]);

  return (
    <form className='singleTodo' onSubmit={(e) => handleEdit(e, todo.id)}>
        {isEdit ? (<input className='editBox' ref={inputRef} value={edit} onChange={(e) => setEdit(e.target.value)}/>) : (todo.isDone ? (<s>{todo.todo}</s>) : <span>{todo.todo}</span>)}

        <span className='edit' onClick={ () => {
            if (!isEdit && !todo.isDone) {
                setIsEdit(!isEdit);
            }
        }
        }>
           <GrEdit/>
        </span>
        <span className='rem' onClick={() => handleRemove(todo.id)}>
           <AiTwotoneDelete/>
        </span>
        <span className='done' onClick={() => handleDone(todo.id)}>
           <MdDone/>
        </span>
    </form>
  )
}

export default SingleTodo