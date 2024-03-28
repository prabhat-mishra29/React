function GrantLocation({add}) {

/*
    //1.1st it will send you a location varification
    //2.if you accept that then it will give your lat and lon
    function getLocation() {
        if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
        } else { 
        console.log("Geolocation is not supported by this browser.");
        }
    }
    
    function showPosition(position) {
        let lat=position.coords.latitude;
        let lon=position.coords.longitude;
        console.log(lat,lon)
    }
*/


    return ( 
        <div className="w-[90%] my-0 mx-auto mt-[50px] max-w-[1000px] flex flex-col items-center">
            <img src="https://codehelp-weather-app.netlify.app/assets/location.png" width={80} height={80} className="mb-8"/>
            <p className="text-3xl font-semibold text-center">Grant Location Access</p>
            <p className="text-sm font-normal mt-3 mb-7 text-center tracking-wider">Allow Access To Get Weather Information</p>
            <button className="py-[10px] px-[30px] rounded-md cursor-pointer text-lg bg-slate-400" onClick={add}>Grant Access</button>
        </div>
    );
}

export default GrantLocation;