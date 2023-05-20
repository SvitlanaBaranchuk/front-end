import React from 'react';

function WeatherForecast({ forecastData }) {
  return (
    <div>
      <h2>Прогноз погоди на кілька днів</h2>
      {forecastData.map((data, index) => (
        <div key={index}>
          <p>Дата: {data.date}</p>
          <p>Температура: {data.temperature}°C</p>
          <p>Опис: {data.description}</p>
        </div>
      ))}
    </div>
  );
}

export default WeatherForecast;
