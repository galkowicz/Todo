import React, { useRef } from 'react'
import "./styles.scss"

interface props {
  handleTodo: (e: React.FormEvent) => void;
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}



const FormInput = ({handleTodo, todo, setTodo}: props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return( 
    <form className='inputForm' onSubmit={(e) => {
          handleTodo(e);
          inputRef.current?.blur(); //remove the focus
        }}>

        <input className='inputTxt'
          type="input"
          placeholder='Type todo task...'
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          ref={inputRef} 
        />
        <button type="submit" className='btn'>
          Go
        </button>
    </form>)
};

export default FormInput