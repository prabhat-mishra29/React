function MainBox({weatherInfo}) {
    const cityName=weatherInfo?.name;
    const countryIcon = `https://flagcdn.com/144x108/${weatherInfo?.sys?.country.toLowerCase()}.png`;
    const desc = weatherInfo?.weather?.[0]?.main;
    const weatherIcon= `http://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;
    const temp= `${weatherInfo?.main?.temp.toFixed(2)} °C`;
    const windspeed = `${weatherInfo?.wind?.speed.toFixed(2)}m/s`;
    const humidity= `${weatherInfo?.main?.humidity}%`;
    const cloudiness = `${weatherInfo?.clouds?.all}%`;

    return(
        <div className="w-[90%] my-0 mx-auto mt-5 max-w-[1000px] flex flex-col items-center">
            <div className="flex items-center gap-y-0 gap-x-2">
                <p className="text-4xl">{cityName}</p>
                <img className="w-[30px] h-[30px] object-contain" src={countryIcon}/>
            </div>

            <p>{desc}</p>

            <img src={weatherIcon}/>

            <p>{temp}</p>

            <div className="w-[90%] my-0 mx-auto mt-8 flex justify-center flex-wrap gap-y-[10px] gap-x-[20px]">
                <div class="w-[30%] max-w-[200px] bg-slate-400 rounded p-4 flex flex-col justify-between items-center gap-y-[5px] gap-x-0">
                    <img src="https://codehelp-weather-app.netlify.app/assets/wind.png" className="w-[50px] h-[50px] object-cover"/>
                    <p className="text-xl font-semibold">WINDSPEED</p>
                    <p className="text-lg font-extralight">{windspeed}</p>
                </div>
                <div class="w-[30%] max-w-[200px] bg-slate-400 rounded p-4 flex flex-col justify-between items-center gap-y-[5px] gap-x-0">
                    <img src="https://codehelp-weather-app.netlify.app/assets/humidity.png" className="w-[50px] h-[50px] object-cover"/>
                    <p className="text-xl font-semibold">HUMIDITY</p>
                    <p className="text-lg font-extralight">{humidity}</p>
                </div>
                <div class="w-[30%] max-w-[200px] bg-slate-400 rounded p-4 flex flex-col justify-between items-center gap-y-[5px] gap-x-0">
                    <img src="https://codehelp-weather-app.netlify.app/assets/cloud.png" className="w-[50px] h-[50px] object-cover"/>
                    <p className="text-xl font-semibold">CLOUDS</p>
                    <p className="text-lg font-extralight">{cloudiness}</p>
                </div>
            </div>
        </div>
    );
}

export default MainBox;