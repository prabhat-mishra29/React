import cloud from '../image/cloudy.png'

function Home() {
    return ( 
        <div className="w-[90%] my-0 mt-[30px] mx-auto max-w-[1000px] flex flex-col items-center">
            <h1 className='text-5xl'>Welcome to Weather App</h1>
            <img src={cloud} alt="" className='h-[350px]'/>
        </div>
     );
}

export default Home;