import React from 'react';

function WeatherWidget({ temperature, description, location }) {
  return (
    <div>
      <h2>Погода у {location}</h2>
      <p>Температура: {temperature}°C</p>
      <p>Опис: {description}</p>
    </div>
  );
}

export default WeatherWidget;
