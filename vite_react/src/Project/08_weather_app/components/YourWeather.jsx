import { useEffect,useState } from "react";
import GrantLocation from "./GrantLocation";
import MainBox from "./MainBox";
import Loading from "./Loading";

function YourWeather() {
    const[loading,setLoading]=useState(true);
    const[data,setData]=useState({});
    const[Lat,setLat]=useState();
    const[Log,setLog]=useState();

    const API_key="d1845658f92b31c64bd94f06f7188c9c";

    //Check sessionstorage has data or not?
        // const [loader,setLoader]=useState(true);
        // const [session,setSession]=useState({});
        
        // useEffect(() => {
        //     const localCoordinates = JSON.parse( sessionStorage.getItem("user-coordinates") );

        //     if (localCoordinates) {
        //       setSession(localCoordinates);
        //     } 
        // }, []);


    const add=()=>{
        if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
        } 
        else { 
        alert("Geolocation is not supported by this browser.");
        }
    }

    function showPosition(position) {
        setLat(position.coords.latitude);
        setLog(position.coords.longitude);
    }

    useEffect( ()=>{
            if (Lat && Log) {
                fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${Lat}&lon=${Log}&appid=${API_key}&units=metric`)
                    .then(Response=>Response.json())
                        .then(data=>setData(data))//show in UI

            }

            setLoading(false)
        },[Lat,Log] );

        console.log(data);

    if(loading){
        return(
            <Loading/>
        );
    }
    else{
        if(Lat && Log){
            return(
                <MainBox weatherInfo={data}/>
            );
        }
        else{
            return(
                <GrantLocation add={add}/>
            );
        }
    }
}

export default YourWeather;