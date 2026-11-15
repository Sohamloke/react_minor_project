import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./Searchbox.css"
import { useState } from 'react';

export default function Searchbox({updateInfo}) {
    const Api_Url = "https://api.openweathermap.org/data/2.5/weather";
    const Api_Key = "54c65482c795b9066d15d05f82bbdea5";

    let [city, setCity] = useState("");
    let[error,setError] = useState(false);

    let getWheatherinfo = async () => {
        try{
            let response = await fetch(`${Api_Url}?q=${city}&appid=${Api_Key}&units=metric`);
            let jsonResponse = await response.json();
            console.log(jsonResponse)
            let result ={
                city:city,
                temp:jsonResponse.main.temp,
                tempMin:jsonResponse.main.temp_min,
                tempMax:jsonResponse.main.temp_max,
                humidity:jsonResponse.main.humidity,
                feelsLike:jsonResponse.main.feels_like,
                wheather:jsonResponse.weather[0].description
            }
            console.log(result);
            return result;
        } catch (err){
            throw error;
        }
        
    }

    let handleChange = (event) => {
        setCity(event.target.value);
    }

    let handleSubmit = async (event) => {
        try{
            event.preventDefault();
            console.log(city);
            setCity("");
          let newinfo = await getWheatherinfo();
          updateInfo(newinfo);
        }catch (err){
            setError(true);
        }
       
    }

    return (
        <div className='Searchbox'>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange} />
                <br /><br /> <br />
                <Button variant="contained" type='submit'>
                    Search
                </Button>
                {error && <p style={{color:"red"}}>"No such place exist"</p> }
            </form>
        </div>
    )
}