import React,{useState,useContext} from 'react'
import UserContext from '../Context/UserContext';

// Global variable main see 'data' lenge.
    function Profile() {
        // How to fetch data from global variable 'UserContext'.
        const{user}=useContext(UserContext);

        if(!user) return ( <div>Please login</div> )
        return ( 
            <div>
                Welcome {user.userName}
            </div>
        );
    }

    export default Profile;