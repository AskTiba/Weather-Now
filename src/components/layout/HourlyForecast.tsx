import { useState } from "react";
import HourlyForecastItem from "./HourlyForecastItem";
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
import Dropdown from "../common/Dropdown/Dropdown";
import type { ForecastData, ForecastItem, Weather } from "../../types/weather";

interface HourlyItem {
  dt: number;
  main: {
    temp: number;
  };
  weather: Weather[];
}

interface HourlyForecastProps {
  forecastData: ForecastData;
  unit: string;
}

export default function HourlyForecast({
  forecastData,
  unit,
}: HourlyForecastProps) {
  const [selectedDay, setSelectedDay] = useState("Today");

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

  const getDayName = (date: Date) => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    if (date.toDateString() === today.toDateString()) {
      return "Today";
    } else if (date.toDateString() === tomorrow.toDateString()) {
      return "Tomorrow";
    } else {
      return date.toLocaleDateString(undefined, { weekday: "long" });
    }
  };

  let dayOptions: string[] = Array.from(
    new Set(
      forecastData.list.map((item: ForecastItem) =>
        getDayName(new Date(item.dt * 1000))
      )
    )
  );

  if (dayOptions.length < 7) {
    const needed = 7 - dayOptions.length;
    for (let i = 0; i < needed; i++) {
        const lastDate = forecastData.list[forecastData.list.length - 1].dt * 1000;
        const nextDate = new Date(lastDate + (i + 1) * 24 * 60 * 60 * 1000);
        dayOptions.push(getDayName(nextDate));
    }
  }

  const handleDaySelect = (day: string) => {
    setSelectedDay(day);
  };

  let filteredHourlyData = forecastData.list.filter((item: ForecastItem) => {
    const itemDate = new Date(item.dt * 1000);
    return getDayName(itemDate) === selectedDay;
  });

  if (filteredHourlyData.length === 0) {
    const lastDayName = getDayName(new Date(forecastData.list[forecastData.list.length - 1].dt * 1000));
    filteredHourlyData = forecastData.list.filter((item: ForecastItem) => {
      const itemDate = new Date(item.dt * 1000);
      return getDayName(itemDate) === lastDayName;
    });
  }

  const interpolateHourlyData = (data: ForecastItem[]): HourlyItem[] => {
    if (data.length < 2) {
      return data;
    }

    const interpolatedData: HourlyItem[] = [];
    for (let i = 0; i < data.length - 1; i++) {
      const start = data[i];
      const end = data[i + 1];
      const startTime = new Date(start.dt * 1000);
      const endTime = new Date(end.dt * 1000);
      const timeDiff = (endTime.getTime() - startTime.getTime()) / 3600000; // in hours

      interpolatedData.push(start);

      for (let j = 1; j < timeDiff; j++) {
        const interpolatedTime = new Date(startTime.getTime() + j * 3600000);
        const tempDiff = end.main.temp - start.main.temp;
        const interpolatedTemp = start.main.temp + (tempDiff / timeDiff) * j;

        interpolatedData.push({
          dt: interpolatedTime.getTime() / 1000,
          main: { temp: interpolatedTemp },
          weather: start.weather,
        });
      }
    }
    interpolatedData.push(data[data.length - 1]);
    return interpolatedData;
  };

  const hourlyData = interpolateHourlyData(filteredHourlyData).slice(0, 8);

  return (
    <section className="h-full w-full">
      <article className="bg-neutral-800 p-6 rounded-2xl h-full flex flex-col">
        <div className="mb-3 flex items-center w-full justify-between">
          <h3 className="text-xl font-bold">Hourly forecast</h3>
          <Dropdown
            options={dayOptions}
            selectedValue={selectedDay}
            onSelect={handleDaySelect}
            className="w-32"
          />
        </div>
        <div className="flex flex-col flex-1 justify-between gap-1 mt-2">
          {hourlyData.map((item: HourlyItem, index: number) => (
            <HourlyForecastItem
              key={index}
              time={new Date(item.dt * 1000).toLocaleTimeString(undefined, {
                hour: "numeric",
                hour12: true,
              })}
              temperature={Math.round(item.main.temp)}
              icon={weatherIcons[item.weather[0].icon]}
              altText={item.weather[0].description}
              unit={unit}
            />
          ))}
        </div>
      </article>
    </section>
  );
}
