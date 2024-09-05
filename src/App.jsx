import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import rainicon from './assets/rain.png'
import humidityicon from './assets/humidity.png'
import cloudicon from './assets/cloud.png'
import searchicon from './assets/search.png'
import './App.css'



const WeatherDetails=({wind,temp,icon,city,country,Humidity,log,lat})=>{
  return(
    <div className='wethercontainer'>
      <div className="images1">
        <img src={icon} className='icon'></img>
      </div>
      <div className="location">City : {city}</div>
      <div className="country">country : {country}</div>
      <div className="temp">Temparature : {temp}C</div>
      <div className="temp">windSpeed : {wind}C</div>
      <div className="temp">Humidity : {Humidity}C</div>
      <div className="log-log">
        <div className="log">
          <span> Longtitude : {log}</span>
        </div>
        <div className="lat">
          <span>lattitude : {lat}</span>
        </div>
      </div>
    </div>
  )
}

function App() {
  const [icon, seticon] = useState(rainicon)
  const [temp, settemp] = useState(0)
  const [Humidity, setHumidity] = useState(0)
  const [log, setlog] = useState(0)
  const [lat, setlat] = useState(0)
  const [city, setcity] = useState('chennai')
  const [country, setcountry] = useState('india')
  const [wind, setwind] = useState(30)
  const [loading, setloading] = useState(false)
  

  const search=async()=>{
    setloading(true)
    
    
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8f0791efd4db2094c4432fc1a273eb3e&units=metric`
     try{
      let response= await fetch(url);
      let data= await response.json();
      console.log(data);
      setHumidity(data.main.humidity);
      setlog(data.coord.lon);
      setcountry(data.sys.country);
      settemp(data.main.temp);
      setwind(data.wind.speed);
      setlat(data.coord.lat);
      setcity(data.name);

     }catch(error){
      console.log(error)

     }finally{
      setloading(false)

     };
  
  };

 
  


  const updatesearch=(e)=>{
    if (e.key==="Enter"){
      search()
    };
    };

  const updatecity=(e)=>{
    setcity(e.target.value)
  };

  return (
    
      <div className="container">
          <div className="input-box">
            <input type='text'id='search' className='search' value={city} onChange={updatecity} onKeyDown={updatesearch}></input>
            <img src={searchicon} className='searchicon' onClick={search}></img>

          </div>
          <WeatherDetails wind={wind} icon={icon} temp={temp} city={city} country={country} log={log} lat={lat} Humidity={Humidity}></WeatherDetails>
      </div>
  )
}

export default App
