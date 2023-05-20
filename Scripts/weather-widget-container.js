import React, { useState, useEffect } from 'react';
import WeatherWidget from './WeatherWidget';
import WeatherForecast from './WeatherForecast';

function WeatherWidgetContainer() {
  const [isLoading, setIsLoading] = useState(true);
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getWeatherData()
      .then(data => {
        setWeatherData(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Помилка отримання даних погоди:', error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!weatherData) {
    return <div>Не вдалося отримати дані погоди.</div>;
  }

  return (
    <div>
      <WeatherWidget
        temperature={weatherData.currentWeather.temperature}
        description={weatherData.currentWeather.description}
        location={weatherData.currentWeather.location}
      />
      <WeatherForecast forecastData={weatherData.forecastWeather} />
    </div>
  );
}

function getWeatherData() {
  const url = 'https://api.weatherapi.com/v1/forecast.json?key=API_KEY&q=Kyiv&days=5'; 

  return fetch(url)
    .then(response => response.json())
    .then(data => {
      const currentWeather = {
        temperature: data.current.temp_c,
        description: data.current.condition.text,
        location: data.location.name
      };

      const forecastWeather = data.forecast.forecastday.map(day => ({
        date: day.date,
        temperature: day.day.avgtemp_c,
        description: day.day.condition.text
      }));

      return { currentWeather, forecastWeather };
    });
}

export default WeatherWidgetContainer;
