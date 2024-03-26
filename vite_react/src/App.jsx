//                                           [<---------- UNDO COMMENTS AND READ IT ACCORDINGLY ------------>]


// import Basic from './Basic/Basic';

    // Basic:--
        // //Components returns a function of jsx
        // //so can we create function in this file and use it? 
        // function Myapp(){
        //   return(
        //     <>
        //       <p>how are you?</p>
        //     </>
        //   );
        // }

        // function App() {
        //   return (
        //     <>
        //       <h1>react with vite</h1> {/* It will show you a noraml paragraph beacuse we add tailwind in this project! */}
        //       <Myapp></Myapp>
        //       <Basic></Basic>
        //     </>
        //   );
        // }



// import Card from './Basic/Card';

    // Props[cards]:---
        // function App() {
        //   //Can we pass array to a props?
        //   let arr=[1,2,3];

        //   //Can we pass object to a props?
        //   let obj={
        //     name:'chai aur react',
        //     desc:'react hai jii',
        //   }

        //   return (
        //     <div className="mx-auto my-0 flex flex-col justify-center items-center">
                
        //       {/* Props:-- 
        //             >properties*/}
        //       {/* we want to change ui in different card like UI,name,des etc */}

        //       {/* <Card username="Prabhat" object={obj} array={arr}></Card> */}

        //       <Card username="Prabhat" btnText="Click me"></Card>  
        //       <Card username="Dipu"></Card>  

        //     </div>
        //   );
        // }


    
// import Hooks from './Project/01_Counter_app_hooks/Hooks';

//     //Counter_app[Hooks]:---
//         function App() {
//           return (
//               <Hooks></Hooks>
//           )
//         }



// import Color from './Project/02_Bg_changer_useState/Color';

//     //Bg_changer:---
//         function App() {
//           return (
//               <Color/>
//           );
//         }



// //Password_generator:---

//     import Password from './Project/03_Password_generator_useCallback_useEffect_useRef/Password';

//         function App() {
//           return (
//               <Password />
//           );
//         }



// // Currency_changer:---

//     import Currency from './Project/04_Currency_changer_custom_hook/Currency';

//         function App() {
//             return (
//                 <Currency/>
//             );
//         }



// React_router:------
    //Create React App doesn't include page routing.React Router is the most popular solution.
    //React Router is a popular library for handling navigation in React applications. It enables developers to create single-page applications (SPAs) where the content is dynamically loaded and updated without requiring a full page refresh.
    //In case of React_router we do not need app.jsx we can simply manipulate in main.jsx. So check out in main.jsx.
    //Learn this in 'React Route' website.

 
 
// Context Api:--- 

    // Basic context API:----
        // > Purely based on 'react'.
        // > The Context API is a powerful tool that can be used to simplify the state management in your React applications.
        // > It is especially useful for sharing data between deeply nested components, and it can also be used to manage state that is shared between multiple components.

        // > To use the Context API, you first need to create a context object. This can be done using the "React.createContext()" function. 
        // > Once you have created a context object, you can then provide it to any component in your tree using the Provider component.
        // > Any component that is a descendant of the Provider component will be able to access the context object.

        // To access the context object in a component, you can use the useContext() function. The useContext() function takes the context object as an argument and returns the current value of the context.
        // You can have multiple Context in your project.
