import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";
import {useState} from "react";





export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo] = useState({
         
        city:"Wonderland",
        feelslike:24.84,
        temp:25.05,
        tempmin:25.05,
        tempmax:25.05,
        humidity:47,
        weather:"haze",
    });

let updateInfo = (newinfo)=>{
    setWeatherInfo(newinfo);
}

    return(
        <div style={{textAlign:"center"}}>
            <h2 >Weather App by Delta</h2>
            <SearchBox updateInfo={updateInfo}/>
           <InfoBox info={weatherInfo}/>
        </div>
    )
}