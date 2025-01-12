import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo, updateTodo } from '../feature/TodoSlice';

const TodoList = () => {
    const dispatch = useDispatch();
    const todoList = useSelector(state => state.todos);
  return (
    <>
         <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {
                todoList?.map((todo) => (
                    <div key={todo.id} style={{marginTop:'10px', background: 'seaGreen', borderRadius: '8px', padding: '5px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ flex: 1 }}>{todo.text}</span>
                        {/* <button style={{ border: 'none',marginTop:'5px', background: 'transparent', cursor: 'pointer' }} onClick={() => dispatch(updateTodo(todo))}>U</button> */}
                        <button style={{ border: 'none',marginTop:'5px', background: 'transparent', cursor: 'pointer' }} onClick={() => dispatch(removeTodo(todo.id))}>X</button>
                    </div>
                ))
            }
        </div>
    </>
  )
}

export default TodoList