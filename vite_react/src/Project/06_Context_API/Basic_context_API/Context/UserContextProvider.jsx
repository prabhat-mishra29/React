import React, { useState } from 'react';
import UserContext from './UserContext';

const UserContextProvider=({children})=>{
    // children is nothing but a tag like div.It is generic name.
    // Joo v arah hai usse agge pass karr doo.
    // for accesing values in UserContext we use a method '.Provider'.
    // "UserContext.Provider" needs a object,which contains whatever data ,you are going to accessed.
    const[user,setUser]=useState(null);

    //It is not mandatory that you can give only states to context-object. You can give methods and variables also. [checkout in Theme.js]

    return(
        <UserContext.Provider value={{user,setUser}}> {/* We provide object here. */}
        {/* We know that global variable has some data i.e is stored in user and we want to give to it's children but why we put setUser method in value? */}
        {/* Using setUser method we can add data in user via it's children. */}
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;

// Another way you can create a context_API , check out in Theme.js