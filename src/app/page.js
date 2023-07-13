'use client'
import { useState } from 'react'
import SearchBar from './components/SearchBar/SearchBar'
import WeatherPanel from './components/WeatherPanel/WeatherPanel'

export default function Home() {
  const [weatherData, setWeatherData] = useState(null)
  const [weatherForecast, setWeatherForecast] = useState(null)

  const handleSearch = (data) => {
    setWeatherData(data.weatherData)
    setWeatherForecast(data.weatherForecast)
  }

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <WeatherPanel
        weatherData={weatherData}
        weatherForecast={weatherForecast}
      />
    </div>
  )
}
