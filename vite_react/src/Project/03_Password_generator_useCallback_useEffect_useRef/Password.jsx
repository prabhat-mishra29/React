import { useState,useCallback,useEffect,useRef} from 'react'; 
import './style.css';

function Password() {

    {/* functionality that will change the UI using useState */}
        {/* functionality for length */}
        const[length,setLength]=useState(8);
        {/* functionality for Numbers checked */}
        const[numberAllowed,setNumberAllowed]=useState(false);
        {/* functionality for Characters checked */}
        const[characterAllowed,setCharacterAllowed]=useState(false);
        {/* functionality for inputfilled which will generate password */}
        const[password,setPassword]=useState("");


    // generate a function of password generator:--
        //When we disrupt 'length' field, it will call password generator.
        //when you are clicking 'number' checkbox,it will call password generator. 
        //when you are clicking 'character' checkbox,it will call password generator. 
        //Did we call password generation again and again?
        //We have to make a "optimize function" of password_generator(). 
        //"1. useCallback":--
            //The React useCallback Hook returns a memoized callback function.
            //Think of memoization as caching a value so that it does not need to be recalculated.
            //useCallback(fn, dependencies)
                //Function of password generator
                //dependencies:--- parameter when it changes , it will affect the password generator(). It is an array.
     
                
    { /*const Password_generator=()=>{
            We can not make 'Password_generator' like this way.
            It will give us an error of "too many re-renders".
        }
    */}


        const password_generator=useCallback(()=>{
            let pass=""; //At 1st it is empty
            let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"; //String data from which password is generated

            if(numberAllowed) str+="0123456789"
            if(characterAllowed) str+="!@#$%^&*()-_=+`?<>.,':;/{}[]|"

            //'length' represents 'useState' length.
            //if 'length' is 12.
            for(let i=1;i<=length;i++){ //loop for find 12 random char in string
                let index=Math.floor(Math.random() * str.length); // 0 se str.length-1 ke bich main koi ek index do
                pass+=str.charAt(index);
            }

            setPassword(pass); //reflect in input field
        },[length,numberAllowed,characterAllowed,setPassword]);
        // Why 'setPassword' is used?
        // It is optional.
        // For memoization concept , we provide a function which sets the password in input field. 


    //when you are calling a method directly , it will give you an error.
        //password_generator()


    //so we use " 2. useEffect" hook:--
        //The useEffect Hook allows you to perform side effects in your components.
        //Some examples of side effects are: fetching data, directly updating the DOM, and timers.
        // useEffect accepts two arguments. The second argument is optional.
        // useEffect(<function>, <dependency>)
        useEffect(()=>{password_generator()},[length,numberAllowed,characterAllowed,password_generator]);
            //means:- length ko cheda to passwor_generator ko call karo , numberAllowed ko cheda to passwor_generator ko call karo , charAllowed ko cheda to passwor_generator ko call karo , ya phir khali passwor_generator ko call karo!

    /*
        //Note:--
            ->Basically "useCallback" is used for memoization and to make a optimized function.
            ->'useCallback' is not responsible for calling a function. It is responsible for memoization concept.
            -> Agar length main kuch change hua toh cache mai rakho , numbers main kuch change hua hai usko v cache main rakho , character main kuch change hua hai usko v cache main rakho.

            ->"useEffect" is used if any any change happen call function.

            ->[But you can do this only using "useEffect"]
    */

    
    //Jabb copy button click ho clipbord pai passwor-text copy ho0 but kesse kare?
    //And Hmme kese malumm ke button and input tag apass main link hai ?
        
        //"3. useRef" hook:--
            //kissi v cheeze ka reference lena hai toh useRef ka use karte hain.
            //It is used to modify user effect.
        const password_ref=useRef(null); //default value
        
        //Password text se ref leke ek function karo joo button click karne parr copy kare

    return (
        <>
            <div className='w-full max-w-md shadow-md rounded-lg px-4 py-3 my-8 mx-auto text-orange-500 bg-gray-600'>

                <h1 className="text-white text-2xl text-center mb-3">Password Generator</h1>


                <div className='flex shadow rounded-lg overflow-hidden mb-4'>
                    <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='Password' readOnly  ref={password_ref}/> 
                    <button className='outline-none bg-blue-700 text-white px-3 py-0.5'  
                    onClick={()=>{ 
                        //using useRef we can select how many letters we want to select and we can define it's range also.
                        password_ref.current?.select();
                        password_ref.current?.setSelectionRange(0,50)
                        window.navigator.clipboard.writeText(password)} 
                        } >Copy</button>
                </div>


                <div className='flex text-sm gap-x-5'>
                    <div className='flex items-center gap-x-2'>
                        <input type="range" min={6} max={50} value={length} className='cursor-pointer outline-none' onChange={(e)=>{setLength(e.target.value)}}/>
                        <label>Length : [{length}]</label>
                    </div>

                    <div className='flex items-center gap-x-2'>
                        <input type="checkbox" defaultValue={numberAllowed} id='numberInput'onChange={ ()=>{ setNumberAllowed((prev)=>(!prev)) } }/> {/* change previous value */}
                        <label htmlFor="numberInput">Numbers</label>

                        <input type="checkbox" defaultValue={characterAllowed} id='charInput' onChange={ ()=>{ setCharacterAllowed(prev=>!prev) } } />
                        <label htmlFor="charInput">Character</label>
                    </div>
                </div>

            </div>
        </>
     );
}

export default Password;