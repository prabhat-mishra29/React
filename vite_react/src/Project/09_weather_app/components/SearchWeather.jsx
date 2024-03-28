import { useState } from "react";
import useWeatherInfo1 from "../Hooks/useWeatherInfo1";
import MainBox from "./MainBox";
import Error from "./Error";
import Loading from "./Loading";

function SearchWeather() {

    const [data,setData]=useState({});

    const [city,setCity]=useState("");

    const[loading,setLoading]=useState(false);

/*
    //hook can not be declar inside a function:-
        const handelsubmit=(e)=>{
            e.preventDefault();
            const value=useWeatherInfo1({city});
            setData(value);
        }

        console.log(data)
*/

    const API_key="d1845658f92b31c64bd94f06f7188c9c";
        
    const handelsubmit=async()=>{

        if(city==""){
            return;
        }
        else{
            setLoading(true);
            try{
                const Response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`)
                const result=await Response.json();
                setData(result);
            }
            catch(error){
                throw error;
            }
            finally{
                setLoading(false)
            }
        }
    }

    console.log(data);
    console.log(Object.entries(data).length) //length of object

    if(loading){
        return(
            <Loading/>
        );
    }
    else{
        return (
            <>
                <form className="flex flex-row w-[90%] max-w-[550px] my-0 mx-auto mt-8 items-center justify-center gap-y-0 gap-x-3" onSubmit={handelsubmit}>
                    <input
                        type="text"
                        placeholder="Search for city ..."
                        className="w-[100%] h-[40px] py-0 px-[20px] bg-slate-400 rounded-xl focus:outline focus:outline-4 focus:outline-slate-300 placeholder:text-white"
                        value={city} //Wirring up with state
                        onChange={(e)=>
                            setCity(e.target.value)
                        }
                    />
                    <button type="submit" className="w-[40px] h-[40px] grid place-items-center rounded-full bg-slate-400">
                        <img src="https://codehelp-weather-app.netlify.app/assets/search.png" width={20} height={20} className="object-contain"/>
                    </button>
                </form>

                {
                    data.cod==404 || data.cod==429 &&(
                        <Error/>
                    ) 
                }

                {
                    Object.entries(data).length!=0 && data.cod!=404 && data.cod!=429 &&(
                        <MainBox weatherInfo={data}/>
                    )
                }

            </>
        );
    }
}
export default SearchWeather;