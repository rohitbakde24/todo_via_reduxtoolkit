import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../feature/TodoSlice';

const TodoEditor = () => {

    const [input, setInput] = useState('')
    const dispatch = useDispatch();


  return (
   <>
   
        <div className='d-flex'>
       <input value={input} onChange={(e)=>setInput(e.target.value)} placeholder='enter text...'/>
       <button onClick={()=>dispatch(addTodo(input))}>+</button>
        </div>
 
   </>
  )
}

export default TodoEditor