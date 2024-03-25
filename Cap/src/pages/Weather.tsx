import React, { useEffect, useState } from 'react';

// Define types for response data
interface WeatherData {
  name: string;
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  weather: {
    description: string;
  }[];
  wind: {
    speed: number;
    deg: number; // Wind direction in degrees
  };
}

const Weather = () => {
  const [zipcode, setZipcode] = useState('');
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null); // Specify type

  const fetchData = async (zipcode: string) => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&appid=72bdf4bf3f2e1b8c705e779e00bbee37&units=imperial`);
      if (!response.ok) {
        throw new Error('Failed to fetch weather data');
      }
      const data: WeatherData = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // Fetch data for the initial ZIP code
    fetchData(zipcode);
  }, [zipcode]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setZipcode(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Fetch data for the entered ZIP code
    fetchData(zipcode);
  };

  // Function to convert wind direction from degrees to compass direction
  const getWindDirection = (deg: number): string => {
    const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    const index = Math.round(deg / 45) % 8;
    return directions[index];
  };

  return (
    <div className="flex justify-center items-center h-screen" style={{ backgroundImage: "url('/weather.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-8">
        <h2 className="text-2xl font-semibold mb-4">Weather Information</h2>
        <form onSubmit={handleSubmit} className="flex mb-4">
          <input
            type="text"
            placeholder="Enter ZIP code"
            value={zipcode}
            onChange={handleInputChange}
            className="flex-grow py-2 px-4 rounded-l-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </form>
        {weatherData ? (
          <>
            <p><i className="fas fa-map-marker-alt"></i> Location: {weatherData.name}</p>
            <p><i className="fas fa-thermometer-three-quarters"></i> Temperature: {weatherData.main.temp}°F</p>
            <p><i className="fas fa-cloud"></i> Description: {weatherData.weather[0].description}</p>
            <p><i className="fas fa-temperature-high"></i> Feels like: {weatherData.main.feels_like}°F</p>
            <p><i className="fas fa-tint"></i> Humidity: {weatherData.main.humidity}%</p>
            <p><i className="fas fa-wind"></i> Wind Speed: {weatherData.wind.speed} mph, Direction: {getWindDirection(weatherData.wind.deg)}</p>
          </>
        ) : (
          <p>Loading weather data...</p>
        )}
      </div>
    </div>
  );
};

export default Weather;


