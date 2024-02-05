//Header ekk optional hai.
//Kynki sarri values hmm nahi dikhana chahte hain.Special logout kisko dikhana hai woh hmme judge karna padega.
//Logout ke liye hmm conditional rendering karenge.
//Check user login hai ya nahi haii,uske hisab se show karenge.

import React from 'react'
import {Container, Logo, LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {

    //Whether authenticated or not using status:--
    //Whether active or not using status:--
    const authStatus=useSelector((state)=>state.status)

    //For 'routing' we can use 'createBrowserRouter' ,but in this project we use a different hook for routing.

        const navigate=useNavigate()
        // The 'useNavigate' hook is used for programmatic navigation in React applications using React Router.

        const navItems = [ //Array of objects
                {
                name: 'Home',
                slug: "/", //Url kaha pai ja raha hai
                active: true
                }, 
                {
                name: "Login",
                slug: "/login",
                active: !authStatus,
                },
                {
                name: "Signup",
                slug: "/signup",
                active: !authStatus,
                },
                {
                name: "All Posts",
                slug: "/all-posts",
                active: authStatus,
                },
                {
                name: "Add Post",
                slug: "/add-post",
                active: authStatus,
                },
            ]

    //Condition rendering:--
    //Joo Joo active hai show karoo..
    return ( 
        <header className='py-3 shadow bg-gray-500'>
            <Container>
                <nav className='flex'>
                    <div className='mr-4'>
                        <Link to='/'>
                            <Logo width='70px'/>
                        </Link>
                    </div>

                    <ul className='flex ml-auto'>
                        {navItems.map((item) => 
                            item.active ? (
                                <li key={item.name}>
                                    <button
                                    onClick={() => navigate(item.slug)}
                                                        //Each item ka slug pe jao
                                    className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                                    >{item.name}</button>
                                </li>
                            ) : null
                            )}

                            {/* Conditional rendering */}
                            {/* agar 'authStatus' true hai toh hii display hoga nahi toh nahi hoga. */}
                            {authStatus && (
                            <li>
                                <LogoutBtn />
                            </li>
                            )}
                    </ul>
                </nav>
            </Container>
        </header>
    );
}

export default Header;