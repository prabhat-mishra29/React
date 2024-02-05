//Two things we need to import i.e 'createSlice' and 'nanoid'.
//'nanoid' will generate unique id.

import {createSlice,nanoid} from '@reduxjs/toolkit';

//1st thing that we want in 'Store' is initial state.It can be anything like array,object...

const initialState={
    todos:[{
        id:1, text:"Hello world"
    }]
}


export const todoSlice=createSlice({
    //takes object
    //Every 'Slice' has a name,intial state and reducers.
    name:"todo",
    initialState:initialState,
    reducers:{
        //takes object of properties and function
        //In context Api we just declar functions,but in reducers we declar a function as well as we define that function.
        //when we perform functions we have to access two things "state" and "action".
        //'state' takes the values that are present in current initialState.[like Previous value]
        //'action':- while performing functions we need some values as a parameter i.e store in 'action'.like 'text','id' etc..
        //Note:--use reference of method instead of call.

        addTodo:(state,action)=>{
            //methods create a todo.
            const todo={
                id: nanoid(),
                text:action.payload,
                //payload is it self an object.
                //here parameter:text [stored in action]
            }

            //in context Api pehle hmme state se sare ke sare array nikal na padta , usse spread karna padta ta ki value kahi koo na jaye, uske badd add karta.
            //But in redux 'state' is preserved.
            
            //push in state
            state.todos.push(todo);
            //state object main 'todos' array main push kardo
        },

        removeTodo:(state,action)=>{
            //remove karne ke liye action main hamme ek id bheja gaya hi hoga.
            state.todos=state.todos.filter( (todo)=>(
                // state main jo todo hai   [each todo]
                todo.id!==action.payload
            ) )
        },

        updateTodo:(state,action)=>{
            //Two parameters passed in 'action' , one is 'id' and second is 'text'.
            // we have to find which 'id' todo we want to edit and show it on our UI.
            state.todos.map( (todo)=>(
                // each todo in todos      comparing id of each todo 
                todo.id===action.payload.id ? todo.text=action.payload.text : todo
            ) )  
        }
    }
});

//actual way to export reducers:--
//1st export individual functionality :-
export const {addTodo,removeTodo,updateTodo}=todoSlice.actions;

//2nd 'store' want every reducers
export default todoSlice.reducer;