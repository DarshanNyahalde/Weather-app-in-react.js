import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';

import "./InfoBox.css";
export default function InfoBox({info}){
    const INIT_URL="https://images.unsplash.com/photo-1722858343990-1604f540c15d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww";
   
    const HOT_URL="https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const RAINY_URL="https://media.istockphoto.com/id/1429701799/photo/raindrops-on-asphalt-rain-rainy-weather-downpour.webp?a=1&b=1&s=612x612&w=0&k=20&c=jc45vpqNDgrvRZAn2foO82IhW9rUeXbQfxvLZaDW8H8=";
    return (
        <div className='InfoBox'>
            
            <div className='cardContainer'>
             <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80? RAINY_URL : info.temp>15 ? HOT_URL : COLD_URL }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {
            info.humidity>80
            ? <ThunderstormIcon/> 
            : info.temp>15
             ? <SunnyIcon/>
             : <AcUnitIcon/> 
             
          }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}component={"span"}>
          <div>Tempetrature={info.temp}&deg;C</div>
            <div>Min Temp={info.tempMin}&deg;C</div>
            <div>Max Temp={info.tempMax}&deg;C</div>
            <div>Humidity={info.humidity}%</div>
            <div>The weathes can be describe as $<i>{info.weather}</i> and Feels Like={info.feelsLike}&deg;C</div>

        </Typography>
      </CardContent>
      
    </Card>
    </div>
            
        </div>
    );
}
