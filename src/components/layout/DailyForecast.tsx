import type { ForecastData, ForecastItem } from "../../types/weather";
import DailyForecastItem from "./DailyForecastItem";
import {
  iconDrizzle,
  iconFog,
  iconOvercast,
  iconPartlyCloudy,
  iconRain,
  iconSnow,
  iconStorm,
  iconSunny,
} from "../../assets/images";

interface DailyData {
  [date: string]: {
    day: string;
    icon: string;
    altText: string;
    maxTemperature: number;
    minTemperature: number;
  };
}

interface DailyForecastDisplayItem {
  day: string;
  icon: string;
  altText: string;
  maxTemperature: number;
  minTemperature: number;
}

interface DailyForecastProps {
  forecastData: ForecastData;
  unit: string;
}

export default function DailyForecast({
  forecastData,
  unit,
}: DailyForecastProps) {
  const weatherIcons: { [key: string]: string } = {
    "01d": iconSunny,
    "01n": iconSunny,
    "02d": iconPartlyCloudy,
    "02n": iconPartlyCloudy,
    "03d": iconOvercast,
    "03n": iconOvercast,
    "04d": iconOvercast,
    "04n": iconOvercast,
    "09d": iconDrizzle,
    "09n": iconDrizzle,
    "10d": iconRain,
    "10n": iconRain,
    "11d": iconStorm,
    "11n": iconStorm,
    "13d": iconSnow,
    "13n": iconSnow,
    "50d": iconFog,
    "50n": iconFog,
  };

  const dailyData = forecastData.list.reduce(
    (acc: DailyData, item: ForecastItem) => {
      const date = new Date(item.dt * 1000).toLocaleDateString(undefined, {
        weekday: "short",
      });
      if (!acc[date]) {
        acc[date] = {
          day: date,
          icon: item.weather[0].icon,
          altText: item.weather[0].description,
          maxTemperature: item.main.temp_max,
          minTemperature: item.main.temp_min,
        };
      } else {
        acc[date].maxTemperature = Math.max(
          acc[date].maxTemperature,
          item.main.temp_max
        );
        acc[date].minTemperature = Math.min(
          acc[date].minTemperature,
          item.main.temp_min
        );
      }
      return acc;
    },
    {} as DailyData
  );

  const dailyForecast: DailyForecastDisplayItem[] = Object.values(dailyData);

  return (
    <main className="my-8 px-4">
      <h1 className="my-3">Daily Forecast</h1>
      <section className="grid grid-cols-3 md:grid-cols-7 gap-4">
        {dailyForecast.map((item: DailyForecastDisplayItem, index) => (
          <DailyForecastItem
            key={index}
            day={item.day}
            icon={weatherIcons[item.icon]}
            altText={item.altText}
            maxTemperature={Math.round(item.maxTemperature)}
            minTemperature={Math.round(item.minTemperature)}
            unit={unit}
          />
        ))}
      </section>
    </main>
  );
}
