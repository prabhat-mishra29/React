import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )



// //React Router:---

//     // We insert React-router to render , so we do not need for <app/>
//     // We use "RouterProvider" to do so . It means "Given a Remix Router instance, render the appropriate UI"  and it needs a prop i.e 'router'. 
//     // We can say that "RouterProvider" is kind of a wrapper.
//     //For creating a 'router' we can implement two different ways.

//       import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
//       import Layout from './Project/05_React_router/Layout.jsx'
//       import Home from './Project/05_React_router/Components/Home.jsx'
//       import About from './Project/05_React_router/Components/About.jsx'
//       import Contact from './Project/05_React_router/Components/Contact.jsx'
//       import User from './Project/05_React_router/User/User.jsx'
//       import Github from './Project/05_React_router/Components/Github.jsx'

//       //1st way:--
//         //For creating 'router' we implement a method "createBrowserRouter()".
//         //This method needs an array of objects.
//         //Each Object has 2 things 'path' and 'element'.
//         //One extra optional thing 'children'.


//         const router=createBrowserRouter([
//           {
//             path:'/',  //Top-level element
//             element:<Layout/>,
//             // Suppose the url is http://localhost:5173
//             // http://localhost:5173/ start
//             children:[
//               {
//                 path:'',
//                 element:<Home/>,
//                 // http://localhost:5173/  ->gives home page as default page.
//               },
//               {
//                 path:'about',
//                 element:<About/>,
//                 // http://localhost:5173/about  ->gives about page.
//               },
//               {
//                 path:'contact',
//                 element:<Contact/>,
//                 // http://localhost:5173/contact  ->gives contact page.
//               },              
//               // Dynamic value kese lee URL se:--
//               // Suppose we give a path OR url http://localhost:5173/user/100 and we want show in UI as user:100 ,then how do we create route?
//               {
//                 path:'user/:userID', // "userID",we can use this in 'User' component.
//                 element:<User/>
//               },
//               {
//                 path:'github', 
//                 element:<Github />,
//                 // http://localhost:5173/github  ->gives contact page.

//                 //Note:--
//                   //Now a days 'React-Router' gives us an external feature i.e 'loader'.
//                   //In React Router, a loader is typically used to handle asynchronous code splitting. Code splitting is a technique used to improve the performance of your React application by splitting the code into smaller chunks and loading them on demand. 
//                   //Loaders are often used to display a loading indicator while the required code is being fetched.
//                   //We can directly Fetch an API using 'Loader'.

//                 loader:async () => {
//                   //Fetch an API which gives a promise
//                   const response=await fetch('https://api.github.com/users/prabhat-mishra29')

//                   return response.json()
//                 }
//               }
//             ]
//           }
//         ])
      

//     /*
//       //2nd way:--
//         const router=createBrowserRouter(
//             createRoutesFromElements(
//                 <Route path='/' element={<Layout/>}>
//                     <Route path='' element={<Home/>}/>   //http://localhost:5173/
//                     <Route path='about' element={<About/>}/>    //http://localhost:5173/about
//                     <Route path='contact' element={<Contact/>}/>    //http://localhost:5173/contact
//                     <Route path='user/:userID' element={<User/>}/>    //http://localhost:5173/user/100
//                     <Route path='github' element={<Github/>}/>    //http://localhost:5173/github
//                 </Route>
//             ) 
//         )
//     */

//     /*
//       //Nesting:---
//         <Route>
//               <Route>
//                   <Route/>
//               </Route>
//         </Route>
//     */

//     //  Kind of a nesting :-- main page , then inside that we have home , about , contact , github
//         ReactDOM.createRoot(document.getElementById('root')).render(
//           <React.StrictMode>
//             <RouterProvider router={router}/>
//           </React.StrictMode>,
//         )



// // Mega Project:--
// import { Provider } from 'react-redux'
// import { store } from './Project/08_Mega_project/store/store.js'
// import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// import Home from './Project/08_Mega_project/pages/Home.jsx'
// import { AuthLayout, Login } from './Project/08_Mega_project/Components/index.js'
// import AddPost from "./Project/08_Mega_project/pages/AddPost.jsx";
// import Signup from './Project/08_Mega_project/pages/Signup.jsx'
// import EditPost from "./Project/08_Mega_project/pages/EditPost";
// import Post from "./Project/08_Mega_project/pages/Post";
// import AllPosts from "./Project/08_Mega_project/pages/AllPosts";

//     const router = createBrowserRouter([
//       {
//         path: "/",
//         element: <App />,
//         children: [
//             {
//                 path: "",
//                 element: <Home />,
//             },
//             {
//                 path: "login",
//                 element: (
//                     <AuthLayout authentication={false}>
//                         <Login/>
//                     </AuthLayout>
//                 ),
//             },
//             {
//                 path: "signup",
//                 element: (
//                     <AuthLayout authentication={false}>
//                         <Signup/>
//                     </AuthLayout>
//                 ),
//             },
//             {
//                 path: "all-posts",
//                 element: (
//                     <AuthLayout authentication>
//                         {" "}
//                         <AllPosts />
//                     </AuthLayout>
//                 ),
//             },
//             {
//                 path: "add-post",
//                 element: (
//                     <AuthLayout authentication>
//                         {" "}
//                         <AddPost />
//                     </AuthLayout>
//                 ),
//             },
//             {
//                 path: "edit-post/:slug",
//                 element: (
//                     <AuthLayout authentication>
//                         {" "}
//                         <EditPost />
//                     </AuthLayout>
//                 ),
//             },
//             {
//                 path: "post/:slug",
//                 element: <Post />,
//             },
//         ],
//     },
//     ])

//     ReactDOM.createRoot(document.getElementById('root')).render(
//       <React.StrictMode>
//         <Provider store={store}>
//           <RouterProvider router={router}/>
//         </Provider>
//       </React.StrictMode>
//     )



//Weather app:-
    import { RouterProvider, createBrowserRouter } from 'react-router-dom'
    import Home from './Project/09_weather_app/components/Home.jsx'
    import SearchWeather from './Project/09_weather_app/components/SearchWeather.jsx'
    import YourWeather from './Project/09_weather_app/components/YourWeather.jsx'

        const router = createBrowserRouter([
            {
                path: "/",
                element: <App />,
                children: [
                    {
                        path: "/",
                        element:<Home/>
                    },
                    {
                        path: "/your-weather",
                        element:<YourWeather/>
                    },
                    {
                        path: "/search-weather",
                        element:<SearchWeather/>
                    },
                ],
            },
        ])

    ReactDOM.createRoot(document.getElementById('root')).render(
        <React.StrictMode>
            <RouterProvider router={router}/>
        </React.StrictMode>,
        )