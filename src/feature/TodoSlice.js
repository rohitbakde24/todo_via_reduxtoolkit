import { createSlice, nanoid } from "@reduxjs/toolkit"


const initialState = {
    todos: [{ id: 1, text: 'first redux toolkit app' }],
};

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo: (state,action) =>{
            let newRecord = {
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(newRecord)
        },   
        removeTodo: (state, action) =>{
            let updatedData = state.todos.filter((todo)=>todo.id !== action.payload)
            state.todos = updatedData;
        },
        updateTodo: (state, action) =>{
          let updatedData = state.todos.map((todo)=>{
            if(todo.id === action.id){
                return {
                    ...todo,
                    text:action.id
                }
            }else{
                return todo
            }
          })
          state.todos = updatedData;
        }
    }
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

export default todoSlice.reducer