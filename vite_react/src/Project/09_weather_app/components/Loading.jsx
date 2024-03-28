function Loading() {
    return ( 
        <div className="w-[90%] my-0 mx-auto mt-8 max-w-[1000px] flex flex-col items-center">
            <img src="https://codehelp-weather-app.netlify.app/assets/loading.gif" width={150} height={150} />
            <p className="text-xl font-medium text-center">Loading . . .</p>
        </div>
    );
}

export default Loading;