// import './App.css'
import CityWeather from "./components/layout/CityWeather";
import DailyForecast from "./components/layout/DailyForecast";
import Hero from "./components/layout/Hero";
import HourlyForecast from "./components/layout/HourlyForecast";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <>
      <main className="text-lg font-sans">
        <Navbar />
        <Hero />
        <CityWeather/>
        <DailyForecast/>
        <HourlyForecast/>
      </main>
    </>
  );
}

export default App;
