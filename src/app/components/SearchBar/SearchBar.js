'use client'
import { useState } from 'react'
import b from './SearchBar.module.css'
import toast, { Toaster } from 'react-hot-toast'
import { fetchWeather, fetchWeatherForecast } from '../../api/openWeather/openWeatherApi'
import { fetchImage } from '../../api/pexels/pexelsApi'

export default function SearchBar({ onSearch }) {
  const [search, setSearch] = useState('')

  const onSubmit = async (e) => {
    toast.loading('Подождите')
    e.preventDefault()
    if (search === '' || !search) {
      toast.dismiss()
      toast.error('Поле пустое, поиск невозможен')
      onSearch({ weatherData: null, weatherForecast: null, imageCity: null })
      return
    }

    const { data: weatherData, error } = await fetchWeather(search)
    const weatherForecast = await fetchWeatherForecast(search)
    const imageCity = await fetchImage(search)

    if (error) {
      toast.dismiss()
      toast.error(error)
      onSearch({ weatherData: null, weatherForecast: null, imageCity: null })
      return
    }
    toast.dismiss()
    toast.success('Готово!')
    onSearch({ weatherData, weatherForecast, imageCity })
  }

  return (
    <div className={b.search}>
      <form onSubmit={onSubmit}>
        <input
          className={b.form}
          type='text'
          placeholder='Напишите город'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className={b.button}
          type='submit'
        >
          Поиск
        </button>
      </form>
      <Toaster />
    </div>
  )
}
