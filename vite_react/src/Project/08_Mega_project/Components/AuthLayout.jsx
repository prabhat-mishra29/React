//Acts like a protected container.

import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

//file-name and function-name can be differnet.

export default function Protected({children, authentication = true}) {
    //Here 'children' is "children component".

    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)

    //Ask,user is login or not from store.
    const authStatus = useSelector(state => state.auth.status)

    useEffect(() => {
        //It will decide where do you want me to go? [login or homepage or etc]
        //and agar kuch change hua toh recheck karun ya na karun? 

         //  true && false !== true   => true
        if(authentication && authStatus !== authentication){
            navigate("/login")
        } 
        
        // false && true !== true => false
        else if(!authentication && authStatus !== authentication){
            navigate("/")
        }

        
        //TODO: make it more easy to understand

            // if (authStatus ===true){
            //     navigate("/")
            // } else if (authStatus === false) {
            //     navigate("/login")
            // }
            
            //let authValue = authStatus === true ? true : false


        setLoader(false)
    }, [authStatus, navigate, authentication])

  return loader ? <h1>Loading...</h1> : <>{children}</>
}
