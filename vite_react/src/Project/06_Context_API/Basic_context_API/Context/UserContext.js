// Pure 'JS' is used here .

import React from 'react'

const UserContext=React.createContext();

export default UserContext;

// you first need to create a context object. This can be done using the React.createContext() function.
// Context gives provider which is a function.
// It acts as a wrapper.
/*
    <UserContextProvider>
        <Login />
        <Card>
            <Data/>
        </Card>
    </UserContextProvide>
*/
// All components in <UserContextProvider> can access all states that is present in global variable UserContext.
// Go to "UserContextProvider" component.