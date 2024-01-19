// import About from "./Components/About";
// import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
// import Home from "./Components/Home";
import {Outlet} from 'react-router-dom';

function Layout() {
    return ( 
        <>
            {/* Watch-out video 12 of chai aur code 'react' */}
            {/* How to render header and footer in every section:-- */}
                {/* 1.using classical way:-- Call header and footer in every section. */}
                {/* 2.using 'outlet' :-- Renders the child route's element, if there is one. By using 'Outlet' we can do nesting of components. */}

            <Header />
            <Outlet /> {/* Outlet jidhar use hoga usee base banake uske andar ka child component sirf change karega. */}
            <Footer />
        </>
     );
}

export default Layout;