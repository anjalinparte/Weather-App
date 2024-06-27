import { TextField } from "@mui/material";
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({updateInfo}){
    let [city,setCity] = useState("");
let[error,setError] = useState("false");

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "52ce29477a3861c6e55d7d55d060e66d";

let getWeatherInfo = async()=>{
  try{
    let response = await fetch(`${API_URL}?q=${city} &appid=${API_KEY}`);
    let jsonResponse = await response.json();
    console.log( jsonResponse);
    let result = {
      
      temp:jsonResponse.main.temp,
      temp_min:jsonResponse.main.temp_min,
      temp_max:jsonResponse.main.temp_max,
      humidity:jsonResponse.main.humidity,
      feelslike:jsonResponse.main.feelslike,
      weather:jsonResponse.weather[0].description,
    }
    console.log.result;
    return result;
  }catch(error){
  throw err;
  }
  
};

   

let handleChange =(event)=>{
    setCity(event.target.value);
}

let handleSubmit = async (event)=>{
  try{
    event.preventDefault();
    console.log(city);
    setCity("");
 let newinfo = await  getWeatherInfo();
  updateInfo(newinfo);
  
  }catch(error){
    setError(true);
  }
   
}


return(
    <div className="SearchBox">
       
        <form onSubmit={handleSubmit}>
            <TextField id="outlined-basic" label="City Name" variant="outlined" required value={city} onChange={handleChange}></TextField>
            <br></br><br></br>
            <Button variant="contained" type="submit">
        Search
      </Button>
      
        </form>
      
    </div>
)
}