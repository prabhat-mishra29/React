import {createContext,useContext} from 'react'

//Create context object:---
export const Todo_context=createContext({
    //We have to create a list of todos so, we make an array of todos.
    //Here todo is a variable
    //Each todo has some id , message and completed or not1
    todos:[
        {
            id:1,
            todo:"Todo message",
            completed:false,
        }
    ],

    //just provide function without functionality.
    //Functionality is added in app.jsx file.
        addTodo:(todo)=>{},
        
        //Update takes two things todoid and value of a todo
        updateTodo:(id,todo)=>{},

        //Which todo you want to delete
        deleteTodo:(id)=>{},

        //check a todo is completed or not:---
        toggleTodo:(id)=>{}
});

//Context provider
export const Todo_provider=Todo_context.Provider

//Ek function call karte hi directly context ko use karr sakte hai.
export function useTodo(){
    return useContext(Todo_context);
}