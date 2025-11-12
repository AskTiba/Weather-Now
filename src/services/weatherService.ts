const API_KEY = import.meta.env.VITE_OPENWEATHERMAP_API_KEY;
const API_BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const getWeatherData = async (city: string) => {
  const [weatherResponse, forecastResponse] = await Promise.all([
    fetch(`${API_BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`),
    fetch(`${API_BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`),
  ]);

  if (!weatherResponse.ok || !forecastResponse.ok) {
    throw new Error('Failed to fetch weather data');
  }

  const weatherData = await weatherResponse.json();
  const forecastData = await forecastResponse.json();

  return { weatherData, forecastData };
};
