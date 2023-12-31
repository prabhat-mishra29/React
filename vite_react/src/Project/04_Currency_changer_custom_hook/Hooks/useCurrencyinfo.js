// Hook is nothing but a function.
// We want to make a custom hook like "useState" which return an array! 
//example:--
    function hello(){
        return [];
    }

// Custom hook can use build-in hooks
    import {useEffect,useState} from 'react';
    
    //Our hook deoesnot need optional argument , it needs only a veriable which will take currency_info 
    function useCurrencyinfo(currency){
        //everytime fetch api if any change occurs.

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

        useEffect(()=>{
            fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
            .then((Response)=>{
                return Response.json(); }).then((Response)=>{//hold the data
                                        setData(Response[currency]);  
                                    })
        },[currency]);
        //suppose the currency is usd , it means key : usd. To acces it's object we use square bracket.
        //USD se change hone wale sare currencies ka object doo..

        return data;
    }

    export default useCurrencyinfo;