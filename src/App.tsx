// import './App.css'
import CityWeather from "./components/layout/CityWeather";
import DailyForecast from "./components/layout/DailyForecast";
import Hero from "./components/layout/Hero";
import HourlyForecast from "./components/layout/HourlyForecast";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <>
      <main className="text-lg font-sans lg:p-8">
        <Navbar />
        <Hero />
        <div className="grid md:grid-cols-3 md:gap-2">
          <div className="md:col-span-2">
            <CityWeather />
            <DailyForecast />
          </div>
          <div className="md:col-start-3 h-full">
            <HourlyForecast />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
