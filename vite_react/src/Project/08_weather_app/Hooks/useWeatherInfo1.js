//This custom hook is made for getting data from API while taking parameter as 'city'.

import { useEffect,useState } from "react";

function useWeatherInfo1(city){
    //everytime fetch an api if any change occurs.

        //Essa konsa 'hook' hai jabb hmm invoke karre mount/unmount tabb activate hoo. =>"useEffect()"

        // Promise.then() takes two arguments, a callback for success and another for failure.
            // myPromise.then(
            //     function(value) { // code if successful },
            //     function(error) { // code if some error },
            // );

        // >The fetch() method starts the process of fetching a resource from a server.
        // >The fetch() method returns a Promise that resolves to a Response object.
        // >Most of the promises return in the form of "string" we have to convert it to json format.

        //to hold data we use 'useState'
        const [data,setData]=useState({}); //default is empty object.

        const API_key="d1845658f92b31c64bd94f06f7188c9c";

        useEffect(()=>{
            //https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric

            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`)
                .then( (Response)=> //1st then convert string into Json and no need to return anything just convert. 
                        ( Response.json() ) 
                            ).then( (Response)=>//2nd then hold the data and no need to return anything just hold.
                                    ( setData(Response) )  
                                        )
        
        },[city]);

        return data;
}

export default useWeatherInfo1;