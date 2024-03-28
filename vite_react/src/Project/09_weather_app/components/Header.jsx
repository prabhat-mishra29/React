import {Link,NavLink} from 'react-router-dom'

function Header() {
    return ( 
        <header className="sticky w-[90%] mx-auto my-0 mt-7 max-w-[550px]">
            <ul className='flex flex-row justify-between cursor-pointer text-lg font-medium px-[8px] py-[5px] tracking-widest'>
                <li>
                    <NavLink
                        to="/your-weather" //It links to the 'path' in Router  i.e in main.jsx.
                        className={({isActive}) =>
                            `block py-2 pr-4 pl-3 duration-100 ${isActive ? "border-b-4":""}`
                        }>
                        Your Weather
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/search-weather" //It links to the 'path' in Router  i.e in main.jsx.
                        className={({isActive}) =>
                            `block py-2 pr-4 pl-3 duration-100 ${isActive ? "border-b-4":""}`
                        }>
                        Search Weather
                    </NavLink>
                </li>
            </ul>
        </header>
    );
}

export default Header;