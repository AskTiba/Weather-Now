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
  const [unit, setUnit] = useState("metric");

  const handleUnitChange = (selectedUnit: string) => {
    setUnit(selectedUnit === "Fahrenheit" ? "imperial" : "metric");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const { weatherData, forecastData } = await getWeatherData(city, unit);
        setWeatherData(weatherData);
        setForecastData(forecastData);
      } catch (error) {
        setError("Failed to fetch weather data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [city, unit]);

  return (
    <>
      <main className="text-lg font-sans lg:p-8">
        <Navbar
          onUnitChange={handleUnitChange}
          selectedUnit={unit === "metric" ? "Celsius" : "Fahrenheit"}
        />
        <Hero onCityChange={setCity} />
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {weatherData && forecastData && (
          <div className="grid md:grid-cols-3 md:gap-2 md:grid-flow-col md:grid-rows-2">
            <div className="md:col-span-2">
              <CityWeather weatherData={weatherData} unit={unit} />
              <DailyForecast forecastData={forecastData} unit={unit} />
            </div>
            <div className="md:row-span-2">
              <HourlyForecast forecastData={forecastData} unit={unit} />
            </div>
          </div>
        )}
      </main>
    </>
  );
}

export default App;
