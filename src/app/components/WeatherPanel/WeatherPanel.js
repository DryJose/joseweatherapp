import '@fortawesome/fontawesome-svg-core/styles.css'
import w from './WeatherPanel.module.css'
import {
  faThermometerFull,
  faThermometer1,
  faTemperatureLow,
  faDroplet,
  faWind
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { iconsWeather } from '../../utils/WeatherUtils'

export default function WeatherPanel({ weatherData, weatherForecast }) {
  if ((!weatherData, !weatherForecast)) {
    return null
  }

  const { name, main, weather, wind } = weatherData

  const today = new Date()
  const day = today.getDate()
  const month = today.getMonth() + 1
  const year = today.getFullYear()
  const date = day + '/' + month + '/' + year

  const iconWeather = iconsWeather(weather[0].icon)

  const weatherDescription =
    weather[0].description.charAt(0).toUpperCase() +
    weather[0].description.slice(1).toLowerCase()

  return (
    <>
      <div className={w.item}>
        <div className={w.firs}>
          <div className={w.seconddata}>
            <div className={w.city}>
              <span className={w.temp}>{main.temp.toFixed(0)}°C</span>
              <span className={w.text}>{name}</span>
              <span className={w.text}>{date}</span>
            </div>
            <div className={w.weather}>
              <img
                className='object-contain'
                src={iconWeather}
                alt={weather[0].description}
                title={weatherDescription}
              />
              <span className={w.weather}>{weatherDescription}</span>
            </div>
          </div>
          <div className={w.param}>
            <div className={w.paramtext}>
              <span>{main.temp_max.toFixed(0)}°C</span>
              <FontAwesomeIcon icon={faThermometerFull} className={w.icons} />
              <span className={w.paramtext}>Максимальная температура</span>
            </div>
            <div className={w.paramtext}>
              <span>{main.temp_min.toFixed(0)}°C</span>
              <FontAwesomeIcon icon={faThermometer1} className={w.icons} />
              <span className={w.paramtext}>Минимальная температура</span>
            </div>
            <div className={w.paramtext}>
              <span>{main.feels_like.toFixed(0)}°C</span>
              <FontAwesomeIcon icon={faTemperatureLow} className={w.icons} />
              <span className={w.paramtext}>Ощущается как</span>
            </div>
            <div className={w.paramtext}>
              <span>{main.humidity}%</span>
              <FontAwesomeIcon icon={faDroplet} className={w.icons} />
              <span className={w.paramtext}>Влажность</span>
            </div>
            <div className={w.paramtext}>
              <span>{wind.speed}м/сек</span>
              <FontAwesomeIcon icon={faWind} className={w.icons} />
              <span className={w.paramtext}>Скорость ветра</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
