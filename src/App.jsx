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
  return (
    
      <div className="container">
          <div className="input-box">
            <input type='text'id='search' className='search'></input>
            <img src={searchicon} className='searchicon'></img>

          </div>
          <WeatherDetails wind={wind}icon={icon} temp={temp} city={city} country={country}log={log} lat={lat} Humidity={Humidity}></WeatherDetails>
      </div>
  )
}

export default App
