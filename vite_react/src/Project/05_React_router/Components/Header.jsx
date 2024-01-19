import React from "react";
import {Link,NavLink} from 'react-router-dom'

// Link is used in place of <a> why?
    // Because when you are using <a> tag your page is refreshing once again , but in react that concepet is not allowed.
//NavLink provides some additional features.

function Header() {
    return ( 
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">

                    <Link to="/" className="flex items-center"> {/* to is similar to href in <a> */}
                        <img
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>


                    <div className="flex items-center lg:order-2">
                        <Link
                            to="#"
                            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link>
                    </div>


                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                {/* [ "YOU CAN USE CSS UNSING CALLBACKS , WHEN YOU ARE USING SAME UI AGAIN AND AGAIN!" ] */}
                                {/* NavLink gives you access of an extra variable that is 'isActive' */}
                                <NavLink
                                    to="" //It links to the 'path' in Router  i.e in main.jsx.
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 ${isActive ? "text-orange-700":"text-gray-700"}`
                                    }>
                                    Home
                                </NavLink>        
                            </li>

                            <li>
                                {/* [ "YOU CAN USE CSS UNSING CALLBACKS , WHEN YOU ARE USING SAME UI AGAIN AND AGAIN!" ] */}
                                {/* NavLink gives you access of an extra variable that is 'isActive' */}
                                <NavLink
                                    to="/about" //It links to the 'path' in Router  i.e in main.jsx.
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 ${isActive ? "text-orange-700":"text-gray-700"}`
                                    }>
                                    About
                                </NavLink>        
                            </li>

                            <li>
                                {/* [ "YOU CAN USE CSS UNSING CALLBACKS , WHEN YOU ARE USING SAME UI AGAIN AND AGAIN!" ] */}
                                {/* NavLink gives you access of an extra variable that is 'isActive' */}
                                <NavLink
                                    to="/contact" //It links to the 'path' in Router  i.e in main.jsx.
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 ${isActive ? "text-orange-700":"text-gray-700"}`
                                    }>
                                    Contact us
                                </NavLink>        
                            </li>

                            <li>
                                {/* [ "YOU CAN USE CSS UNSING CALLBACKS , WHEN YOU ARE USING SAME UI AGAIN AND AGAIN!" ] */}
                                {/* NavLink gives you access of an extra variable that is 'isActive' */}
                                <NavLink
                                    to="/github" //It links to the 'path' in Router  i.e in main.jsx.
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 ${isActive ? "text-orange-700":"text-gray-700"}`
                                    }>
                                    Github
                                </NavLink>        
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        </header>
     );
}

export default Header;