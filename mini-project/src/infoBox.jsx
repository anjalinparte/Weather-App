
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import "./infoBox.css";

export default function InfoBox({info}){
const INIT_URL = "https://plus.unsplash.com/premium_photo-1666794982581-f559609bc53a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MQ%3D%3D";
   
const Hot_URL="https://images.unsplash.com/photo-1493936734716-77ba6da66365?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
const COLD_URL="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
const  RAIN_URL="https://images.unsplash.com/photo-1613739118925-cde1e8f5d65b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFpbiUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

    return(
        <div className="InfoBox">
          
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80 ?  RAIN_URL: info.temp > 15 ? Hot_URL:COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
       {info.city}
        </Typography>
        <Typography variant="body2" color="text.secondary" component="span">
        
         <div>Temperature = {info.temp}&deg;C</div>
         <div>humidity = {info.humidity}&deg;C</div>
         <p>Min Temp = {info.temp_min}&deg;C</p>
         <p>Max Temp = {info.temp_max}&deg;C</p>
         <p>The weather can be describe as<i> {info.weather} </i>feels like{info.feelslike}&deg;C</p>
        </Typography>
      </CardContent>
      
    </Card>
    </div>
        </div>
    )
}