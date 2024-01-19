import { useEffect, useState } from "react";

function Github() {
    const [data,setData]=useState([]);
    //To gate out 'Github' followers we fetch an API using "useEffect"
    useEffect(()=>{
        fetch('https://api.github.com/users/prabhat-mishra29')
        .then(Response=>Response.json())
        .then(data=>setData(data))//show in UI
    },[])

    return ( 
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">Github followers:{data.followers}
        <img src={data.avatar_url} alt="Git pictures" width={300}/>
        </div>
     );
}

export default Github;