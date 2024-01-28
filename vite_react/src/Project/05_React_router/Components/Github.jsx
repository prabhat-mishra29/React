import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
/*
    const [data,setData]=useState([]);

    //1st way:--
        //To gate out 'Github' followers we fetch an API using "useEffect"
        useEffect(()=>{
            fetch('https://api.github.com/users/prabhat-mishra29')
                .then(Response=>Response.json())
                    .then(data=>setData(data))//show in UI
        },[])
*/

    //2nd way:--
        //Using 'loader':--
        //For that we use a hook i.e 'useLoaderData'
        const data=useLoaderData();


    return ( 
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl flex flex-col items-center gap-2">
            <div>Github followers:{data.followers}  &  Github following:{data.following} </div>
            <img src={data.avatar_url} alt="Git pictures" width={300}/>
        </div>
     );
}

export default Github;