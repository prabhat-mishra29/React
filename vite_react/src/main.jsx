import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)



// React Router:---

    // // We insert React-router to render , so we do not need for <app/>
    // // We use "RouterProvider" to do so . It means "Given a Remix Router instance, render the appropriate UI"  and it needs a prop i.e 'router'. 
    // // We can say that "RouterProvider" is kind of a wrapper.

    //   import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
    //   import Layout from './Project/05_React_router/Layout.jsx'
    //   import Home from './Project/05_React_router/Components/Home.jsx'
    //   import About from './Project/05_React_router/Components/About.jsx'
    //   import Contact from './Project/05_React_router/Components/Contact.jsx'
    //   import User from './Project/05_React_router/User/User.jsx'
    //   import Github from './Project/05_React_router/Components/Github.jsx'

    //   //1st way:--
    //     const router=createBrowserRouter([
    //       {
    //         path:'/',
    //         element:<Layout/>,
    //         // Suppose the url is http://localhost:5173
    //         // http://localhost:5173/ start
    //         children:[
    //           {
    //             path:'',
    //             element:<Home/>,
    //             // http://localhost:5173/  ->gives home page as default page.
    //           },
    //           {
    //             path:'about',
    //             element:<About/>,
    //             // http://localhost:5173/about  ->gives about page.
    //           },
    //           {
    //             path:'contact',
    //             element:<Contact/>,
    //             // http://localhost:5173/contact  ->gives contact page.
    //           },

              
    //           // Dynamic value kese lee URL se:--
    //           // Suppose we give a path OR url http://localhost:5173/user/100 and we want show in UI as user:100 ,then how do we create route?
    //           {
    //             path:'user/:userID', // ":userId",we can use this in 'User' component.
    //             element:<user/>
    //           },

        
    //           {
    //             path:'github', 
    //             element:<Github />
    //           }

    //           //Learn react-router loader!
    //         ]
    //       }
    //     ])
      

    // /*
    //   //2nd way:--
    //     const router=createBrowserRouter(
    //         createRoutesFromElements(
    //             <Route path='/' element={<Layout/>}>
    //                 <Route path='' element={<Home/>}/>   //http://localhost:5173/
    //                 <Route path='about' element={<About/>}/>    //http://localhost:5173/about
    //                 <Route path='contact' element={<Contact/>}/>    //http://localhost:5173/contact
    //                 <Route path='user/:userID' element={<User/>}/>    //http://localhost:5173/user/100
    //                 <Route path='github' element={<Github/>}/>    //http://localhost:5173/github
    //             </Route>
    //         ) 
    //     )
    // */


    // //  Kind of a nesting :-- main page , then inside that we have home , about , contact , github
    //     ReactDOM.createRoot(document.getElementById('root')).render(
    //       <React.StrictMode>
    //         <RouterProvider router={router}/>
    //       </React.StrictMode>,
    //     )