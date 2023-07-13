const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY

export async function fetchWeather(cityName) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&lang=ru&appid=${apiKey}`
    )

    if (response.status === 404) {
      return { data: null, error: 'Проверьте название города' }
    }

    const data = await response.json()
    return { data, error: null }
  } catch (error) {
    return { data: null, error: 'Ошибка сервера' }
  }
}

export async function fetchWeatherForecast(cityName) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&lang=es&appid=${apiKey}`
    )
    if (response.status === 404) {
      return { data: null, error: 'Упс' }
    }

    const data = await response.json()
    return { data, error: null }
  } catch (error) {
    return { data: null, error: 'Упс' }
  }
}
