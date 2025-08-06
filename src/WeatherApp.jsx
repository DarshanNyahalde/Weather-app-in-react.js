import SearchBox from "./SearchBox"
import { useState } from "react";
import InfoBox from "./InfoBox"

export default function WeatherApp() {
    const[weatherInfo, setWeatherInfo] = useState({
        city: "Pune",
        temp: 24.05,
        tempMin: 24.05,
        tempMax: 24.05,
        humidity: 78,
        feelsLike: 60,
        weather: "haza",
    });
    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return(<div style={{textAlign: "center"}}>    
        <h1>Weather App By Darshu</h1>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>

    </div>)
}