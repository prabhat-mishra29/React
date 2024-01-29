import React,{useState,useContext} from 'react'
import UserContext from '../Context/UserContext';

// Global variable main 'data' bhejenge.
    function Login() {
        const[userName,setUserName]=useState('');
        const[password,setPassword]=useState('');

        // How to set data in global variable 'UserContext'
        const{setUser}=useContext(UserContext);

        const handleSubmit=(e)=>{
            e.preventDefault()   ///By default jab value submit hoti toh value idhar udhar chala jata hai.. toh usse rokne ke liye.
            setUser({userName,password})
        }

        return ( 
            <div>
                <h2>Log in</h2>
                <input type='text' placeholder='username' value={userName} onChange={(e)=>{setUserName(e.target.value)}}/>{" "}
                <input type='text' placeholder='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        );
    }

    export default Login;

    // Suppose we fetch an API.. then we can put data coming from API into global variable 'UserContext' using 'setUser' method.