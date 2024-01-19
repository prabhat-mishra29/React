import { useState } from "react";
import { useTodo } from "../Context";

function TodoForm() {
    //State define for individual todo.
    //Default value of todo[todo description] is empty String
    const [todo,setTodo]=useState("");

    //Add todo using AddTodo() 
    const {addTodo}=useTodo();

    const add=(e)=>{
        e.preventDefault();
        if(!todo) return;
        else{
            addTodo({todo:todo,completed:false});
        }

        //sabb karne ke badd field empty karr do.
        setTodo("")
    }

    return (
        <form className="flex" onSubmit={add}>
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo} //Wirring up with state
                onChange={(e)=>
                    setTodo(e.target.value)
                }
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;