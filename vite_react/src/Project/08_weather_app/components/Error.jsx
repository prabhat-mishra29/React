function Error() {
    return ( 
        <div className="w-[90%] my-0 mx-auto max-w-[1000px] flex flex-col items-center">
            <img src="https://codehelp-weather-app.netlify.app/assets/not-found.png" className="w-[100%] max-w-[300px] aspect-square object-cover"/>
            <p className="text-center">City not found</p>
        </div>
    );
}

export default Error;