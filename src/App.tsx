import { useState, useEffect } from "react";
import CityWeather from "./components/layout/CityWeather";
import DailyForecast from "./components/layout/DailyForecast";
import Hero from "./components/layout/Hero";
import HourlyForecast from "./components/layout/HourlyForecast";
import Navbar from "./components/layout/Navbar";
import { getWeatherData } from "./services/weatherService";

function App() {
  const [city, setCity] = useState("New York");
  const [weatherData, setWeatherData] = useState<any>(null);
  const [forecastData, setForecastData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const { weatherData, forecastData } = await getWeatherData(city);
        setWeatherData(weatherData);
        setForecastData(forecastData);
      } catch (error) {
        setError("Failed to fetch weather data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [city]);

  return (
    <>
      <main className="text-lg font-sans lg:p-8">
        <Navbar />
        <Hero onCityChange={setCity} />
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {weatherData && forecastData && (
          <div className="grid md:grid-cols-3 md:gap-2">
            <div className="md:col-span-2">
              <CityWeather weatherData={weatherData} />
              <DailyForecast forecastData={forecastData} />
            </div>
            <div className="md:col-start-3 h-full">
              <HourlyForecast forecastData={forecastData} />
            </div>
          </div>
        )}
      </main>
    </>
  );
}

export default App;