/*
        import Login from "./Project/06_Context_API/Basic_context_API/Components/Login";
        import Profile from "./Project/06_Context_API/Basic_context_API/Components/Profile";
        import UserContextProvider from "./Project/06_Context_API/Basic_context_API/Context/UserContextProvider";

            function App() {
                return (
                    <UserContextProvider>
                        <h1>React with context API</h1>
                        <Login/>
                        <Profile/>
                    </UserContextProvider>
                );
            }

        // Suppose we fetch an API in 'app.jsx'.. then we can put data coming from API into global variable 'UserContext' using 'setUser' method. just like we did in login component.
*/

    // // Theme switcher :----
    //     import { useEffect, useState } from "react";
    //     import Card from "./Project/06_Context_API/Theme_switcher/Components/Card";
    //     import Themebtn from "./Project/06_Context_API/Theme_switcher/Components/Themebtn";
    //     import {ThemeProvider}  from "./Project/06_Context_API/Theme_switcher/Context/Theme";

    //         function App() {

    //             const [themeMode,SetThemeMode]=useState("light");  // set by-default value of themeMode is "light"

    //             //Define methods "darkTheme" and "lightTheme" that are used in 'ThemeProvider'.
    //             //value apne app methods main chala jayega..
    //             const lightTheme=()=>{
    //                 SetThemeMode("light");
    //             }
    //             const darkTheme=()=>{
    //                 SetThemeMode("dark");
    //             }

    //             // Actual change in a theme.
    //             useEffect(()=>{
    //                 document.querySelector('html').classList.remove("light","dark");
    //                 document.querySelector('html').classList.add(themeMode);
    //             },[themeMode])


    //             /*
    //                 //Very imp:--
    //                     -> Put darkMode:"class", in 'tailwind.config.js'
    //             */


    //             return ( 
    //                 //Sirf ThemeProvider dene se value access nahi hoga.'value' dena hoga.
    //             <ThemeProvider value={{themeMode,darkTheme,lightTheme}}>
    //                 <div className="flex flex-wrap min-h-screen items-center">
    //                     <div className="w-full">
    //                         <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
    //                             {/* Theme button */}
    //                             <Themebtn/>
    //                         </div>

    //                         <div className="w-full max-w-sm mx-auto">
    //                             {/* Card */}
    //                             <Card/>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </ThemeProvider>
    //             );
    //         }


    // // Todo list :----
    //     import { useEffect, useState } from "react";
    //     import { Todo_provider } from "./Project/06_Context_API/Todo_list/Context";
    //     import TodoForm from "./Project/06_Context_API/Todo_list/Components/TodoForm";
    //     import TodoItem from "./Project/06_Context_API/Todo_list/Components/TodoItem";
    //         function App() {
    //             //Basic context functionality:-
    //                 //Todos are coming from some where and you want to store and update your UI.
    //                 //State main sare todo hain.
    //                 //By default empty-array.
    //                 const [todos,setTodos]=useState([])

    //                 const addTodo=(todo)=>{
    //                     //here 'todo' is a individual new todo.[check out in 'TodoForm.jsx']

    //                     //setTodos(todo)  --> if we do this then it will automaticaly delete all todo that are present in todos array.

    //                     setTodos( (prev)=>[
    //                         //this is called spread operator
    //                         //create a new array with previous value + current value
    //                         //[...prev,todo] --> we can't do this way, because each todo id a self object.So check out in TodoForm.jsx.
    //                         ...prev,{...todo}
    //                         ] 
    //                     ) 
    //                 }


    //                 const updateTodo=(id,todo)=>{
    //                     //here 'todo' is a individual object of new todo that is coming from todos.[check out in 'TodoItem.jsx']

    //                     // we have to find which 'id' todo we want to edit and show it on our UI.
    //                     setTodos( (prev)=>
    //                                     prev.map( (prevTodo)=>prevTodo.id===id ? todo : prevTodo ) 
    //                     )
    //                     //          each todo in todos      comparing id of each todo [ If milla toh 'todo' dalo nahi toh 'prevTodo' rehne doo]

    //                 }

    //                 const deleteTodo=(id)=>{
    //                     // original array of todos main se sirf ek id delete karke baki sare todos ko daal doo
    //                     setTodos( (prev)=>
    //                                     prev.filter( (prevTodo)=>prevTodo.id!==id )
    //                     )
    //                 }

    //                 const toggleTodo=(id)=>{
    //                     setTodos( (prev)=>
    //                         prev.map( (prevTodo)=>prevTodo.id===id ? {
    //                                 //Spread operator
    //                                 //Pehle sarii values lelo uske badd change kardo! 
    //                                 ...prevTodo, completed: !prevTodo.completed
    //                             } : prevTodo
    //                         ) 
    //                     )
    //                 }

    //             //local storage part:--
    //                 //Application jabb 1st time pai load hoo,toh konsa essa method hai jo query karr sakta hai localstorage se , taki sarri value mill sake.
    //                 useEffect( ()=>{
    //                     /*
    //                     //It will give you a String but we need in json format
    //                         localStorage.getItem("todos")
    //                         //Returns the current value associated with the given key, or null if the given key does not exist.
    //                     */

    //                     const tito=JSON.parse(localStorage.getItem("todoss"));
                        
    //                     //Agar todo jo ayaa hai usme kuch value hai yaa nahi
    //                     if(tito && tito.length>0){
    //                         setTodos(tito)
    //                     }
    //                 },[] )

    //                 //Set in local storage when todos are encounter.
    //                 useEffect(()=>{
    //                     //Sets the value of the pair identified by key to value, creating a new key/value pair if none existed for key previously.
    //                     localStorage.setItem("todoss",JSON.stringify(todos))
    //                 },[todos])

    //             return (
    //                 <Todo_provider value={{todos,addTodo,updateTodo,deleteTodo,toggleTodo}}>
    //                     <div className="bg-[#172842] min-h-screen py-8">
    //                         <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
    //                             <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
    //                             <div className="mb-4">
    //                                 {/* Todo form goes here */} 
    //                                 <TodoForm/>
    //                             </div>
    //                             <div className="flex flex-wrap gap-y-3">
    //                                 {/*Loop and Add TodoItem here */}
    //                                 {todos.map((todo)=>(
    //                                     //keys is used here for unique value of div
    //                                     <div key={todo.id} className="w-full">
    //                                         <TodoItem todo={todo}></TodoItem>
    //                                     </div>
    //                                 ))}
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </Todo_provider>
    //             );
    //         }



