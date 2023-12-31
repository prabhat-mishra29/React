import { useState } from 'react';
import './style.css';

//"Create a Counter APP"
//"Hooks" allow us to "hook" into React features such as state and lifecycle methods.
//Read in W3Schools

function Hooks(){
/*
    >The React "useState" Hook allows us to track state in a function component.
    >State generally refers to data or properties that need to be tracking in an application.
    >useState accepts an initial state and returns two values as an array:
        1.The current state.
        2.A function that updates the state.
*/
    //let Counter_value=5;
    
    let [Counter_value,setCounter_value]=useState(5);  // "5" is default value

    function addValue(){
    /*
        Counter_value++;
        console.log(Counter_value);  //changes in counter_value but does not change in UI
    */

        //Assginment part:--
        if(Counter_value==100){
            alert("Number exceed the range i.e over 100");
            console.log("Number exceed the range i.e over 100");
            setCounter_value(5); //default
            return;
        }

        Counter_value++;
        setCounter_value(Counter_value);// jahan pai Counter_value lagg hai uss element main jake change karo
        console.log(Counter_value);
    }

    function removeValue(){
        /*
        Counter_value--;
        console.log(Counter_value);  //changes in counter_value but does not change in UI
    */
        //Assginment part:--
        if(Counter_value==0){
            alert("Number exceed the range i.e below 0");
            console.log("Number exceed the range i.e below 0");
            setCounter_value(5); //default
            return;
        }
        
        Counter_value--;
        setCounter_value(Counter_value);// jahan pai Counter_value lagg hai uss element main jake change karo
        console.log(Counter_value);
    }

    return(
        <div className="counter_app">
            <h1>Chai aur react</h1>
            <h2>Current value:- {Counter_value}</h2>
            <button className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-xl p-2 mb-3 text-center" onClick={addValue}>Add value</button>
            <button className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-xl p-2 mb-3 text-center" onClick={removeValue}>remove value</button>

            {/* Assignment:-- value ranges from 0 to 100 */}
        </div>
    );
}

export default Hooks;