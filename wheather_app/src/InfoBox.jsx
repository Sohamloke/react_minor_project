import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import LightModeIcon from '@mui/icons-material/LightMode';

export default function Infobox({ info }) {
    const INT_Url = "https://plus.unsplash.com/premium_photo-1673240845240-2fce9077a6e9?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const Hot_Url = "https://images.unsplash.com/photo-1647571592038-ded3dfcf0880?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const Cold_Url="https://images.unsplash.com/photo-1480990610018-5eed1a9099b1?q=80&w=1424&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const Rain_Url="https://images.unsplash.com/photo-1488034976201-ffbaa99cbf5c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return (
        <div className="InfoBox">
            <div className='card-container'>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={
                        info.humidity > 80 
                        ? Rain_Url 
                        : info.temp >15 
                        ? Hot_Url 
                        : Cold_Url
                    }
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                       {info.city}{
                        info.humidity > 80 
                        ? <ThunderstormIcon/>
                        : info.temp >15 
                        ? <LightModeIcon/>
                        : <AcUnitIcon/>
                        }
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}> 
                        <p>Temprature = {info.temp}&deg;C</p>
                        <p>Humidity = {info.humidity}</p>
                        <p>Min Temp = {info.tempMin}</p>
                        <p>Max Temp = {info.tempMax}</p>
                        <p>The Wheather can be Descripted as <i> {info.wheather} </i> and  feels like = {info.feelslike}&deg;C</p>
                    </Typography>
                </CardContent>
            </Card>
            </div>
        </div>
    )
}