// // Redux Toolkit :--- 
//     import AddTodo from "./Project/07_Redux_toolkit/Components/AddTodo";
//     import Todos from "./Project/07_Redux_toolkit/Components/Todos";
//     import { Provider } from "react-redux";
//     import { store } from "./Project/07_Redux_toolkit/store";

//     //You need a provider to wrapp.
//     //We use one extra thing 'store'[global variable]
//     //here 'store' is used just like we use 'value' in context Api.

//         function App(){
//             return(
//                 <Provider store={store}>
//                     <h1>Learn redux Toolkit</h1> 
//                     <AddTodo/>
//                     <Todos/>
//                 </Provider>
//             );
//         }



// Mega project :--
    import { useEffect, useState } from "react";
    import config from "./Project/08_Mega_project/conf/config";
    import {useDispatch} from 'react-redux';
    import authServices from "./Project/08_Mega_project/Appwrite/auth";
    import { login,logout } from "./Project/08_Mega_project/store/authSlice";
    import { Header,Footer } from "./Project/08_Mega_project/Components";
    import {Outlet} from 'react-router-dom'
    
        function App(){

        /*
            //How to access environment variable in 'create react app' platform.
            console.log(process.env.REACT_APP_APPWRITE_URL);

            -> 1st way:-
                //How to access environment variable in 'Vite' platform.
                console.log(import.meta.env.VITE_APPWRITE_URL); 

            -> 2nd way:-
                //How to access environment variable in 'Vite' platform.[using 'config.js' file]
                console.log(config.appWrite_url);
        */


    //Jese hii application load hoo pucho authServices see ki user login hai ya nahi hai.Agar hai toh kuch dikhao agar nahi toh loading screen dikhao..

        //1st we will create a loading state.Iske help se hmm condition rendering karr sakte hain.
            const[loading,setLoading]=useState(true);
            //By-default 'true' means , at 1st kuch nahi hoo raha hai toh loading screen show karega.

            const dispatch=useDispatch();

            //Jese hii application load hoo "authServices" ko pucho currently user kon hai..
            useEffect(() => {
                authServices.getCurrentUser()
                    .then((userData) => {
                        //agar data hai toh dispatch karoo..
                            if (userData) {
                                dispatch(login({userData}))
                                            // " Object "
                            } else {
                                dispatch(logout())
                                //Agar data nahi mila toh state hi change karlo.
                            }
                            //Note:- State hamesha change hoga.. 
                    })
                    .finally( () => setLoading(false) ) //loading ka kaam khatam hoo chuka hai.
                }, []);

            
            //Conditional rendering:---
                if(loading){
                    //Loading icon
                    return(
                        <>
                        </>
                    );
                }
                else{
                    return(
                        <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
                            <div className='w-full block'>
                                <Header></Header>
                                    {/* Jabb v kuch alag show karna hai toh 'main' se wrapp karlo */}
                                    <main>
                                        <Outlet/>
                                    </main>
                                <Footer></Footer>
                            </div>
                        </div>
                    );
                }
        }

export default App